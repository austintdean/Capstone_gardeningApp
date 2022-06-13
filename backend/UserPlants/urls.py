from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_plants),
    path('', views.user_plants),
 
    path('spring/', views.summer_plants),
    path('summer/', views.spring_plants),
    path('fall/', views.fall_plants),
    path('winter/',views.winter_plants),
    path('change/<int:pk>', views.delete_plant_or_change),
    
]