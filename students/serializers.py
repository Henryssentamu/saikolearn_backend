from rest_framework import serializers
from .models import Student
from school.serializers import EnrollmentSerializer, CohortSerializer

class StudentSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = Student
        fields = ['student_id','first_name','second_name','phone_number','email','country','date_of_birth','gender','password']
        read_only_fields = ['student_id']

    def create(self, validated_data):
        """overrided the create() so that we splite save() for both registering new students and updating : ie both partial (patch) and full update(put)"""
        password = validated_data.pop('password')
        student = Student(**validated_data)
        student.set_password(password)
        student.save()
        return student

    def update(self, instance, validated_data):
        """handle both full and partial updates vy using the loop as implemented in the api view"""
        password = validated_data.pop('password', None)  # pop password if provided, else None

        # Update all other fields dynamically
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        # If password provided, hash it
        if password:
            instance.set_password(password)

        instance.save()
        return instance
    

class FlatStudentCourseResourceSerializer(serializers.Serializer):
    student_id = serializers.CharField()
    full_name = serializers.CharField()
    email = serializers.EmailField()
    country = serializers.CharField()
    gender = serializers.CharField()
    phone_number = serializers.CharField()

    # These are optional if the student has no enrollment
    status = serializers.CharField(required=False, allow_blank=True)
    course_code = serializers.CharField(required=False, allow_blank=True)
    start_date = serializers.DateField(required=False, allow_null=True)
    end_date = serializers.DateField(required=False, allow_null=True)
    course_name = serializers.CharField(required=False, allow_blank=True)

    # These are optional if the course has no resources
    resource_type = serializers.CharField(required=False, allow_blank=True)
    youtube_link = serializers.CharField(required=False, allow_blank=True)
        