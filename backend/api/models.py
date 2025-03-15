from django.db import models

# Create your models here.
class RegisterStudent(models.Model):
	fName = models.CharField(max_length=150)
	sname = models.CharField(max_length=150)
	email = models.CharField(max_length=200)
	phonenumber = models.CharField(max_length=15)

	def __str__(self):
		return super().__str__()

