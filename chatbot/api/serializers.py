from rest_framework import serializers
from .models import Message

# To make an api, we need to create serializers
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

















# MessageSerializer class is used to serialize instances of the Message model. It converts Message model
# instances into JSON format for API responses.
# The Meta class specifies the model to be used (Message) and includes all fields
# from this model in the serialized output.