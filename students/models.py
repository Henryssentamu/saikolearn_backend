from django.db import models
from backend.idGenerator import GenerateIds
from django.contrib.auth.models import Permission, Group
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# Create your models here.

class StudentManager(BaseUserManager):
    def create_student(self, email=None, password=None, **extra_fields):
        if not email:
            raise ValueError("student email is required")
        email = self.normalize_email(email)
        student = self.model(email=email, **extra_fields)
        student.set_password(password)
        student.save()
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault("is_active", True)
        # return self.create_student(email=email, password=password, **extra_fields)
        return student
       
    def create_superuser(self, *args, **kwargs):
        raise NotImplementedError("Students can't be superusers.")

class Student(AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(
        Group,
        related_name="student_user",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='student_user_permission',
        blank=True
    )
    student_id = models.CharField(max_length=20, primary_key=True, editable=False)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, unique=True)
    email = models.EmailField(max_length=300, unique=True)
    country = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=6)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # 🔥 Required for Django admin
    is_superuser = models.BooleanField(default=False)


    USERNAME_FIELD = "student_id"  # 🔹 Use studentid for login
    REQUIRED_FIELDS = []

    def save(self, *args, **kwargs):
        """Generate StudentId automatically"""
        if not self.student_id :
            idObject = GenerateIds()
            existing_ids = set(Student.objects.values_list("student_id", flat=True))
            studentId = idObject.studentId()
            while studentId in existing_ids:
                studentId = idObject.studentId()
            self.student_id = studentId

        super().save(*args, **kwargs)
    objects = StudentManager()

    def __str__(self):
        return str(self.student_id)
    
class StudentPayments(models.Model):
    student = models.ForeignKey('Student', on_delete=models.PROTECT, related_name="student_payments")
    amount = models.PositiveIntegerField()
    reference_number = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.student.student_id} - UGX {self.amount}"


    


