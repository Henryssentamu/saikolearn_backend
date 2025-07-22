from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import School,Course, Enrollment, CourseResource, Cohort



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
class CohortSerializer(serializers.ModelSerializer):
    # course = CourseSerializer(read_only=True) # for the relationship purpose, ie include course details in cohort fetch details
    class Meta:
        model = Cohort
        fields = '__all__'
        read_only_fields = ['id', 'cohort_code']



class EnrollmentSerializer(serializers.ModelSerializer):
    # cohort = CohortSerializer(read_only=True) # for relationship purpose ie include cohort details in fetch enrollment 
    class Meta:
        model = Enrollment
        fields = '__all__'
        read_only_fields = ['id']
    def validate(self, data):
        # overrided this method in order to call clean() as explained in the model class
        instance = Enrollment(**data)
        try:
            instance.clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict if hasattr(e, 'message_dict') else str(e))
        return data





    
