from django.urls import path,include
from .views import *
urlpatterns = [
    path("createschool/", CreateSchool.as_view()),
    path("createcourse/", CreateCourse.as_view()),
    path("specificschooldetails/", ListUpdateAndDeleteSchool.as_view()),
    path("specificcoursedeteils/", ListUpdateAndDeleteCourse.as_view()),
    path("enrollStudent/", EnrollAndViewDetails.as_view(), name="studentenrollment"),
    path("createcourseresources/", CreateCourseResoursesDetails.as_view()),
    path("createcoursecohort/",CreateCourseCohort.as_view()),
    path("createcoursefee/", createCourseFeeDetails.as_view()),
    path("createcourserecordedsessions/", CreateCourseLiveRecordedSessions.as_view()),
    path("createcourseliveclass/",CreateCourseLiveclass.as_view()),
    path("listupdatedeletecourseliveclass/",ListUpdateDeleteClassLiveSessions.as_view()),
    path("listupdatedeletecourserecordedlivesessions/", ListUpdateDeleteCourseLiveRecordedSessions.as_view())
]


# 