from django.db import models

# class Customization(models.Model):
#     main_color = models.CharField(max_length=7, default='#ffffff')
#     send_message_color = models.CharField(max_length=7, default='#ffffff')
#     received_message_color = models.CharField(max_length=7, default='#ffffff')
#     background_color = models.CharField(max_length=7, default='#ffffff')
#     send_message_text_color = models.CharField(max_length=7, default='#000000')
#     received_message_text_color = models.CharField(max_length=7, default='#000000')

class Message(models.Model):
    user_message = models.TextField()
    bot_response = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.user_messag


# class ChatbotSetting(models.Model):
#     main_color = models.CharField(max_length=7)
#     send_message_color = models.CharField(max_length=7)
#     received_message_color = models.CharField(max_length=7, null=True, blank=True)
#     background_color = models.CharField(max_length=7)
#     send_message_text_color = models.CharField(max_length=7)
#     received_message_text_color = models.CharField(max_length=7)

# class Interaction(models.Model):
#     user_message = models.TextField()
#     bot_response = models.TextField()
#     timestamp = models.DateTimeField(auto_now_add=True)
