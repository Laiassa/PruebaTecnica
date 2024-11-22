from rest_framework import viewsets
from rest_framework.response import Response
from .models import Servicio, Turno
from .serializers import ServicioSerializer, TurnoSerializer

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class TurnoViewSet(viewsets.ModelViewSet):
    queryset = Turno.objects.all()
    serializer_class = TurnoSerializer

    def get_queryset(self):
        servicio_id = self.request.query_params.get('servicio', None)
        if servicio_id is not None:
            return self.queryset.filter(servicio_id=servicio_id)
        return self.queryset
        
from django.shortcuts import render

