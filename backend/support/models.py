from django.db import models


class SupportTicket(models.Model):
    CATEGORY_CHOICES = [
        ("Technical", "Technical"),
        ("Billing", "Billing"),
        ("Feature Request", "Feature Request"),
        ("General", "General"),
    ]

    PRIORITY_CHOICES = [
        ("Low", "Low"),
        ("Medium", "Medium"),
        ("High", "High"),
        ("Critical", "Critical"),
    ]

    STATUS_CHOICES = [
        ("Open", "Open"),
        ("In Progress", "In Progress"),
        ("Resolved", "Resolved"),
        ("Closed", "Closed"),
    ]

    ticket_id = models.CharField(max_length=20, unique=True)
    company = models.CharField(max_length=200)
    subject = models.CharField(max_length=300)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Technical"
    )
    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default="Medium"
    )
    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="Open"
    )
    description = models.TextField()
    assignee = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )
    messages = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ticket_id} - {self.subject}"