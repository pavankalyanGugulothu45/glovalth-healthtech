from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.conf import settings
from django.core.cache import cache
from django.db import transaction
from django.utils.crypto import get_random_string

from rest_framework.decorators import api_view
from rest_framework.response import Response

import resend


def generate_staff_id():
    """
    Generates a unique Staff ID such as:
    GHT-7K4P92
    """

    while True:
        staff_id = "GHT-" + get_random_string(
            length=6,
            allowed_chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
        )

        if not User.objects.filter(username=staff_id).exists():
            return staff_id


@api_view(['POST'])
def register(request):

    try:
        print("REGISTER REQUEST:", request.data)

        staff_name = request.data.get('staffName')
        email = request.data.get('email')
        password = request.data.get('password')

        if not staff_name:
            return Response(
                {'error': 'Staff name is required'},
                status=400
            )

        if not email:
            return Response(
                {'error': 'Email address is required'},
                status=400
            )

        if not password:
            return Response(
                {'error': 'Password is required'},
                status=400
            )

        if len(password) < 8:
            return Response(
                {'error': 'Password must be at least 8 characters'},
                status=400
            )

        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'An account with this email already exists'},
                status=400
            )

        staff_id = generate_staff_id()

        with transaction.atomic():

            user = User.objects.create_user(
                username=staff_id,
                password=password,
                email=email,
                first_name=staff_name
            )

            resend.api_key = settings.RESEND_API_KEY

            resend.Emails.send({
                "from": settings.DEFAULT_FROM_EMAIL,
                "to": [email],
                "subject": "Your Glovalth Health Tech Staff ID",
                "html": f"""
                    <h2>Glovalth Health Tech Care Ltd</h2>

                    <p>Hello {staff_name},</p>

                    <p>
                        Your Glovalth Health Tech Care Ltd staff account
                        has been successfully created.
                    </p>

                    <p><strong>Your Staff ID:</strong></p>

                    <h2>{staff_id}</h2>

                    <p>
                        You can use this Staff ID and the password you
                        created to log in to the Glovalth Health Tech
                        dashboard.
                    </p>

                    <p>
                        Please keep your Staff ID safe and do not share
                        your password with anyone.
                    </p>

                    <p>
                        Regards,<br>
                        Glovalth Health Tech Care Ltd
                    </p>
                """
            })

        return Response({
            'message': 'Staff account created successfully',
            'staff_id': staff_id
        }, status=201)

    except Exception as e:

        print("REGISTER ERROR:", str(e))

        return Response(
            {
                'error': 'Unable to create staff account',
                'details': str(e)
            },
            status=500
        )


# =========================================================
# LOGIN
# =========================================================

@api_view(['POST'])
def login_view(request):

    try:
        username = request.data.get('username')
        password = request.data.get('password')

        print("LOGIN REQUEST FOR STAFF ID:", username)

        if not username or not password:
            return Response(
                {
                    'error': 'Staff ID and password are required'
                },
                status=400
            )

        user = authenticate(
            username=username,
            password=password
        )

        print("AUTHENTICATE RESULT:", user)

        if user:
            return Response({
                'message': 'Login successful',
                'staff_id': user.username,
                'staff_name': user.first_name
            })

        return Response({
            'error': 'Invalid Staff ID or password'
        }, status=400)

    except Exception as e:

        print("LOGIN ERROR:", repr(e))

        return Response(
            {
                'error': 'Login server error',
                'details': str(e)
            },
            status=500
        )


# =========================================================
# 🔐 PASSWORD RESET — STEP 1
# Send verification code to registered email
# =========================================================

@api_view(['POST'])
def request_password_reset(request):

    username = request.data.get('username')

    if not username:
        return Response(
            {'error': 'Staff ID is required'},
            status=400
        )

    try:
        user = User.objects.get(username=username)

    except User.DoesNotExist:
        return Response(
            {'error': 'Staff ID not found'},
            status=404
        )

    if not user.email:
        return Response(
            {
                'error':
                'No email address is associated with this account'
            },
            status=400
        )

    # Generate 6-digit verification code
    verification_code = get_random_string(
        length=6,
        allowed_chars="0123456789"
    )

    # Store code for 10 minutes
    cache.set(
        f"password_reset_{username}",
        verification_code,
        timeout=600
    )

    try:
        resend.api_key = settings.RESEND_API_KEY

        resend.Emails.send({
            "from": settings.DEFAULT_FROM_EMAIL,
            "to": [user.email],
            "subject": "Glovalth Health Tech Password Reset Code",
            "html": f"""
                <h2>Glovalth Health Tech Care Ltd</h2>

                <p>Hello {user.first_name},</p>

                <p>
                    We received a request to reset the password
                    for your staff account.
                </p>

                <p>Your verification code is:</p>

                <h1>{verification_code}</h1>

                <p>
                    This code will expire in 10 minutes.
                </p>

                <p>
                    If you did not request a password reset,
                    please ignore this email.
                </p>

                <p>
                    Regards,<br>
                    Glovalth Health Tech Care Ltd
                </p>
            """
        })

        return Response({
            'message':
            'Verification code sent to your registered email'
        })

    except Exception as e:

        print(
            "PASSWORD RESET EMAIL ERROR:",
            str(e)
        )

        return Response(
            {
                'error':
                'Unable to send verification email'
            },
            status=500
        )


# =========================================================
# 🔐 PASSWORD RESET — STEP 2
# Verify code and change password
# =========================================================

@api_view(['POST'])
def verify_password_reset(request):

    username = request.data.get('username')
    verification_code = request.data.get(
        'verification_code'
    )
    new_password = request.data.get(
        'new_password'
    )

    if not username:
        return Response(
            {'error': 'Staff ID is required'},
            status=400
        )

    if not verification_code:
        return Response(
            {
                'error':
                'Verification code is required'
            },
            status=400
        )

    if not new_password:
        return Response(
            {
                'error':
                'New password is required'
            },
            status=400
        )

    if len(new_password) < 8:
        return Response(
            {
                'error':
                'Password must be at least 8 characters'
            },
            status=400
        )

    try:
        user = User.objects.get(
            username=username
        )

    except User.DoesNotExist:
        return Response(
            {
                'error':
                'Staff ID not found'
            },
            status=404
        )

    stored_code = cache.get(
        f"password_reset_{username}"
    )

    if not stored_code:
        return Response(
            {
                'error':
                'Verification code expired. '
                'Please request a new code.'
            },
            status=400
        )

    if verification_code != stored_code:
        return Response(
            {
                'error':
                'Invalid verification code'
            },
            status=400
        )

    user.set_password(new_password)
    user.save()

    # Delete code so it cannot be reused
    cache.delete(
        f"password_reset_{username}"
    )

    return Response({
        'message':
        'Password reset successful'
    })


# =========================================================
# STAFF LIST
# =========================================================

@api_view(['GET'])
def staff_list(request):

    users = User.objects.all().values(
        'id',
        'username',
        'email',
        'first_name'
    )

    return Response(list(users))