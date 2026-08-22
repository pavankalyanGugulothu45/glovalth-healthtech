from django.urls import path
from . import views

urlpatterns = [
    path("tickets/", views.get_tickets),
    path("tickets/create/", views.create_ticket),
]