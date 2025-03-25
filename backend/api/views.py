from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.decorators import api_view,  authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
import json

import logging

logger = logging.getLogger(__name__)


from .models import RegisterStudent
from .serializers import StudentSerializer

class StudentRegistrationDetails(generics.ListCreateAPIView):
    queryset = RegisterStudent.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]
        
    def create(self, request, *args, **kwargs):
        # First, you need to initialize the serializer with the incoming request data
        serializer = self.get_serializer(data=request.data)
        # data = request.data
        # print(serializer)
        
        # Now, validate the data
        if serializer.is_valid():
            # Save the data to the database and retrieve the created instance
            student = serializer.save()
            
            # Return the response with the created student ID and a 201 status code
            return Response({"studentId": student.studentid}, status=status.HTTP_201_CREATED)
        else:
            # If the data is invalid, return a bad request response
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class FetchStudentDetails(generics.ListAPIView):
    queryset = RegisterStudent.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        """Retrieve all student details except password"""
        students = RegisterStudent.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def get_specific_student_details(request):
    """Retrieve a specific student's details by studentId"""
    studentid  = request.query_params.get('param', None)
    if not studentid:
        return Response({"error": "studentId parameter is required"}, status=400)
    try:
        
        print(f"student id:{studentid}")
        student = RegisterStudent.objects.get(studentid=studentid)
        serializer = StudentSerializer(student)
        print(f"student details")
        return Response(serializer.data)
    except RegisterStudent.DoesNotExist:
        return Response({"error": "Student not found"}, status=404)


# authenticating students

@api_view(["POST"])
@permission_classes([AllowAny])
def student_login(request):
    studentId = request.data.get("studentId")
    password = request.data.get("password")
    if not studentId or not password:
        return Response({"error": "Both studentId and password are required"}, status=400)
    try:

        student = get_object_or_404(RegisterStudent, studentid=studentId)
        if check_password(password, student.password):
            refresh = RefreshToken.for_user(student)
            return Response(
                {
                    "access": str(refresh.access_token),
                    "refresh":str(refresh)
                }
            )
            
        return Response({"Error": "invalde credentials"},status=400)
    except RegisterStudent.DoesNotExist:
        return Response({"error": "Student not found"}, status=404)




