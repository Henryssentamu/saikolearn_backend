from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import secrets

# Create your models here.

class CustomUserManager(BaseUserManager):
    def __init__(self):
        super().__init__()
        self.institute_prefix = "SIST"
    def __create_user(self, email=None, password=None, **extra_fields):
        if not email:
            raise ValueError("all user should provide email address")
        email = self.normalize_email(email=email)
        user = self.model(email, **extra_fields)
        user.set_password(password)
        user.save(self._db)
        return user
    def create_superuser(self,email=None,password=None,**extra_fields):
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)
        return self.__create_user(email=email,password=password,**extra_fields)
    def create_students(self,email,password,**extra_fields):
        extra_fields.setdefault("is_staff",False)
        extra_fields.setdefault("is_superuser",False)
        return self.__create_user(email=email,password=password,**extra_fields)
        
