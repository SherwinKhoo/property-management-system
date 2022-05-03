from django.db import models


# Create your models here.
class Reservation(models.Model):
    id = models.AutoField(primary_key=True)
    room_id = models.SmallIntegerField()
    start = models.DateTimeField(verbose_name='Check-In Date',)
    end = models.DateTimeField(verbose_name='Check-Out Date', )
    account_email = models.ForeignKey(verbose_name='email', max_length=60, unique=True)

    def __str__(self):
        return self.title