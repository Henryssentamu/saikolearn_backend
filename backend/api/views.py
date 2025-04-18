from students.views import loginStudent
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.http import JsonResponse



# student section
@api_view(["POST"])
@permission_classes([AllowAny]) 
def login_student_api(request):
    try:
        """Calls student app's login function"""
        return loginStudent(request)
    except Exception as e:
        raise Exception(f"error on calling login functionality:{e}")




