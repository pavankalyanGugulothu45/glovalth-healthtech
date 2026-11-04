from django.db import models

# Create your models here.

from django.db import models


class RotaShift(models.Model):

    SHIFT_TYPES = [
        ("Morning", "Morning"),
        ("Afternoon", "Afternoon"),
        ("Evening", "Evening"),
        ("Night", "Night"),
    ]

    TIMESHEET_STATUSES = [
        ("Pending", "Pending"),
        ("In Progress", "In Progress"),
        ("Approved", "Approved"),
        ("Issue", "Issue"),
    ]

    CLOCK_STATUSES = [
        ("Pending", "Pending"),
        ("Clocked In", "Clocked In"),
        ("Clocked Out", "Clocked Out"),
        ("Late", "Late"),
        ("No Show", "No Show"),
    ]

    STATUS_CHOICES = [
        ("OK", "OK"),
        ("Warning", "Warning"),
        ("Conflict", "Conflict"),
    ]

    employee_name = models.CharField(max_length=200)
    role = models.CharField(max_length=150)
    location = models.CharField(max_length=150)

    shift_type = models.CharField(
        max_length=20,
        choices=SHIFT_TYPES
    )

    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    break_minutes = models.PositiveIntegerField(default=30)

    timesheet_status = models.CharField(
        max_length=20,
        choices=TIMESHEET_STATUSES,
        default="Pending"
    )

    clock_status = models.CharField(
        max_length=20,
        choices=CLOCK_STATUSES,
        default="Pending"
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="OK"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.employee_name} - {self.date}"

    @property
    def hours(self):
        from datetime import datetime, timedelta

        start = datetime.combine(self.date, self.start_time)
        end = datetime.combine(self.date, self.end_time)

        if end <= start:
            end += timedelta(days=1)

        duration = (end - start).total_seconds() / 3600
        return round(duration - self.break_minutes / 60, 2)

    class Meta:
        ordering = ["date", "start_time"]
