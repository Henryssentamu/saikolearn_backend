
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from students.models import Student
import logging



logger = logging.getLogger(__name__)

class CustomAuthSerializer(serializers.Serializer):
    """custome serializer for custom authentication"""
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        logger.info(f"CustomAuthSerializer validate called with attrs: {attrs}")
        username = attrs.get('username')
        password = attrs.get('password')

        if not username or not password:
            raise serializers.ValidationError("Both username and password are required.")

        user = authenticate(
            # jwt methode which authenticate user by username and password
            request=self.context.get('request'),
            username=username,
            password=password
        )

        if not user:
            try:
                student = Student.objects.get(student_id=username)
                if not student.is_active:
                    raise serializers.ValidationError("Account is inactive.")
                raise serializers.ValidationError("Incorrect password.")
            except Student.DoesNotExist:
                raise serializers.ValidationError("No account found with this ID or email.")

        refresh = RefreshToken.for_user(user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_type': (
                'student' if hasattr(user, 'student_id') else
                'employee' if hasattr(user, 'employee_id') else
                'superuser'
            ),
            'user_id': (
                user.student_id if hasattr(user, 'student_id') else
                str(user.pk) if hasattr(user, 'id') else
                user.email
            ),
        }

        if hasattr(user, 'get_full_name'):
            data['full_name'] = user.get_full_name()
        elif hasattr(user, 'first_name') and hasattr(user, 'second_name'):
            data['full_name'] = f"{user.first_name} {user.second_name}"
        elif hasattr(user, 'first_name') and hasattr(user, 'last_name'):
            data['full_name'] = f"{user.first_name} {user.last_name}"

        logger.info(f"Generated token data: {data}")
        return data