# Generated by Django 5.0.3 on 2024-04-25 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0009_remove_customer_country_remove_customer_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='state',
        ),
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='', max_length=254, unique=True),
            preserve_default=False,
        ),
    ]
