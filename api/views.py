from django.shortcuts import render
from django.core.exceptions import ValidationError
from rest_framework import status, mixins, generics
from rest_framework.response import Response
from students.models import Student
from students.serializers import StudentSerializer

# Create your views here.



class ListAndCreateStudents(generics.ListCreateAPIView):
    """
        this method is used to Register new students and to list all registered students
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class listUpdateAndDeleteAspecificStudent(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):

    """
        this classed based api modle handles pk operations but the pk is passed in the request body not in the url as url argument
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = "pk"

    def get_object(self):
        """
            overriding the get_object() so that we access the pk from the request body other than passing it as a request argument from the frontend
            which makes it hard for strings on passing and picking it from the urls.py.
            note: in the retrive(),update() and destroy() we dont have to pass pk as it is done by mixins when it calls the get_object() which we've overrided
        """
        if self.request.method == "GET":
            # checking if pk is passed as a query paramater for get requests
            pk = self.request.query_params.get("pk")
        else:
            pk = self.request.data.get("pk")

        if not pk:
            raise ValidationError("Missing pk in request body")
        try:
            return self.queryset.get(pk=pk)
        except Student.DoesNotExist:
            raise ValueError(f"student with:{self.request.data.get('pk')} is not found ")

    def get(self, request):
        """Retrieve a specific student using 'pk' from query parameters"""
        return self.retrieve(request=request)
    def put(self, request):
        """Full update: all fields required"""
        return self.update(request=request)
    def patch(self,request):
        """Partial update: only changed fields required"""
        return self.partial_update(request=request)
    def delete(self, request):
        """Delete a student by pk"""
        return self.destroy(request=request)

