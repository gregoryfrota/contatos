from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Pessoa
from .serializers import *


@api_view(['GET', 'POST'])
def pessoas_list(request):
    """
 List  pessoas, or create a new pessoa.
 """
    if request.method == 'GET':
        pessoas = Pessoa.objects.all()
        serializer = PessoaSerializer(pessoas, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = PessoaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def pessoas_detail(request, pk):
    """
 Retrieve, update or delete a pessoa by id/pk.
 """
    try:
        pessoa = Pessoa.objects.get(pk=pk)
    except Pessoa.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PessoaSerializer(pessoa,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PessoaSerializer(pessoa, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pessoa.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)