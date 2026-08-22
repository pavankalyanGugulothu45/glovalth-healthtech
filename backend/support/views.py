from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SupportTicket
import json


@csrf_exempt
def get_tickets(request):
    if request.method != "GET":
        return JsonResponse(
            {"error": "GET request required"},
            status=405
        )

    tickets = SupportTicket.objects.all().order_by("-created_at")

    data = []

    for ticket in tickets:
        data.append({
            "id": ticket.ticket_id,
            "company": ticket.company,
            "subject": ticket.subject,
            "category": ticket.category,
            "priority": ticket.priority,
            "status": ticket.status,
            "description": ticket.description,
            "assignee": ticket.assignee,
            "messages": ticket.messages,
            "created": ticket.created_at.strftime(
                "%Y-%m-%d %H:%M"
            ),
        })

    return JsonResponse(data, safe=False)


@csrf_exempt
def create_ticket(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "POST request required"},
            status=405
        )

    try:
        body = json.loads(request.body)

        company = body.get("company", "").strip()
        subject = body.get("subject", "").strip()
        category = body.get("category", "Technical")
        priority = body.get("priority", "Medium")
        description = body.get("description", "").strip()

        if not company:
            return JsonResponse(
                {"error": "Company is required"},
                status=400
            )

        if not subject:
            return JsonResponse(
                {"error": "Subject is required"},
                status=400
            )

        if not description:
            return JsonResponse(
                {"error": "Description is required"},
                status=400
            )

        last_ticket = (
            SupportTicket.objects
            .order_by("-id")
            .first()
        )

        if last_ticket:
            number = last_ticket.id + 1234
        else:
            number = 1234

        ticket_id = f"TKT-{number}"

        ticket = SupportTicket.objects.create(
            ticket_id=ticket_id,
            company=company,
            subject=subject,
            category=category,
            priority=priority,
            description=description,
            status="Open",
            assignee="",
            messages=1,
        )

        return JsonResponse({
            "success": True,
            "ticket": {
                "id": ticket.ticket_id,
                "company": ticket.company,
                "subject": ticket.subject,
                "category": ticket.category,
                "priority": ticket.priority,
                "status": ticket.status,
                "description": ticket.description,
                "assignee": ticket.assignee,
                "messages": ticket.messages,
                "created": ticket.created_at.strftime(
                    "%Y-%m-%d %H:%M"
                ),
            }
        }, status=201)

    except json.JSONDecodeError:
        return JsonResponse(
            {"error": "Invalid JSON"},
            status=400
        )

    except Exception as error:
        return JsonResponse(
            {"error": str(error)},
            status=500
        )