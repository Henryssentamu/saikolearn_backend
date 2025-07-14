from django.contrib.auth.admin import UserAdmin as StudentBaseUser
from django.contrib import admin
from .models import Student

# Register your models here.

class StudentAdmin(StudentBaseUser):
    model = Student
    list_display = ('student_id','first_name','second_name','phone_number','email','country','gender')
    list_filter = ('gender','is_active')
    ordering = ('student_id',)
    search_fields = ['student_id','first_name','second_name']


admin.site.register(Student, StudentAdmin)
    
