from django.db import models
from plants.models import Plant
from django.contrib.auth.models import User
# Create your models here.


class UserPlants(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    date_planted = models.DateField()
    is_harvested = models.BooleanField()
    