from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from .models import RegisterStudents, StudentEnrolledInPrograms
from .serializers import StudentRegisterSerializer
from Schools.models import Course,CourseCohort,CourseResources

# @api_view(["POST"])
def loginStudent(request):
    
    try:
        student = RegisterStudents.objects.get(StudentId=request.data.get("studentId"))
        
        if check_password(request.data.get("password"), student.password):
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    except RegisterStudents.DoesNotExist:
        print("Student not found")
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        print("🔥 An unexpected error occurred:", str(e))
        return Response({"error": "Something went wrong", "details": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class Students(generics.ListCreateAPIView):
    """Handles student registration and listing"""

    """the commented data is to check for error"""
    # def post(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         self.perform_create(serializer)
    #         return Response(serializer.data, status=201)
    #     print("Serializer errors:", serializer.errors)  # 🔥 Add this
    #     return Response(serializer.errors, status=400)

    queryset = RegisterStudents.objects.all()
    serializer_class = StudentRegisterSerializer
    permission_classes = [AllowAny] 


class AstudentBio(generics.RetrieveUpdateDestroyAPIView):
    """Handles retrieving, updating, and deleting a student by StudentId"""
    queryset = RegisterStudents.objects.all()
    serializer_class = StudentRegisterSerializer
    lookup_field = "StudentId"




@api_view(["GET"])
def FecthAllStudentAccademicDetails(request):
    student_id = request.query_params.get("studentId")
    results = []

    if not student_id:
        return Response({"response": "No studentId is provided"}, status=400)

    try:
        student_programs = StudentEnrolledInPrograms.objects.filter(StudentId=student_id)

        if not student_programs.exists():
            return Response({"response": "You haven't enrolled into any program"}, status=404)

        for aprogram in student_programs:
            course = Course.objects.filter(CourseId=aprogram.CourseId).first()
            courseCohort = CourseCohort.objects.filter(CohortId=aprogram.CohortId).first()
            courseResources = CourseResources.objects.filter(
                courseId=aprogram.CourseId,
                cohortId=aprogram.CohortId
            ).first()

            results.append({
                "StudentId": aprogram.StudentId.StudentId,
                "course": {
                    "courseId": course.CourseId,
                    "courseName": course.CourseName,
                    "courseUrlLink": course.YoutubeLink,
                    "courseInstructor": course.CourseInstractor,
                    "schoolId": course.SchoolId.SchoolId
                } if course else None,
                "courseCohort": {
                    "cohortId": courseCohort.CohortId,
                    "cohortName": courseCohort.CohortName
                } if courseCohort else None,
                "courseResources": {
                    "liveLink": courseResources.liveLink,
                    "recorded": courseResources.recordedLink
                } if courseResources else None
            })

        return Response(results, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

	


