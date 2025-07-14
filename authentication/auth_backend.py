from django.contrib.auth.backends import ModelBackend
from students.models import Student
from user.models import User


class UserAuthentication(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        # 1. Try Superuser login via email
        try:
            user = User.objects.get(email=username)
            if user.is_superuser and user.check_password(password):
                return user
        except User.DoesNotExist:
            pass

        # 2. Try Employee login via employee_id
        try:
            user = User.objects.get(employee_id=username)
            if user.is_active and not user.is_superuser and user.check_password(password):
                return user
        except User.DoesNotExist:
            pass

        # 3. Try Student login via student_id
        try:
            student = Student.objects.get(student_id=username)
            if student.is_active and student.check_password(password):
                return student
        except Student.DoesNotExist:
            pass

        return None
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            try:
                return Student.objects.get(pk=user_id)
            except Student.DoesNotExist:
                return None
