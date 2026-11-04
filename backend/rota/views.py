
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, serializers
from django.shortcuts import get_object_or_404

from .models import RotaShift


class RotaShiftSerializer(serializers.ModelSerializer):
    hours = serializers.ReadOnlyField()

    class Meta:
        model = RotaShift
        fields = [
            "id",
            "employee_name",
            "role",
            "location",
            "shift_type",
            "date",
            "start_time",
            "end_time",
            "break_minutes",
            "timesheet_status",
            "clock_status",
            "status",
            "hours",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]


# =========================================================
# LIST SHIFTS / ADD SHIFT
# =========================================================

@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def shift_list_create(request):

    if request.method == "GET":
        shifts = RotaShift.objects.all()
        serializer = RotaShiftSerializer(shifts, many=True)
        return Response(serializer.data)

    serializer = RotaShiftSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


# =========================================================
# VIEW / UPDATE / DELETE SHIFT
# =========================================================

@api_view(["GET", "PUT", "PATCH", "DELETE"])
@permission_classes([IsAuthenticated])
def shift_detail(request, pk):

    shift = get_object_or_404(RotaShift, pk=pk)

    if request.method == "GET":
        serializer = RotaShiftSerializer(shift)
        return Response(serializer.data)

    if request.method in ["PUT", "PATCH"]:

        serializer = RotaShiftSerializer(
            shift,
            data=request.data,
            partial=request.method == "PATCH"
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    if request.method == "DELETE":
        shift.delete()

        return Response({
            "message": "Shift deleted successfully"
        }, status=status.HTTP_200_OK)
