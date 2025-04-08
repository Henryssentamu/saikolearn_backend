from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from .models import RegisterStudents
from .serializers import StudentRegisterSerializer

@api_view(["POST"])
def loginStudent(request):
    try:
        student = RegisterStudents.objects.get(StudentId=request.data.get("StudentId"))
        
        if check_password(request.data.get("Password"), student.Password):
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    except RegisterStudents.DoesNotExist:
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)


class Students(generics.ListCreateAPIView):
    """Handles student registration and listing"""
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=201)
        print("Serializer errors:", serializer.errors)  # 🔥 Add this
        return Response(serializer.errors, status=400)

    queryset = RegisterStudents.objects.all()
    serializer_class = StudentRegisterSerializer
    permission_classes = [AllowAny] 


class Astudent(generics.RetrieveUpdateDestroyAPIView):
    """Handles retrieving, updating, and deleting a student by StudentId"""
    queryset = RegisterStudents.objects.all()
    serializer_class = StudentRegisterSerializer
    lookup_field = "StudentId"


	


