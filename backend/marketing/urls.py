from django.urls import path
from .views import (
    get_leads,
    add_lead,
    get_campaigns,
    add_campaign,
    update_campaign,
    delete_campaign,
)

urlpatterns = [
    path("leads/", get_leads),
    path("add-lead/", add_lead),

    path("campaigns/", get_campaigns),
    path("add-campaign/", add_campaign),
    path("update-campaign/<int:pk>/", update_campaign),
    path("delete-campaign/<int:pk>/", delete_campaign),
]