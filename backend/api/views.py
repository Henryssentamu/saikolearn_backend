
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny


from .models import RegisterStudent
from .serializers import StudentSerializer

class StudentRegistrationDetails(generics.ListCreateAPIView):
    queryset = RegisterStudent.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]
        
    def create(self, request, *args, **kwargs):
        # First, you need to initialize the serializer with the incoming request data
        serializer = self.get_serializer(data=request.data)
        
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
def get_specific_student_details(request, studentid):
    """Retrieve a specific student's details by studentId"""
    try:
        student = RegisterStudent.objects.get(studentid=studentid)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    except RegisterStudent.DoesNotExist:
        return Response({"error": "Student not found"}, status=404)




