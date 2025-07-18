from django.urls import path,include
from .views import CreateSchool, CreateCourse, ListUpdateAndDeleteSchool, ListUpdateAndDeleteCourse


urlpatterns = [
    path("createschool/", CreateSchool.as_view()),
    path("createcourse/", CreateCourse.as_view()),
    path("specificschooldetails/", ListUpdateAndDeleteSchool.as_view()),
    path("specificcoursedeteils/", ListUpdateAndDeleteCourse.as_view())
]