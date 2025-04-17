from django.urls import path
from .views import FetchStudentAccademicDetailsAndBioData

urlpatterns = [
	path("student/accademicdetails/", FetchStudentAccademicDetailsAndBioData, name="student-accademic-details"),
]