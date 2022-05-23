from rest_framework import serializers
from .models import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ['id','name','seed_depth','seed_spacing','water_cycle','water_amount','time_to_harvest','harvested','season']