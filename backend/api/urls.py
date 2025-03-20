from django.urls import path
from .views import StudentRegistrationDetails,FetchStudentDetails,get_specific_student_details,student_login

urlpatterns =[
	path("registerstudent/", StudentRegistrationDetails.as_view(), name="register-students"),
	path("studentlist/",FetchStudentDetails.as_view(), name="student-list"),
	path("astudent/<str:studentid>", get_specific_student_details, name="get-specific-student"),
	path("studentlogin/",student_login,name="student_login"),
]