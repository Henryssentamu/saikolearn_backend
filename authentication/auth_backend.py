# from rest_framework.exceptions import AuthenticationFailed
# from rest_framework_simplejwt.authentication import JWTAuthentication
# import logging
# from django.contrib.auth import get_user_model
# from django.contrib.auth.backends import ModelBackend
# from students.models import Student
# from user.models import User


# class UserAuthentication(ModelBackend):
#     def authenticate(self, request, username=None, password=None, **kwargs):
#         # 1. Try Superuser login via email
#         print("it is called")
#         try:
#             user = User.objects.get(email=username)
#             if user.is_superuser and user.check_password(password):
#                 return user
#         except User.DoesNotExist:
#             pass

#         # 2. Try Employee login via employee_id
#         try:
#             user = User.objects.get(employee_id=username)
#             if user.is_active and not user.is_superuser and user.check_password(password):
#                 return user
#         except User.DoesNotExist:
#             pass

#         # 3. Try Student login via student_id
#         try:
#             student = Student.objects.get(student_id=username)
#             if student.is_active and student.check_password(password):
#                 return student
#         except Student.DoesNotExist:
#             pass

#         return None
#     def get_user(self, user_id):
#         try:
#             return User.objects.get(pk=user_id)
#         except User.DoesNotExist:
#             try:
#                 return Student.objects.get(student_id=user_id)
#             except Student.DoesNotExist:
#                 return None

# auth_backend.py
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from students.models import Student
import logging

logger = logging.getLogger(__name__)

class UserAuthentication(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):

        """ for all different users to be authenticated,  return value is user so that we access them durint login token generation"""
        logger.info(f"UserAuthentication: Attempting authentication with username: {username}")

        UserModel = get_user_model()  # using the defualt  user.User model
        # 1. Try Superuser login via email
        try:
            user = UserModel.objects.get(email=username)
            logger.info(f"Found superuser with email: {username}")
            if user.is_superuser and user.check_password(password):
                logger.info("Superuser authentication successful")
                return user
            else:
                logger.info("Superuser authentication failed: not superuser or wrong password")
        except UserModel.DoesNotExist:
            logger.info("No superuser found with this email")

        # 2. Try Employee login via employee_id
        try:
            user = UserModel.objects.get(employee_id=username)
            logger.info(f"Found employee with employee_id: {username}")
            if user.is_active and not user.is_superuser and user.check_password(password):
                logger.info("Employee authentication successful")
                return user
            else:
                logger.info("Employee authentication failed: inactive, superuser, or wrong password")
        except UserModel.DoesNotExist:
            logger.info("No employee found with this employee_id")

        # 3. Try Student login via student_id
        try:
            student = Student.objects.get(student_id=username)
            logger.info(f"Found student with student_id: {username}")
            if student.is_active and student.check_password(password):
                logger.info("Student authentication successful")
                return student
            else:
                logger.info(f"Student authentication failed: is_active={student.is_active}")
        except Student.DoesNotExist:
            logger.info("No student found with this student_id")

        logger.warning("Authentication failed: no matching user found")
        return None

    def get_user(self, user_id):
        logger.info(f"UserAuthentication: get_user called with user_id: {user_id}")
        UserModel = get_user_model()
        try:
            # Try User model with integer pk
            user = UserModel.objects.get(pk=int(user_id))
            logger.info(f"Found User with pk: {user_id}")
            if user.is_active:
                return user
        except (UserModel.DoesNotExist, ValueError, TypeError):
            # Handle non-integer user_id (e.g., 'SIST/73679/NA')
            logger.info(f"No User found with pk: {user_id}, trying Student model")

        try:
            student = Student.objects.get(student_id=user_id)
            logger.info(f"Found Student with student_id: {user_id}")
            if student.is_active:
                return student
        except Student.DoesNotExist:
            logger.error(f"No User or Student found with user_id: {user_id}")
            return None


logger = logging.getLogger(__name__)    # accessing errores in logs
class CustomJWTAuthentication(JWTAuthentication):
    """ my jwt custom authentication which get the token and validates the user_id returned in it from userAuthentication model """
    def get_user(self, validated_token):
        logger.info("CustomJWTAuthentication: get_user called")
        user_id = validated_token.get('user_id')
        logger.info(f"Token user_id: {user_id}")

        UserModel = get_user_model()  # getting the user from the defualt user ie user.User 
        try:
            # Try to get User (superuser or employee)
            user = UserModel.objects.get(pk=user_id) # using the id extracted from the token to check if user exists in the user model
            logger.info(f"Found User with pk: {user_id}")
            if user.is_active:
                return user
            raise AuthenticationFailed('User is inactive', code='user_inactive')
        except (UserModel.DoesNotExist, ValueError):
            # ValueError occurs if user_id is not an integer (e.g., 'SIST/73679/NA')
            logger.info(f"No User found with pk: {user_id}")

        # Try to get Student
        try: 
            # here we Student model  instead  of  User from user
            student = Student.objects.get(student_id=user_id)
            logger.info(f"Found Student with student_id: {user_id}")
            if student.is_active:
                return student
            raise AuthenticationFailed('Student is inactive', code='student_inactive')
        except Student.DoesNotExist:
            logger.error(f"No Student found with student_id: {user_id}")
            raise AuthenticationFailed('No user or student found', code='invalid_user')
