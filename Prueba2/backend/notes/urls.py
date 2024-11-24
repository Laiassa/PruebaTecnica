from django.urls import path
from .views import NoteListCreate

urlpatterns = [
    path('notes/', NoteListCreate.as_view(), name='notes-list-create'),
]