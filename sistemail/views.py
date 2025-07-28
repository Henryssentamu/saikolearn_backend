from django.shortcuts import render

# Create your views here.
from django.core.mail import send_mail

class SendGmail:
    def __init__(self, email_address):
        self.email_address = email_address

    def send_student_is_email(self,studentId):
        send_mail(
            subject="STUDENT ID",
            message=f'Student Id: {studentId}',
            from_email='ssentamuinstituteofscienceandt@gmail.com',
            recipient_list= [self.email_address],
            fail_silently=False,
        )

