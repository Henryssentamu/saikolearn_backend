from django.urls import path, include

urlpatterns = [
   path("students/", include('students.urls')),
   path("schools/", include('school.urls'))
]