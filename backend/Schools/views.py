from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from rest_framework.permissions  import AllowAny
from .models import School, Course, CourseResources
from .serializers import SchoolSerializer, CourseResourcesSerializer, CourseSerializer

# Create your views here.

class SchoolsDetails(generics.ListCreateAPIView):
	queryset = School.objects.all()
	serializer_class = SchoolSerializer
	permission_classes = [AllowAny]

class SchoolsDetailsForStudents(generics.ListAPIView):
	queryset = School.objects.all()
	serializer_class = SchoolSerializer
	permission_classes = [AllowAny]

class CourseDetails(generics.ListCreateAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permission_classes = [AllowAny]

class CourseDetailsForStudent(generics.ListAPIView):
	serializer_class = CourseSerializer
	permission_classes = [AllowAny]
	def get_queryset(self):
		school_id = self.request.query_params.get("SchoolId")
		if school_id:
			return Course.objects.filter(SchoolId=school_id)
		return Course.objects.none()
class CourseResourseDetails(generics.ListCreateAPIView):
	queryset = CourseResources.objects.all()
	serializer_class = CourseResourcesSerializer
	permission_classes = [AllowAny]


class ListUpdateDeleteSchoolDetails(generics.RetrieveUpdateDestroyAPIView):
	queryset = School.objects.all()
	serializer_class = SchoolSerializer
	lookup_field = "SchoolId"
class ListUpdateDeleteCourseDetails(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	lookup_field = "CourseId"


class ListUpdateDeleteCourseResourseDetails(generics.RetrieveUpdateDestroyAPIView):
	# we overided get_object() becoz we base on courseid which is a foreign key of course db
    serializer_class = CourseResourcesSerializer
    def get_object(self):
        course_id = self.kwargs.get("CourseId")
        return get_object_or_404(CourseResources, courseId__CourseId=course_id)



