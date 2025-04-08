from django.urls import path
from .views import login_student_api, RegisterAndRetrieveStudentBio, RetrieveUpdateDeleteStudent

urlpatterns = [
    path("student/login/", login_student_api, name="login-student"),
    path("registerstudent/", RegisterAndRetrieveStudentBio, name="register-list-students"),
    path("student/<str:StudentId>/", RetrieveUpdateDeleteStudent, name="retrieve-update-delete-student"),
]
