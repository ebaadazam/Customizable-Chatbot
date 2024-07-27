from django.db import models

# Create a model class (table) and defined the fields user_message, bot_response
class Message(models.Model):
    user_message = models.TextField()
    bot_response = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.user_message


# this code defines a Message model in Django with three fields: user_message, bot_response, and
# timestamp. It stores user messages, bot responses, and timestamps. The __str__ method ensures that 
# when you view or print a Message object, you see the content of the user_message field.




























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
