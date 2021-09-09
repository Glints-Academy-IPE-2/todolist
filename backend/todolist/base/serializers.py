from django.db.models import fields
from .models import Task
from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['user', 'role', 'title', 'description', 'complete', 'created']
        