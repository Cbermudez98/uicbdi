from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('userVisite', views.formVisite, name="formUser"),
]