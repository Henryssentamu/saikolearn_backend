from django.db import models
import secrets

class GenerateIds:
    def __init__(self):
        self.studentId_prefix = "ST"

    def generate_studentId(self):
        return f"{self.studentId_prefix}{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID

class RegisterStudent(models.Model):
    date = models.DateField(auto_now_add=True )
    studentid = models.CharField(max_length=200, primary_key=True)
    fName = models.CharField(max_length=150)
    sname = models.CharField(max_length=150)
    email = models.CharField(max_length=200, unique=True)
    phonenumber = models.CharField(max_length=15, unique=True)
    country = models.CharField(max_length=100)  
    dateofbirth = models.DateField()
    gender = models.CharField(max_length=6)
    password = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.studentid}"  # Better representation

    def save(self, *args, **kwargs):
        """Generate a unique student ID before saving."""
        if not self.studentid:
            try:
                idobj = GenerateIds()
                existing_studentIds = set(RegisterStudent.objects.values_list("studentid", flat=True))

                new_id = idobj.generate_studentId()
                while new_id in existing_studentIds:  # Ensure uniqueness
                    new_id = idobj.generate_studentId()

                self.studentid = new_id
            except Exception as e:
                raise Exception(f"Error while generating student ID: {e}")

        super().save(*args, **kwargs)  # Corrected super call
