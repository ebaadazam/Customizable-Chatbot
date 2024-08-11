# Now create a view for serializers

from rest_framework.generics import ListCreateAPIView  
from .models import Message
from .serializers import MessageSerializer

class MessageSerializer(ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer




















# Now for this view we need to make urls.py

# queryset specifies the all Message instances that the view will work with.
# serializer_class specifies the serializer to use for converting between Message instances and JSON.
