from django.urls import path
from .views import FetchStudentAccademicDetailsAndBioData,Students, AstudentBio,CourseEnrollment

urlpatterns = [
	path("accademicdetails/", FetchStudentAccademicDetailsAndBioData, name="student-accademic-details"),
    path("registerstudent/",Students.as_view() , name="register-list-students"),
    path("student/<str:StudentId>/", AstudentBio.as_view(), name="retrieve-update-delete-student"),
	path("enrollintocourse/", CourseEnrollment.as_view(), name="enroll-into-course")
	
]



