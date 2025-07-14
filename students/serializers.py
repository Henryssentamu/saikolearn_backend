from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = Student
        fields = ['student_id','first_name','second_name','phone_number','email','country','date_of_birth','gender','password']
        read_only_fields = ['student_id']

    def save(self, validated_data):
        password = validated_data.pop('password')
        student = Student(**validated_data)
        student.set_password(password)
        student.save()