from django.shortcuts import render
from django.views import View
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from validate_email import validate_email

class EmailValidation(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data['email']

        if not validate_email(email):
            return JsonResponse({'email_error': 'its not a valid email'}, status = 400)
        if User.objects.filter(email = email).exists():
            return JsonResponse({'email_error': 'email arleady exists'}, status = 409)
        return JsonResponse({'email_valid': True})
    
class UsernameValidation(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data['username']

        if not str(username).isalnum():
            return JsonResponse({'username_error': 'username should contain alpha numeric character only'}, status = 400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'username': 'username arleady exists'}, status = 409)
        return JsonResponse({'username_valid': True})

class Register(View):
    def get(self, request):
        return render(request,'authentication/register.html')