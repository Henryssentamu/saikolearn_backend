from django.shortcuts import render
from django.core.exceptions import ValidationError
from rest_framework import mixins, generics
from .models import School, Course
from .serializers import SchoolSerializer, CourseSerializer


# Create your views here.

class CreateSchool(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class CreateCourse(generics.ListCreateAPIView):
    queryset  = Course.objects.all()
    serializer_class = CourseSerializer

class ListUpdateAndDeleteSchool(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    lookup_field = "school_code"

    def get_object(self):
        try:
            # getting school code  from the request body
            school_code = self.request.data.get("school_code")
            if not school_code:
                # if school code not in the body then check in the request params
                school_code = self.request.query_params.get("school_code")
        except Exception as e:
            raise ValidationError(f"Error while retrieving school code: {e}")

        if not school_code:
            raise ValidationError("School code is missing in both request body")

        try:
            return self.queryset.get(school_code=school_code)
        except School.DoesNotExist:
            raise ValidationError(f"School with code '{school_code}' does not exist.")

    def get(self, request):
        """Retrieve a specific school using 'school_code' from query parameters"""
        return self.retrieve(request=request)
    def put(self, request):
        """full update: all fields  required"""
        return self.update(request=request)
    def patch(self,request):
        """partial update: only changed fields  required"""
        return self.partial_update(request=request)
    def delete(self, request):
        """delete a school by school_code"""
        return self.destroy(request=request)
    
class ListUpdateAndDeleteCourse(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = "course_code"

    def get_object(self):
        try:
            course_code = self.request.data.get("course_code")
            if not course_code:
                course_code = self.request.query_params.get("course_code")
        except Exception as e:
            raise ValidationError(f"error while retrieving course code from http request:{e}")
        if not course_code:
            raise ValidationError("did not provide course_code in the request")
        try:
            return self.queryset.get(course_code= course_code)
        except Course.DoesNotExist:
            raise ValidationError(f"the course with {course_code} does not exits ")
    def get(self, request):
        """ specifice course"""
        return self.retrieve(request=request)
    def put(self, request):
        """full update: all fields required"""
        return self.update(request=request)
    def patch(self, request):
        """partial update: only changed field required"""
        return self.partial_update(request= request)
    def delete(self, request):
        """deleting a course by course code"""
        return self.delete(request=request)