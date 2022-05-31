from operator import truediv
from tkinter import TRUE
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {"patients" : patients})

def room(request):
    return render(request, 'room.html')


patients = [{'Id' : 1, 'FirstName' : "Ran", 'LastName' : 'Levi', 
'BirthDay' : '1998-10-28', 'Address' : 'tishrei', 'City' : 'Tel Aviv',
"ZipCode" : 123456, "LandLine" : 12, "Phone" : 5565565656
, "IfInfected" : False, "Other" : '' },
{'Id' : 2, 'FirstName' : "Dana", 'LastName' : 'ss', 
'BirthDay' : '1505-10-28', 'Address' : 'dad', 'City' : 'eilat',
"ZipCode" : 654321, "LandLine" : 89, "Phone" : 111222333
, "IfInfected" : True, "Other" : '' }]


def registerPatient(request):
        if request.method == 'POST':
            return HttpResponse(request.POST)

    #return render(request, 'index.html')