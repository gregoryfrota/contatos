from django.urls import path, include 
from pessoa import views

urlpatterns = [
    path(r'', views.pessoas_list),
    path(r'<int:pk>/', views.pessoas_detail),
]