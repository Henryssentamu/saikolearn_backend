# from django.db import models
# from django.contrib.auth.hashers import make_password
# from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin
# import secrets

# class GenerateIds:
#     def __init__(self):
#         self.studentId_prefix = "ST"

#     def generate_studentId(self):
#         return f"{self.studentId_prefix}{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID

# class RegisterStudent(AbstractBaseUser,PermissionsMixin):
#     date = models.DateField(auto_now_add=True )
#     studentid = models.CharField(max_length=200, primary_key=True)
#     fName = models.CharField(max_length=150)
#     sname = models.CharField(max_length=150)
#     email = models.EmailField(max_length=200, unique=True)
#     phonenumber = models.CharField(max_length=15, unique=True)
#     country = models.CharField(max_length=100)  
#     dateofbirth = models.DateField()
#     gender = models.CharField(max_length=6)
#     password = models.CharField(max_length=128)

#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)

#     # Use the default manager
#     objects = models.Manager()

#     USERNAME_FIELD = 'studentid'
#     REQUIRED_FIELDS = ['fName', 'sname', 'email', 'phonenumber', 'country', 'dateofbirth', 'gender']



#     def __str__(self):
#         return f"{self.studentid}"  # Better representation. this is sent back to a post request when a student is successfully registered

#     def save(self, *args, **kwargs):
#         """Generate a unique student ID before saving."""
#         if not self.studentid:
#             try:
#                 idobj = GenerateIds()
#                 existing_studentIds = set(RegisterStudent.objects.values_list("studentid", flat=True))

#                 new_id = idobj.generate_studentId()
#                 while new_id in existing_studentIds:  # Ensure uniqueness
#                     new_id = idobj.generate_studentId()

#                 self.studentid = new_id
#             except Exception as e:
#                 raise Exception(f"Error while generating student ID: {e}")
            
#             """hashing password b4 populating the register student database"""
        
#         if self.password and not self.password.startswith("pbkdf2_"):
#             self.password = make_password(self.password)

#         super().save(*args, **kwargs)  # Corrected super call


from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
import secrets

class GenerateIds:
    def __init__(self):
        self.studentId_prefix = "ST"

    def generate_studentId(self):
        return f"{self.studentId_prefix}{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID

class RegisterStudent(AbstractBaseUser, PermissionsMixin):
    date = models.DateField(auto_now_add=True)
    studentid = models.CharField(max_length=200, primary_key=True)
    fName = models.CharField(max_length=150)
    sname = models.CharField(max_length=150)
    email = models.EmailField(max_length=200, unique=True)
    phonenumber = models.CharField(max_length=15, unique=True)
    country = models.CharField(max_length=100)  
    dateofbirth = models.DateField()
    gender = models.CharField(max_length=6)
    password = models.CharField(max_length=128)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = models.Manager()

    USERNAME_FIELD = 'studentid'
    REQUIRED_FIELDS = ['fName', 'sname', 'email', 'phonenumber', 'country', 'dateofbirth', 'gender']

    def __str__(self):
        return f"{self.studentid}"

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

        if self.password and not self.password.startswith("pbkdf2_"):
            self.password = make_password(self.password)  # Hash password before saving

        super().save(*args, **kwargs)  # Call the parent class's save method
