from rest_framework import serializers
from .models import UserPlants


class UserPlantsSerializer(serializers.ModelSerializer)
    class Meta:
        model = UserPlants
        fields = ['user','plant','date_planted','is_harvested','user_id','plant_id']
        depth = 1 

        user_id = serializers.IntegerField(write_only=True)
        plant_id = serializers.IntegerField(write_only=True)

        