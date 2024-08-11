from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['user_message', 'bot_response']



























# Create an admin class. In admin panel, we will be able to see the items present in the list_display
# MessageAdmin allows you to specify additional configurations for how the Message model should be
# displayed and managed.