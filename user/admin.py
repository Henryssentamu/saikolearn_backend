from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from .models import User


# Register your models here.


class UserAdmin(BaseUserAdmin):
    # this class is to customise how the dmin site will look and to set more customisations like permissions, search, filter, order etc
    model = User
    list_display = ('employee_id', 'email', 'first_name', 'second_name', 'is_staff', 'is_superuser')
    list_filter = ('is_staff', 'is_superuser', 'is_active')
    ordering = ('employee_id',)
    search_fields = ['employee_id','second_name']
admin.site.register(User, UserAdmin)

