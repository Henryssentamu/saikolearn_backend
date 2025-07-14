from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import School, Course, CourseCohort, CourseResources

admin.site.register(School)
admin.site.register(Course)
admin.site.register(CourseCohort)
admin.site.register(CourseResources)
