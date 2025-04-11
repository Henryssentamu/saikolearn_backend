from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from backend.idGenerator import GenerateIds

# Create your models here.

class School(models.Model):
	SchoolId = models.CharField(max_length=50, primary_key=True, editable=False)
	SchoolName = models.CharField(max_length=100)
	Dean = models.CharField(max_length=100)
	def save(self, *args, **kwargs):
		if not self.SchoolId:
			existingSchoolIdz = School.objects.values_list("SchoolId", flat=True)
			idobj = GenerateIds()
			id = idobj.school_Id()
			while id in existingSchoolIdz:
				id = idobj.school_Id()
			self.SchoolId = id
		super().save(*args, **kwargs)
	def __str__(self):
		return f"school id{self.SchoolId}"
			
			

class Course(models.Model):
	CourseId = models.CharField(max_length=50, primary_key=True,editable=False)
	SchoolId = models.ForeignKey(School, on_delete=models.CASCADE, to_field='SchoolId',db_column='SchoolId')
	CourseInstractor = models.CharField(max_length=100)
	YoutubeLink = models.URLField(max_length=500, unique=True)
	def save(self, *args, **kwargs):
		if not self.CourseId:
			existingCourseIds = Course.objects.values_list("CourseId", flat=True)
			idobj = GenerateIds()
			id = idobj.course_Id()
			while id in existingCourseIds:
				id = idobj.course_Id()
			self.CourseId = id
		super().save(*args, **kwargs)
	def __str__(self):
		return f"course id:{self.CourseId}"

class CourseResources(models.Model):
    courseId = models.ForeignKey(Course, on_delete=models.CASCADE, to_field="CourseId", db_column="CourseId")
    live_link = models.URLField(max_length=500 )
    recorded_link = models.URLField(max_length=500)

    def __str__(self):
        return f"Resources for {self.courseId}"



	