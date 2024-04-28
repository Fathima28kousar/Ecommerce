# Generated by Django 5.0.3 on 2024-04-28 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0016_transaction_razorpay_order_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='razorpay_order_id',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='razorpay_signature',
        ),
        migrations.AlterField(
            model_name='transaction',
            name='order_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
