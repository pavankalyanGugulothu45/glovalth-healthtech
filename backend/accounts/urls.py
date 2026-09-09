from django.urls import path

from . import views


urlpatterns = [

    path("register/", views.register),

    path("login/", views.login_view),

    # 🔐 Password reset
    path(
        "request-password-reset/",
        views.request_password_reset
    ),

    path(
        "verify-password-reset/",
        views.verify_password_reset
    ),

    path("staff/", views.staff_list),

]