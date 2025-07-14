from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import RegisterStudents, StudentEnrolledInPrograms

admin.site.register(RegisterStudents)
admin.site.register(StudentEnrolledInPrograms)

