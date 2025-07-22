from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User
        fields = ['employee_id','first_name','second_name','phone_number','email','country','date_of_birth','gender','password']
        read_only_fields = ['employee_id']
    def save(self, validated_data):
        password = validated_data.pop('password')
        employee = User(**validated_data)
        employee.set_password(password)
        employee.save()