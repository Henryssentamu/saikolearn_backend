from django.contrib.auth.admin import UserAdmin as StudentBaseUser
from django.contrib import admin
from .models import Student, StudentPayments
# Register your models here.

class StudentAdmin(StudentBaseUser):
    model = Student
    list_display = ('student_id','first_name','second_name','phone_number','email','country','gender')
    list_filter = ('gender','is_active')
    ordering = ('student_id',)
    search_fields = ['student_id','first_name','second_name']

class StudentPaymentAdmin(admin.ModelAdmin):
    model = StudentPayments
    list_display = ('student','amount','reference_number')
    list_filter = ('student','amount')
    ordering = ('student','amount')
    search_fields = ('student__student_id', 'reference_number') # search field have to be a string that why we accesed studentid 


admin.site.register(Student, StudentAdmin)
admin.site.register(StudentPayments, StudentPaymentAdmin)
    
