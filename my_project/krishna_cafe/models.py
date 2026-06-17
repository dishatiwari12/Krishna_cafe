from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(max_length=200,blank=True)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    image = models.ImageField(upload_to= 'media/menu_items',blank=True,null=True)


    def __str__(self):
        return self.name
    