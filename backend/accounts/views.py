from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view
from rest_framework.response import Response


# REGISTER STAFF
@api_view(['POST'])
def register(request):

    try:

        print("REQUEST DATA:", request.data)

        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        staff_name = request.data.get('staffName')
        
        print("STAFF NAME:", staff_name)

        # Validation
        if not username or not password:
            return Response(
                {'error': 'Username and password required'},
                status=400
            )

        # Check existing user
        if User.objects.filter(username=username).exists():
            return Response(
                {'error': 'Staff already exists'},
                status=400
            )

        # Create user in MySQL
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email
        )

        # Save staff name
        user.first_name = staff_name or ""
        user.save()

        return Response({
            'message': 'Staff created successfully'
        })

    except Exception as e:

        print("REGISTER ERROR:", str(e))

        return Response(
            {'error': str(e)},
            status=500
        )


# LOGIN
@api_view(['POST'])
def login_view(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(
        username=username,
        password=password
    )

    if user:
        return Response({
            'message': 'Login successful'
        })

    return Response({
        'error': 'Invalid credentials'
    }, status=400)


# RESET PASSWORD
@api_view(['POST'])
def reset_password(request):

    username = request.data.get('username')
    new_password = request.data.get('new_password')

    try:
        user = User.objects.get(username=username)

        user.set_password(new_password)
        user.save()

        return Response({
            'message': 'Password reset successful'
        })

    except User.DoesNotExist:

        return Response({
            'error': 'User not found'
        }, status=404)


# STAFF LIST
@api_view(['GET'])
def staff_list(request):

    users = User.objects.all().values(
        'id',
        'username',
        'email',
        'first_name'
    )

    return Response(list(users))