from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name =' home'),
    path('',views.menu_page, name='menu'),
    path('',views.cart_page,name='cart'),
]