from django.urls import path
from students.views import FecthAllStudentAccademicDetails
from .views import(
	login_student_api,
	RegisterAndRetrieveStudentBio,
	RetrieveUpdateDeleteStudent,
	createAndViewSchooldetails,
	createAndViewCoursedetails,
	createAndviewCourseRecoursedetails,
	fetchUpdateDeleteCourse,
	fetchUpdateDeleteCourseResourse,
	fetchUpdateDeleteSchool,)
urlpatterns = [
    path("student/login/", login_student_api, name="login-student"),
    path("registerstudent/", RegisterAndRetrieveStudentBio, name="register-list-students"),
    path("student/<str:StudentId>/", RetrieveUpdateDeleteStudent, name="retrieve-update-delete-student"),
	path("student/accademicdetails/", FecthAllStudentAccademicDetails, name="student-accademic-details"),
	path("admin/schooldetails/", createAndViewSchooldetails, name="create-list-school"),
	path("admin/coursedetails/",createAndViewCoursedetails, name="create-list-courses"),
	path("admin/courseresoursedetails", createAndviewCourseRecoursedetails, name="create-list-course-resourse"),
	path("admin/listupdatedeleteschool/<str:SchoolId>/", fetchUpdateDeleteSchool, name="list-update-delete-school"),
	path("admin/listupdatedeletecourse/<str:CourseId>/", fetchUpdateDeleteCourse, name="list-update-delete-course"),
	path("admin/listupdatedeletecourseresources/<str:CourseId>/", fetchUpdateDeleteCourseResourse,name="list-update-delete-course-resources")
]
