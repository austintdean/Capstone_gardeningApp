from django.db import models
from plants.models import Plant
from authentication.models import User
# Create your models here.


class UserPlants(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    date_planted = models.DateField()
    is_harvested = models.BooleanField()
    date_to_be_watered = models.DateTimeField(blank=True,null=True)
    days_between_watering = models.IntegerField(blank=True, default=0)
    