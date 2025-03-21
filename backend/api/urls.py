from django.urls import path, re_path
from .views import StudentRegistrationDetails,FetchStudentDetails,get_specific_student_details,student_login
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns =[
	path("token/", TokenObtainPairView.as_view(), name="get_token"),
	path("token/refresh", TokenRefreshView.as_view(), name="get_token_refresh"),
	path("registerstudent/", StudentRegistrationDetails.as_view(), name="register-students"),
	path("studentlist/",FetchStudentDetails.as_view(), name="student-list"),
	re_path(r"^astudent/(?P<studentid>.+)/?$", get_specific_student_details, name="get-specific-student"),
	path("studentlogin/",student_login,name="student_login"),

	
]