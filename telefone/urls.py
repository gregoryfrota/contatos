from django.urls import path, include 
from telefone import views

urlpatterns = [
    path(r'pessoa/<int:pk>', views.telefone_list,),
    path(r'<int:pk>/', views.telefone_detail),
    path(r'', views.telefone_list_all),
    
]