from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from rest_framework.permissions  import AllowAny
from rest_framework.exceptions import NotFound
from django.db.models import Prefetch


from .models import School, Course, CourseResources, CourseCohort
from .serializers import SchoolSerializer, CourseResourcesSerializer, CourseWithCohortsSerializer,CourseSerializer, CourseCohortSerializer

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

class CourseCohortDetails(generics.ListCreateAPIView):
	queryset = CourseCohort.objects.all()
	serializer_class = CourseCohortSerializer
	permission_classes = [AllowAny]

class ListUpdateDeleteCourseCohortDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseCohortSerializer

    def get_queryset(self):
        return CourseCohort.objects.all()

    def get_object(self):
        course_id = self.request.query_params.get("CourseId")
        if not course_id:
            raise NotFound("CourseId query parameter is required.")
        try:
            return CourseCohort.objects.get(CourseId__CourseId=course_id, CohortStatus=True)
        except CourseCohort.DoesNotExist:
            raise NotFound(f"No CourseCohort found for CourseId: {course_id}")
		
class ListCourseAndCohortDetails(generics.ListAPIView):
	serializer_class = CourseWithCohortsSerializer
	def get_queryset(self):
		school_id = self.request.query_params.get("SchoolId")
		if school_id:
			return Course.objects.filter(SchoolId=school_id)
		return Course.objects.none()
	"""the commented code can be used instead for query optimization """
	
	# def get_queryset(self):
    #     school_id = self.request.query_params.get("SchoolId")
    #     if school_id:
    #         return Course.objects.filter(SchoolId=school_id).prefetch_related(
    #             Prefetch('coursecohort_set', queryset=CourseCohort.objects.filter(CohortStatus=True))
    #         )
    #     return Course.objects.none()



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



