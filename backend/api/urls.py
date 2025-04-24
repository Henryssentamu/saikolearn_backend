from django.urls import path, include
from .views import(
	login_student_api
	)
urlpatterns = [
	path("", include('students.urls')),
	path("",include('Schools.urls')),
	path("studentlogin/", login_student_api, name="login-student"),
    
]
