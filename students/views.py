from django.shortcuts import render
from django.core.exceptions import ValidationError
from rest_framework import status, mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# from rest_framework.permissions import isAuthenticated
from .models import Student
from .serializers import StudentSerializer, FlatStudentCourseResourceSerializer
from sistemail.views import SendGmail


# Create your views here.



class ListAndCreateStudents(generics.ListCreateAPIView):
    """
        this method is used to Register new students and to list all registered students
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def perform_create(self, serializer):
        # overrided this methode so that after it calls our cutome create() in studentserializer, it saves the student in the bd and 
        # the access that student and send them the student id via the provided email
        student = serializer.save()
        SendGmail(email_address=student.email).send_student_is_email(studentId=student.student_id)
    
class listUpdateAndDeleteAspecificStudent(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):

    """
        this classed based api modle handles pk operations but the pk is passed in the request body not in the url as url argument
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = "pk"

    def get_object(self):
        """
            overriding the get_object() so that we access the pk from the request body other than passing it as a request argument from the frontend
            which makes it hard for strings on passing and picking it from the urls.py.
            note: in the retrive(),update() and destroy() we dont have to pass pk as it is done by mixins when it calls the get_object() which we've overrided
        """
        if self.request.method == "GET" or self.request.method == "PATCH" or self.request.method == "PUT":
            # checking if pk is passed as a query paramater or request body for get requests
            # passed in the body request
            pk = self.request.data.get("pk")
        else:
            # passed as  request param
            pk = self.request.query_params.get("pk")
            

        if not pk:
            raise ValidationError("Missing pk in request body")
        try:
            return self.queryset.get(pk=pk)
        except Student.DoesNotExist:
            raise ValueError(f"student with:{pk} is not found ")

    def get(self, request):
        """Retrieve a specific student using 'pk' from query parameters"""
        return self.retrieve(request=request)
    def put(self, request):
        """Full update: all fields required"""
        return self.update(request=request)
    def patch(self,request):
        """Partial update: only changed fields required"""
        return self.partial_update(request=request)
    def delete(self, request):
        """Delete a student by pk"""
        return self.destroy(request=request)
    



class StudentDetails:
    def __init__(self, studentId):
        self.studentId = studentId
    def bioData(self):
        return  Student.objects.get(pk=self.studentId)
    def WithEnrollment(self):
        return Student.objects.prefetch_related('enrollments__cohort__course').get(pk=self.studentId) # i would have passed on 'enrollments' and the cohort and course details would've been 
    # servered by the nested serializer through carrying respecive queries which would make it slow, there4, the entire 'enrollments__cohort__course' is for query optimization
       
    
    

class StudentDetailsView(APIView):
    permission_classes = [IsAuthenticated]
    def flatten_student_course_data(self, student):
        flat_data = []

        full_name = f"{student.first_name} {student.second_name}"

        if student.enrollments.exists():
            for enrollment in student.enrollments.all():
                course = enrollment.cohort.course
                resources = course.resources.all()
                if resources:
                    for resource in resources:
                        flat_data.append({
                            "student_id": student.student_id,
                            "full_name": full_name,
                            "email": student.email,
                            "country":student.country,
                            "gender":student.gender,
                            "phone_number":student.phone_number,
                            "status": enrollment.status,
                            "course_code":course.course_code,
                            "start_date": enrollment.start_date,
                            "end_date": enrollment.end_date,
                            "course_name": course.course_name,
                            "resource_type": resource.resource_type,
                            "youtube_link": resource.youtube_link or ""})
        
        else:
            flat_data.append({
                        "student_id": student.student_id,
                        "full_name": full_name,
                        "email": student.email,
                        "country":student.country,
                        "gender":student.gender,
                        "phone_number":student.phone_number
                    })
        return flat_data
    def get(self, request, *args, **kwargs):
        if request.method == "GET":
            pk = request.GET.get("pk")
            if not pk:
                raise ValidationError("request body should have studentId with a key pk")
            try:
                student = Student.objects.prefetch_related(
                    'enrollments__cohort__course__resources'
                ).get(student_id=pk)
            except Student.DoesNotExist:
                raise ValidationError(f"no student with {pk}")
            # print(student)
            data = self.flatten_student_course_data(student=student)
            serializer = FlatStudentCourseResourceSerializer(data, many=True)
            serializer
            # print(serializer.data)
            return Response(serializer.data)

# students/views.py
# from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from rest_framework.exceptions import ValidationError
# from students.models import Student
# from .serializers import FlatStudentCourseResourceSerializer

# class StudentDetailsView(APIView):
#     permission_classes = [IsAuthenticated]

#     def flatten_student_course_data(self, student):
#         flat_data = []
#         full_name = f"{student.first_name} {student.second_name}"

#         if student.enrollments.exists():
#             for enrollment in student.enrollments.all():
#                 course = enrollment.cohort.course
#                 resources = course.resources.all()
#                 if resources:
#                     for resource in resources:
#                         flat_data.append({
#                             "student_id": student.student_id,
#                             "full_name": full_name,
#                             "email": student.email,
#                             "country": student.country,
#                             "gender": student.gender,
#                             "phone_number": student.phone_number,
#                             "status": enrollment.status,
#                             "course_code": course.course_code,
#                             "start_date": enrollment.start_date,
#                             "end_date": enrollment.end_date,
#                             "course_name": course.course_name,
#                             "resource_type": resource.resource_type,
#                             "youtube_link": resource.youtube_link or ""
#                         })
#         else:
#             flat_data.append({
#                 "student_id": student.student_id,
#                 "full_name": full_name,
#                 "email": student.email,
#                 "country": student.country,
#                 "gender": student.gender,
#                 "phone_number": student.phone_number
#             })
#         return flat_data

#     def get(self, request, *args, **kwargs):
#         student_id = request.user
#         print(student_id)
#         if not student_id:
#             raise ValidationError("Request must include student_id with key 'pk'")

#         try:
#             student = Student.objects.prefetch_related(
#                 'enrollments__cohort__course__resources'
#             ).get(student_id=student_id)  # Use student_id instead of pk
#         except Student.DoesNotExist:
#             raise ValidationError(f"No student found with student_id {student_id}")

#         data = self.flatten_student_course_data(student=student)
#         serializer = FlatStudentCourseResourceSerializer(data, many=True)
#         # serializer.is_valid(raise_exception=True)  # Validate serializer data
#         return Response(serializer.data)


