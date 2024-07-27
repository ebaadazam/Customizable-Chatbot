from django.urls import path, include
from api import views

urlpatterns = [
    path('message/', views.MessageSerializer.as_view()),
]


