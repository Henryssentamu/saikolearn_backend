from django.db import models
from backend.idGenerator import GenerateIds
from django.contrib.auth.models import Group, Permission
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin, BaseUserManager

# Create your models here.

class CustomUserManager(BaseUserManager):
    def __create_user(self, email=None, password=None, **extra_fields):
        if not email:
            raise ValueError("email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_superuser", True)
        return self.__create_user(email=email, password=password, **extra_fields)

    def create_employee(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault("is_active", True)
        return self.__create_user(email=email, password=password, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(
        Group,
        related_name='employee_user',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="employee_user_permissions",
        blank=True
    )
    employee_id = models.CharField(max_length=20, unique=True, editable=False)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, unique=True)
    email = models.EmailField(max_length=300, unique=True)
    country = models.CharField(max_length=50)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=6)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)  # 🔥 Required for Django admin
    is_superuser = models.BooleanField(default=False)


    USERNAME_FIELD = "email"  # 🔹 Use email for login
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    def save(self, *args, **kwargs):
        """Generate StudentId automatically"""
        if not self.employee_id:
            idObject = GenerateIds()
            existing_ids = set(User.objects.values_list("employee_id", flat=True))
            employeeId = idObject.employeeId()
            while employeeId in existing_ids:
                employeeId = idObject.employeeId()
            self.employee_id = employeeId

        super().save(*args, **kwargs)
    

    def __str__(self):
        return str(self.employee_id)
