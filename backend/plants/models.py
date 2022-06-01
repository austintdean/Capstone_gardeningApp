from django.db import models

# Create your models here.

class Plant(models.Model):
    name = models.CharField(max_length=255)
    seed_depth = models.CharField(max_length=255)
    seed_spacing = models.CharField(max_length=255)
    water_cycle = models.CharField(max_length=255)
    water_amount = models.CharField(max_length=255)
    time_to_harvest = models.CharField(max_length=255)
    season = models.CharField(max_length=255)