
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from backend.idGenerator import GenerateIds




class RegisterStudents(AbstractBaseUser, PermissionsMixin):
    StudentId = models.CharField(max_length=20, unique=True, editable=False)
    FirstName = models.CharField(max_length=100)
    SecondName = models.CharField(max_length=100)
    PhoneNumber = models.CharField(max_length=15, unique=True)
    Email = models.EmailField(max_length=300, unique=True)
    Country = models.CharField(max_length=50)
    DateOfBirth = models.DateField()
    Gender = models.CharField(max_length=6)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # 🔥 Required for Django admin
    is_superuser = models.BooleanField(default=False)

    # objects = StudentManager()  # 🔥 Attach custom manager

    USERNAME_FIELD = "Email"  # 🔹 Use Email for login
    REQUIRED_FIELDS = ["FirstName", "SecondName"]

    def save(self, *args, **kwargs):
        """Generate StudentId automatically"""
        if not self.StudentId:
            idObject = GenerateIds()
            existing_ids = set(RegisterStudents.objects.values_list("StudentId", flat=True))
            student_id = idObject.studentId()
            while student_id in existing_ids:
                student_id = idObject.studentId()
            self.StudentId = student_id

        super().save(*args, **kwargs)

    def __str__(self):
        return self.StudentId



	