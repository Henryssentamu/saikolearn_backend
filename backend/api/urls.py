from django.urls import path
from .views import get_studentDetails

urlpatterns =[
	path("studentdata/", get_studentDetails)
]