from rest_framework import serializers
from .models import School, Course, CourseResources, CourseCohort

class SchoolSerializer(serializers.ModelSerializer):
	class Meta:
		model = School
		fields = ["SchoolId", "SchoolName","Dean"]
		read_only_fields = ["SchoolId"]
	
class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Course
		fields = ["CourseId","CourseName","SchoolId","CourseInstractor","YoutubeLink"]
		read_only_fields =["CourseId"]

class CourseCohortSerializer(serializers.ModelSerializer):
	class Meta:
		model = CourseCohort
		fields = ["CohortId","CourseId","CohortName"]
		read_only_fields =["CohortId"]
	
class CourseResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseResources
        fields = ["courseId","CohortId", "live_link", "recorded_link"]

