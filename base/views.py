from operator import truediv
from tkinter import TRUE
from django.http import HttpResponse
from django.shortcuts import render, redirect

from base.models import PatientData


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
            checkRequestFields(request)

        return HttpResponse("with get")

def checkRequestFields(request):

        if "FirstName" in request.POST:
            firstName = request.POST["FirstName"]

        if "LastName" in request.POST:
            lastName = request.POST["LastName"]

        if "BirthDay" in request.POST:
            birthDay = request.POST["BirthDay"]
 
        if "Address" in request.POST:
            address = request.POST["Address"]

        if "City" in request.POST:
            city = request.POST["City"]

        if "ZipCode" in request.POST:  
            zipCode = request.POST["ZipCode"]

        if "LandLine" in request.POST:
            landLine = request.POST["LandLine"]

        if "Phone" in request.POST:  
            phone = request.POST["Phone"]

        if "ifInfected" in request.POST:
            ifInfected = True
        else:
            ifInfected = False
 
        PatientData(
            FirstName = firstName,
            LastName=lastName,
            BirthDay=birthDay,
            Address=address,
            City=city,
            ZipCode=zipCode,
            LandLine=landLine,
            Phone=phone,
            ifInfected = ifInfected,
            ).save()

        return redirect('/Summary')
