from .views import listUpdateAndDeleteAspecificStudent, ListAndCreateStudents
from django.urls import path

urlpatterns = [
    path('registerandregisteredstudents/',ListAndCreateStudents.as_view()),
    path('specificstudentdetails/', listUpdateAndDeleteAspecificStudent.as_view())
]

