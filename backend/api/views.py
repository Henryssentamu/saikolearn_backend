from students.views import loginStudent,Astudent,Students
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
def login_student_api(request):
    """Calls student app's login function"""
    print(f"login details sent to loin api:{request.data}")
    return loginStudent(request)

RegisterAndRetrieveStudentBio = Students.as_view()
RetrieveUpdateDeleteStudent = Astudent.as_view()
