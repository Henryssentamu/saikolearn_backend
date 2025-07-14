from django.contrib import admin
from .models import School,Cohort,Course,CourseResource, Enrollment

# Register your models here.

class SchoolAdmin(admin.ModelAdmin):
    model = School
    list_display = ('school_code','school_name','school_dean','created_at')
    list_filter = ('school_code','school_name')
    ordering = ('school_name',)
    search_fields = ('school_code','school_name')

class CourseAdmin(admin.ModelAdmin):
    model = Course
    list_display = ('course_code','course_name','course_instructor','created_at')
    list_filter = ('course_code','course_name')
    ordering = ('course_name',)
    search_fields = ('school_code','school_name')

class CourseResourcesAdmin(admin.ModelAdmin):
    model = CourseResource
    list_display = ('course','resource_type','youtube_link')
    list_filter = ('course','resource_type')
    ordering = ('resource_type',)
    search_fields = ('course','resource_type')

class EnrollmentAdmin(admin.ModelAdmin):
    model = Enrollment
    list_display = ('student', 'cohort', 'get_course', 'enrollment_date', 'status')
    list_filter = ('cohort', 'enrollment_date', 'status')
    ordering = ('cohort__course__course_name',)
    search_fields = ('cohort__course__course_name',)
    def get_course(self,obj):
        """
            this method is fetching the course through cohort following the 
            relationships btn enrollment and cohort, then cohort and course modules
        """
        return obj.cohort.course.course_name
    get_course.short_description = 'Course Name'  # and then here we are adding it to the list_display

class CohortAdmin(admin.ModelAdmin):
    model = Cohort
    list_display = ('course','cohort_code','cohort_number','capacity','created_at')
    list_filter = ('course','cohort_code')
    ordering = ('course','cohort_code')
    search_fields = ('cohort_code',)

admin.site.register(School,SchoolAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(CourseResource, CourseResourcesAdmin)
admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(Cohort, CohortAdmin)
