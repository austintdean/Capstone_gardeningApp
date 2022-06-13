from rest_framework import serializers
from .models import UserPlants


class UserPlantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPlants
        fields = ['id','user','plant','date_planted','is_harvested','plant_id']
        depth = 1 

    plant_id = serializers.IntegerField(write_only=True)

