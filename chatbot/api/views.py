from rest_framework.generics import ListCreateAPIView
from .models import Message
from .serializers import MessageSerializer

class MessageSerializer(ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer



