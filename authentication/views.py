# from rest_framework_simplejwt.views import TokenObtainPairView
# from .serializers import CustomTokenObtainPairSerializer

# class CustomTokenObtainPairView(TokenObtainPairView):
#     serializer = CustomTokenObtainPairSerializer(data=request.data, context={'request': request})
#     if not serializer.is_valid():
#         print("Errors:", serializer.errors)
#         return Response(serializer.errors, status=400)

# serializer_class = CustomTokenObtainPairSerializer

# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework.response import Response
# from rest_framework import status
# from .serializers import CustomTokenObtainPairSerializer

# class CustomTokenObtainPairView(TokenObtainPairView):
#     serializer_class = CustomTokenObtainPairSerializer

#     def post(self, request, *args, **kwargs):
#         print("b4")
#         print(request.data)
#         serializer = self.get_serializer(data=request.data, context={'request': request})
#         print("aft")
#         if serializer.is_valid():
#             print("it is vailed")

#             return Response(serializer.validated_data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import status
# from rest_framework.response import Response

# class CustomTokenObtainPairView(TokenObtainPairView):
#     serializer_class = CustomTokenObtainPairSerializers

#     def post(self, request, *args, **kwargs):
#         print("Request data:", request.data)
#         serializer = self.get_serializer(data=request.data, context={'request': request})
#         print("Serializer initialized")
#         if serializer.is_valid():
#             print("Serializer is valid")
#             return Response(serializer.validated_data, status=status.HTTP_200_OK)
#         print("Serializer errors:", serializer.errors)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# students/views.py

# from rest_framework_simplejwt.views import TokenViewBase
# from .serializers import StudentTokenObtainPairSerializer

# class StudentTokenObtainPairView(TokenViewBase):
#     serializer_class = StudentTokenObtainPairSerializer





# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework.response import Response

# from .serializers import CustomTokenObtainPairSerializer

# class CustomTokenObtainPairView(TokenObtainPairView):
#     serializer_class = CustomTokenObtainPairSerializer

#     def post(self, request, *args, **kwargs):
#         # Access the request body
#         print("Request body:", request.data)

#         # Proceed with the default behavior (pass to serializer)
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Response(serializer.validated_data, status=200)




from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CustomAuthSerializer

class CustomAuthView(APIView):
    def post(self, request, *args, **kwargs):
        print("Request body:", request.data)
        serializer = CustomAuthSerializer(data=request.data, context={'request': request})
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=400)
        return Response(serializer.validated_data, status=200)