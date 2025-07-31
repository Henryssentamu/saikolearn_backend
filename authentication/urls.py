# from django.urls import path
# # from .authentication import CustomTokenObtainPairView
# from .views import StudentTokenObtainPairView
# from rest_framework_simplejwt.views import TokenRefreshView


# urlpatterns = [
#     path('token/', StudentTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# ]
from django.urls import path
from .views import CustomAuthView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', CustomAuthView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]