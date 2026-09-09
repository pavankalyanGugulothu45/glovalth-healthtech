from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.conf import settings
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

            # Send Staff ID using Resend API
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


@api_view(['POST'])
def login_view(request):

    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {'error': 'Staff ID and password are required'},
            status=400
        )

    user = authenticate(
        username=username,
        password=password
    )

    if user:
        return Response({
            'message': 'Login successful',
            'staff_id': user.username,
            'staff_name': user.first_name
        })

    return Response({
        'error': 'Invalid Staff ID or password'
    }, status=400)


@api_view(['POST'])
def reset_password(request):

    username = request.data.get('username')
    new_password = request.data.get('new_password')

    if not username or not new_password:
        return Response(
            {'error': 'Staff ID and new password are required'},
            status=400
        )

    try:

        user = User.objects.get(username=username)

        if len(new_password) < 8:
            return Response(
                {'error': 'Password must be at least 8 characters'},
                status=400
            )

        user.set_password(new_password)
        user.save()

        return Response({
            'message': 'Password reset successful'
        })

    except User.DoesNotExist:

        return Response({
            'error': 'Staff ID not found'
        }, status=404)


@api_view(['GET'])
def staff_list(request):

    users = User.objects.all().values(
        'id',
        'username',
        'email',
        'first_name'
    )

    return Response(list(users))