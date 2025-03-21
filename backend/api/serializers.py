from rest_framework import serializers
from .models import RegisterStudent

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterStudent
        fields = '__all__'
        extra_kwargs = {
            "studentid": {"read_only": True},  # ✅ Let Django handle it
            "password": {"write_only": True},  # ✅ Don't return passwords in responses
            "date": {"read_only": True}, 
        }




