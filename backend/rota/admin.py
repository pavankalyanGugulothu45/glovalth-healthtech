from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import RotaShift


@admin.register(RotaShift)
class RotaShiftAdmin(admin.ModelAdmin):
    list_display = (
        "employee_name",
        "role",
        "location",
        "shift_type",
        "date",
        "start_time",
        "end_time",
        "status",
    )

    list_filter = ("date", "shift_type", "status", "location")
    search_fields = ("employee_name", "role", "location")
