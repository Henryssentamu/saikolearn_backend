from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import School,Course, Enrollment, CourseResource, Cohort, CourseFee, CourseLiveClasses, CourseLiveRecordedSessions



class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
        read_only_fields = ['id','school_code']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
        read_only_fields = ['id','course_code']



class CourseResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseResource
        fields = '__all__'
        read_only_fields = ['id']
    def validate(self, data):
        if data['resource_type'] == 'YouTube' and not data.get('youtube_link'):
            raise serializers.ValidationError('YouTube link is required for YouTube resources.')
        return data
    



class CourseLiveRecordedSessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLiveRecordedSessions
        fields = '__all__'
        read_only_fields = ['id']
    def validate(self, data):
        if data['resource_type'] == 'YouTube' and not data.get('resourse_link'):
            raise serializers.ValidationError('YouTube link is required for YouTube resources.')
        return data
    

class CourseLiveClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLiveClasses
        fields = '__all__'
        read_only_fields = ['id']
    def validate(self, data):
        if data['resource_type'] == 'YouTube' and not data.get('class_link'):
            raise serializers.ValidationError('YouTube link is required for YouTube resources.')
        return data
    

class CohortSerializer(serializers.ModelSerializer):
    # course = CourseSerializer(read_only=True) # for the relationship purpose, ie include course details in cohort fetch details
    class Meta:
        model = Cohort
        fields = '__all__'
        read_only_fields = ['id', 'cohort_code']



class EnrollmentSerializer(serializers.ModelSerializer):
    # print("serializer is called")
    # cohort = CohortSerializer(read_only=True) # for relationship purpose ie include cohort details in fetch enrollment 
    class Meta:
        model = Enrollment
        fields = '__all__'
        read_only_fields = ['id']
    def validate(self, data):
        # print("validating data is reached")
        # overrided this method in order to call clean() as explained in the model class
        instance = Enrollment(**data)
        try:
            instance.clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict if hasattr(e, 'message_dict') else str(e))
        return data
    

class CourseFeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseFee
        fields = "__all__"





    
