from django.db import models

class Servicio(models.Model):
    nombre = models.CharField(max_length=100)
    duracion = models.PositiveIntegerField()  # Duración en minutos
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Turno(models.Model):
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=100)
    fecha = models.DateField()
    hora = models.TimeField()
    reservado = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.servicio.nombre} - {self.fecha} {self.hora}"

