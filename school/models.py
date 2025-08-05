from django.db import models
from django.core.exceptions import ValidationError
from backend.idGenerator import GenerateIds
from students.models import Student
from datetime import date
# Create your models here.


class School(models.Model):
    school_code = models.CharField(unique=True,max_length=50,editable=False)
    school_name = models.CharField(max_length=250)
    school_description = models.TextField(blank=True)
    school_dean = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "School"
        verbose_name_plural = "Schools"
    def save(self, *args, **kwargs):
        if not self.school_code:
            schoolCodeObj = GenerateIds()
            schoolCode = schoolCodeObj.school_Id()
            existing_school_codes = set(School.objects.values_list('school_code', flat=True))
            while schoolCode in existing_school_codes:
                schoolCode = schoolCodeObj.school_Id()
            self.school_code = schoolCode
        super().save(*args, **kwargs)
    def __str__(self):
        return f"{self.school_name}"


class Course(models.Model):
    course_code = models.CharField(unique=True, max_length=10, editable=False) 
    course_name = models.CharField(max_length=250)
    course_description = models.TextField(blank=True)
    course_instructor = models.CharField(max_length=250)  # Temporary, replace with ForeignKey later
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    school = models.ForeignKey('School', on_delete=models.PROTECT)
    
    def save(self, *args, **kwargs):
        if not self.course_code:
            courseCodeObj = GenerateIds()
            courseCode = courseCodeObj.course_Id()
            existing_course_codes = set(Course.objects.values_list('course_code', flat=True))
            while courseCode in existing_course_codes:
                courseCode = courseCodeObj.course_Id()
            self.course_code = courseCode
        super().save(*args, **kwargs)
    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"
    def __str__(self):
        return f"{self.course_name}"
    
class CourseFee(models.Model):
    course = models.ForeignKey('Course', on_delete=models.PROTECT, related_name='course_fee')
    amount = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Enrollment(models.Model):
    student = models.ForeignKey('students.Student', on_delete=models.PROTECT, related_name='enrollments')
    course = models.ForeignKey('Course', on_delete=models.PROTECT, related_name='course_enrollments')
    cohort = models.ForeignKey('Cohort', on_delete=models.PROTECT, related_name='cohort_enrollments') #the course is accessed through the cohort since the cohort references the course model
    enrollment_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('Enrolled', 'Enrolled'), ('Completed', 'Completed'), ('Dropped', 'Dropped')], default='Enrolled')
    start_date = models.DateField(default=date(2025,7,12))
    end_date = models.DateField(default=date(2025,12,2))
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        # this method ensures that no one can enroll be the set date and when the desired number is reached
        """
            note that since we are not using django forms, this can only be activated or called 
            using serializer. and it is called in enrollment serializer by overriding
            django's  validation method
        """
        if self.cohort.cohort_enrollments.count() >= self.cohort.capacity:
            raise ValidationError("This cohort is full.")
        if self.start_date > date.today():
            raise ValidationError("Enrollment for this cohort has not started yet.")
    
    class Meta:
        verbose_name = "Enrollment"
        verbose_name_plural = "Enrollments"
        unique_together = ('student', 'cohort')
    def __str__(self):
        return f"{self.status}"


class CourseResource(models.Model):
    """one course can have multiple resourses ie youtube, github , tiktal etc hence one to many (model.foreign key)"""
    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='resources')
    resource_type = models.CharField(max_length=50, choices=[('YouTube', 'YouTube'), ('PDF', 'PDF'), ('Link', 'Link')], default='YouTube')
    youtube_link = models.URLField(max_length=200, blank=True)  # Only for YouTube resources
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Course Resource"
        verbose_name_plural = "Course Resources"
    def __str__(self):
        return f"{self.resource_type}"

class Cohort(models.Model):
    course = models.ForeignKey('Course', on_delete=models.PROTECT, related_name='cohorts')
    cohort_code = models.CharField(max_length=20, unique=True, editable=False) 
    cohort_number = models.PositiveIntegerField(choices=[
        (1, 'one'), (2, 'two'), (3, 'three'), (4, 'four'), (5, 'five'),
        (6, 'six'), (7, 'seven'), (8, 'eight'), (9, 'nine'), (10, 'ten')
    ],
    default=1)
    capacity = models.PositiveIntegerField(default=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.cohort_code:
            cohortObj = GenerateIds()
            cohortCode = cohortObj.cohort_Id()
            existing_cohort_codes = set(Cohort.objects.values_list('cohort_code', flat=True))
            while cohortCode in existing_cohort_codes:
                cohortCode = cohortObj.cohort_Id()
            self.cohort_code = cohortCode
        super().save(*args,**kwargs)

    class Meta:
        verbose_name = 'Course Cohort'
        verbose_name_plural = 'Course Cohorts'
        unique_together = ('course', 'cohort_number')

    def __str__(self):
        return f"{self.cohort_number}"
