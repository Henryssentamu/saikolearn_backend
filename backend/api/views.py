
from .models import RegisterStudent
from .serializers import studentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_studentDetails(request):
    studentDetails = RegisterStudent.objects.all()
    serializer = studentSerializer(studentDetails, many=True)
    return Response(serializer.data)


