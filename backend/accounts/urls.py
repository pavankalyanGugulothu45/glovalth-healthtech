from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register),
    path("login/", views.login_view),
    path("reset-password/", views.reset_password),
    path("staff/", views.staff_list),
]