from django.db import models
from new_backend.idGenerator import IdGenerator

# Create your models here.


class Registration(models.Model):
    StudentId = models.CharField(max_length=20, unique=True, editable=False)
    FirstName = models.CharField(max_length=100)
    SecondName = models.CharField(max_length=100)
    PhoneNumber = models.CharField(max_length=15, unique=True)
    Email = models.EmailField(max_length=300, unique=True)
    Country = models.CharField(max_length=100)
    DateOfBirth = models.DateField()
    Gender = models.CharField(max_length=6)

    def save(self,*args, **kwargs):
        if not self.StudentId:
            existing_studentId = set(Registration.objects.values_list("StudentId",flat=True))
            obj = IdGenerator
            student_id = obj.student()
            while student_id in existing_studentId:
                student_id = obj.student()
            self.StudentId = student_id
        super().save(*args,**kwargs)

        
