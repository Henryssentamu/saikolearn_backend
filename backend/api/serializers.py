from rest_framework import serializers
from .models import RegisterStudent

class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterStudent
        fields = '__all__'
