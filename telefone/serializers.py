from rest_framework import serializers
from .models import Telefone
from .models import Pessoa

class TelefoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Telefone 
        fields = '__all__'