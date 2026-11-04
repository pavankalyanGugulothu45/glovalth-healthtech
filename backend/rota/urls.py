
from django.urls import path
from . import views

urlpatterns = [
    path("shifts/", views.shift_list_create, name="shift-list-create"),
    path("shifts/<int:pk>/", views.shift_detail, name="shift-detail"),
]
