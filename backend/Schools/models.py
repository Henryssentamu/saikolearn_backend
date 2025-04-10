from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.

class School(models.Model):
	SchoolId = models.CharField(max_length=50, primary_key=True, editable=False)
	SchoolName = models.CharField(max_length=100)
	Dean = models.CharField(max_length=100)
class Course(models.Model):
	
	CourseId = models.CharField(max_length=50, primary_key=True,editable=False)
	SchoolId = models.ForeignKey(School, on_delete=models.CASCADE, to_field='SchoolId',db_column='SchoolId')
	SchoolName = models.CharField(max_length=100)
	CourseInstractor = models.CharField(max_length=100)
	YoutubeLink = models.URLField(editable=False, unique=True)
	