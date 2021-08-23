from django.db import models
from django.contrib.auth.models import User # import model User

# Create your models here.

class Pessoa(models.Model):
    nome = models.CharField(unique=True, max_length=100)

    class Meta:
    	db_table = 'pessoa'

    def __str__(self):
        return self.nome
