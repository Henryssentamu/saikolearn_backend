from rest_framework import serializers
from .models import RegisterStudent

class StudentSerializer(serializers.ModelSerializer):
    # class Meta:
    #     model = RegisterStudent
    #     fields = '__all__'
    #     extra_kwargs = {
    #         "studentid": {"read_only": True},  # ✅ Let Django handle it
    #         "password": {"write_only": True},  # ✅ Don't return passwords in responses
    #         "date": {"read_only": True}, 
    #     }
	
    class Meta:
        model = RegisterStudent
        fields = ['studentid', 'fName', 'sname', 'email', 'phonenumber', 'country', 'dateofbirth', 'gender', 'password']
        read_only_fields = ['studentid']  # Make studentid read-only since it will be auto-generated

    def create(self, validated_data):
        # Make sure password is hashed before saving
        password = validated_data.pop('password', None)
        instance = RegisterStudent(**validated_data)
        
        if password:
            instance.set_password(password)  # Hash the password
        instance.save()
        return instance



# from rest_framework import serializers
# from .models import RegisterStudent

# class RegisterStudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RegisterStudent
#         fields = ['studentid', 'fName', 'sname', 'email', 'phonenumber', 'country', 'dateofbirth', 'gender', 'password']
#         read_only_fields = ['studentid']  # Make studentid read-only since it will be auto-generated

#     def create(self, validated_data):
#         # Make sure password is hashed before saving
#         password = validated_data.pop('password', None)
#         instance = RegisterStudent(**validated_data)
        
#         if password:
#             instance.set_password(password)  # Hash the password
#         instance.save()
#         return instance


