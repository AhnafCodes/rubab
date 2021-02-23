from django.urls import path

from . import views

urlpatterns = [
    # ex: /demos/demo-1
    path('demo-1/', views.demo_1, name='demos'),
]