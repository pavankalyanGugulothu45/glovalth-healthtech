from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import MarketingLead, Campaign
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Campaign

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MarketingLead


@api_view(['GET'])
def get_leads(request):

    leads = MarketingLead.objects.all().order_by('-id')

    data = []

    for lead in leads:
        data.append({
            "id": lead.id,
            "company": lead.company,
            "contact_person": lead.contact_person,
            "email": lead.email,
            "phone": lead.phone,
            "source": lead.source,
            "status": lead.status,
        })

    return Response(data)


@api_view(['POST'])
def add_lead(request):

    lead = MarketingLead.objects.create(
        company=request.data["company"],
        contact_person=request.data["contact_person"],
        email=request.data["email"],
        phone=request.data["phone"],
        source=request.data["source"],
        status="New",
    )

    return Response({
        "message": "Lead Added Successfully",
        "id": lead.id,
    })
@api_view(['GET'])
def get_campaigns(request):

    campaigns = Campaign.objects.all().order_by('-id')

    data = []

    for campaign in campaigns:
        data.append({
            "id": campaign.id,
            "campaign_name": campaign.campaign_name,
            "campaign_type": campaign.campaign_type,
            "budget": str(campaign.budget),
            "leads": campaign.leads,
            "progress": campaign.progress,
            "status": campaign.status,
        })

    return Response(data)


@api_view(['POST'])
def add_campaign(request):

    campaign = Campaign.objects.create(
        campaign_name=request.data["campaign_name"],
        campaign_type=request.data["campaign_type"],
        budget=request.data["budget"],
        leads=0,
        progress=0,
        status="Active",
    )

    return Response({
        "message": "Campaign Added Successfully",
        "id": campaign.id,
    })
@api_view(["PUT"])
def update_campaign(request, pk):
    campaign = get_object_or_404(Campaign, pk=pk)

    campaign.campaign_name = request.data.get("campaign_name")
    campaign.campaign_type = request.data.get("campaign_type")
    campaign.budget = request.data.get("budget")
    campaign.save()

    return Response({"message": "Campaign updated successfully"})

@api_view(["DELETE"])
def delete_campaign(request, pk):
    campaign = get_object_or_404(Campaign, pk=pk)
    campaign.delete()

    return Response({"message": "Campaign deleted successfully"})