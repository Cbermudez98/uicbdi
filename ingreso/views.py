from django.shortcuts import render

def index(request):
    return render(request,'index.html')

def formVisite(request):
    return render(request,'formUser.html')