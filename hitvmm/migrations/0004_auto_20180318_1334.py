# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2018-03-18 13:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hitvmm', '0003_auto_20180318_1333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reportrecord',
            name='experiment_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='reportrecord',
            name='score',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='reportrecord',
            name='student_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='reportrecord',
            name='teacher_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='teamrecord',
            name='student_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='teamrecord',
            name='teacher_id',
            field=models.IntegerField(default=0),
        ),
    ]
