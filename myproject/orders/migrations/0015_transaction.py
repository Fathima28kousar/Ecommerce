# Generated by Django 5.0.3 on 2024-04-27 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0014_delete_payment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('amount', models.IntegerField()),
                ('order_id', models.CharField(max_length=100)),
                ('razorpay_payment_id', models.CharField(blank=True, max_length=100, null=True)),
                ('paid', models.BooleanField(default=False)),
            ],
        ),
    ]
