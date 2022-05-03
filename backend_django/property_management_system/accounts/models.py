from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.


class AccountManager(BaseUserManager):

    def create_user(self, email, name, surname, password=None):
        if not email:
            raise ValueError('User nust have a valid email.')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            surname=surname,
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, surname, password):
        user = self.create_user(
            email=email,
            name=name,
            surname=surname,
            password=password,
        )
        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)

        return user


class Account(AbstractBaseUser):

    email = models.EmailField(verbose_name='email', max_length=60, unique=True)
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    # auto_now_add adds current dat and time, field is locked
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    # auto_now means now, it can be changed. this is a django thing
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'surname']

    # force python to only return whatever is in the return
    # only return 'not important' stuff, like name
    def __str__(self):
        return f'{self.surname}, {self.name}'

    # allow parts of user interface to be locked down
    # only admin can use
    def has_perm(self, perm, obj=None):
        return self.is_admin

    # creating different webpages for different users
    # one user can use this, another can use that
    def has_module_perms(self, app_label):
        return True
