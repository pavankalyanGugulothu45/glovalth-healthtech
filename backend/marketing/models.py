from django.db import models


class MarketingLead(models.Model):

    company = models.CharField(max_length=200)
    contact_person = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    source = models.CharField(max_length=100)
    status = models.CharField(max_length=50, default="New")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company


class Campaign(models.Model):

    campaign_name = models.CharField(max_length=200)
    campaign_type = models.CharField(max_length=100)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    leads = models.IntegerField(default=0)
    progress = models.IntegerField(default=0)
    status = models.CharField(max_length=50, default="Active")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.campaign_name