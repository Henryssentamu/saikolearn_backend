from django.urls import path, include
from .views import (
	SchoolsDetails,
	SchoolsDetailsForStudents,
	CourseDetails,
	CourseDetailsForStudent,
	CourseResourseDetails, 
	ListUpdateDeleteCourseDetails, 
	ListUpdateDeleteCourseResourseDetails, 
	ListUpdateDeleteSchoolDetails,
	)

urlpatterns = [
	path("admin/schooldetails/", SchoolsDetails.as_view(), name="create-list-school"),
	path("schooldetails/", SchoolsDetailsForStudents.as_view(), name="create-list-school"),
	path("admin/coursedetails/",CourseDetails.as_view(), name="create-list-courses"),
	path("coursedetails/",CourseDetailsForStudent.as_view(), name="create-list-courses"),
	path("admin/courseresoursedetails", CourseResourseDetails.as_view(), name="create-list-course-resourse"),
	path("admin/listupdatedeleteschool/<str:SchoolId>/", ListUpdateDeleteSchoolDetails.as_view(), name="list-update-delete-school"),
	path("admin/listupdatedeletecourse/<str:CourseId>/", ListUpdateDeleteCourseDetails.as_view(), name="list-update-delete-course"),
	path("admin/listupdatedeletecourseresources/<str:CourseId>/",ListUpdateDeleteCourseResourseDetails.as_view()
,name="list-update-delete-course-resources")
]
