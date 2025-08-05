from .views import listUpdateAndDeleteAspecificStudent, ListAndCreateStudents, StudentDetailsView,ListAndCreateStudentpayments
from django.urls import path

urlpatterns = [
    path('registerandregisteredstudents/',ListAndCreateStudents.as_view()),
    path('specificstudentdetails/', listUpdateAndDeleteAspecificStudent.as_view()),
    path('studentenrollmentdetails/', StudentDetailsView.as_view()),
    path("studentpayment/",ListAndCreateStudentpayments.as_view())
    
]

