from django.urls import path,include
from .views import CreateSchool, CreateCourse, ListUpdateAndDeleteSchool, ListUpdateAndDeleteCourse,EnrollAndViewDetails,CreateCourseResoursesDetails,CreateCourseCohort


urlpatterns = [
    path("createschool/", CreateSchool.as_view()),
    path("createcourse/", CreateCourse.as_view()),
    path("specificschooldetails/", ListUpdateAndDeleteSchool.as_view()),
    path("specificcoursedeteils/", ListUpdateAndDeleteCourse.as_view()),
    path("enrollStudent/", EnrollAndViewDetails.as_view()),
    path("createcourseresources/", CreateCourseResoursesDetails.as_view()),
    path("createcoursecohort/",CreateCourseCohort.as_view())
]