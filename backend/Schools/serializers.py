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
		fields = ["CohortId","CourseId","CohortName","CohortStatus"]
		read_only_fields =["CohortId"]



class CourseWithCohortsSerializer(serializers.ModelSerializer):
    cohorts = serializers.SerializerMethodField()
    class Meta:
        model = Course
        fields = ["CourseId","CourseName","SchoolId","CourseInstractor","YoutubeLink", "cohorts"]

    def get_cohorts(self, course):
        return CourseCohortSerializer(course.coursecohort_set.filter(CohortStatus=True), many=True).data
	
class CourseResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseResources
        fields = ["courseId","CohortId", "live_link", "recorded_link"]

