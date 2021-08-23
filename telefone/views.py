from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Telefone
from .serializers import *


@api_view(['GET', 'POST'])
def telefone_list(request, pk):
    pessoaParam = pk
    try:
        queryset_list = Telefone.objects.filter(pessoa_id=pessoaParam)
    except Telefone.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = TelefoneSerializer(queryset_list,many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def telefone_list_all(request):
    if request.method == 'GET':
        telefones = Telefone.objects.all()
        serializer = TelefoneSerializer(telefones, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = TelefoneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def telefone_detail(request, pk):
    """
 Retrieve, update or delete a telefone by id/pk.
 """
    try:
        telefone = Telefone.objects.get(pk=pk)
    except Telefone.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TelefoneSerializer(telefone,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TelefoneSerializer(telefone, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        telefone.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)