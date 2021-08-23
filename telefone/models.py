from django.db import models
from pessoa.models import Pessoa

# Create your models here.

class Telefone(models.Model): 
    pessoa = models.ForeignKey(Pessoa, on_delete=models.CASCADE)
    numero = models.CharField(unique=True, max_length=11)

    class Meta:
    	db_table = 'telefone' 

def __str__(self):
	return self.numero

	