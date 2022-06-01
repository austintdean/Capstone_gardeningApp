from django.db import models
from plants.models import Plant
from authentication.models import User
# Create your models here.


class UserPlants(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    date_planted = models.DateTimeField()
    is_harvested = models.BooleanField()
    