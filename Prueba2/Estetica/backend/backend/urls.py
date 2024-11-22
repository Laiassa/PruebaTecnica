from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from turnos.views import ServicioViewSet, TurnoViewSet

router = DefaultRouter()
router.register('servicios', ServicioViewSet)
router.register('turnos', TurnoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

