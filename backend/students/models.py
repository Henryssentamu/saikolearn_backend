
from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin,Group,Permission
from django.utils.translation import gettext_lazy as _
from backend.idGenerator import GenerateIds





class RegisterStudents(AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(
        Group,
        related_name='student_users',  # 👈 make this unique too
        blank=True,
        help_text='The groups this student belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='student_permissions',  # 👈 make this unique too
        blank=True,
        help_text='Specific permissions for this student.',
        verbose_name='user permissions',
    )
    StudentId = models.CharField(max_length=20, primary_key=True, editable=False)
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


    USERNAME_FIELD = "StudentId"  # 🔹 Use Email for login
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
        return str(self.StudentId)
    

class StudentEnrolledInPrograms(models.Model):
    StudentId = models.ForeignKey(
        RegisterStudents,
        on_delete=models.CASCADE,
        to_field="StudentId",
        db_column="StudentId"
    )
    CourseId = models.CharField(max_length=50)
    CohortId = models.CharField(max_length=50)
    
    class Meta:
        unique_together = ('StudentId', 'CourseId')

    def __str__(self):
        return f"{self.StudentId} in {self.CourseId}"



	