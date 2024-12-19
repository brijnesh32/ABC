from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name='home'),           # Root path for your app
    path("logout/", views.logout_view, name='logout'),  # Logout path
]
