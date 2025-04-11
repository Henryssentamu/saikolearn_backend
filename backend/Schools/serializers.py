from rest_framework import serializers
from .models import School, Course, CourseResources

class SchoolSerializer(serializers.ModelSerializer):
	class Meta:
		model = School
		fields = ["SchoolId", "SchoolName","Dean"]
		read_only_fields = ["SchoolId"]
	
class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Course
		fields = ["CourseId","SchoolId","CourseInstractor","YoutubeLink"]
		read_only_fields =["CourseId"]
	
class CourseResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseResources
        fields = ["courseId", "live_link", "recorded_link"]

