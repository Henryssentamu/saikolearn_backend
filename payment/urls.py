from django.urls import path
from . import views

urlpatterns = [
    path("response-page/", views.payment_response, name="payment_response"),
]