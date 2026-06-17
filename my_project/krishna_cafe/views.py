from django.shortcuts import render
from . models import MenuItem

# Create your views here.
def home_page(request):
    return render(request,'home.html')

def menu_page(request):
    items = MenuItem.objects.all()
    context = {
        'items' :items
    }
    return render(request,'menu.html',context)

def cart_page(request):
    return render(request,'cart.html')