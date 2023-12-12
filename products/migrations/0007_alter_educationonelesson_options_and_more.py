# Generated by Django 4.2.7 on 2023-12-10 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_timelesson_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='educationonelesson',
            options={'verbose_name': 'Продолжительность одного урока'},
        ),
        migrations.AlterModelOptions(
            name='educationtime',
            options={'verbose_name': 'Продолжительность курса'},
        ),
        migrations.AlterModelOptions(
            name='educationtrans',
            options={'verbose_name': 'Сложность курса'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Продукт'},
        ),
        migrations.AlterModelOptions(
            name='productcategory',
            options={'verbose_name': 'Категории'},
        ),
        migrations.AlterModelOptions(
            name='productformat',
            options={'verbose_name': 'Формат продукта'},
        ),
        migrations.AlterModelOptions(
            name='programmproduct',
            options={'verbose_name': 'Программа продукта'},
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=10, max_digits=20),
        ),
    ]