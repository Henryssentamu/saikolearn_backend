# Generated by Django 5.1.7 on 2025-07-22 14:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('school', '0001_initial'),
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='enrollment',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='enrollments', to='students.student'),
        ),
        migrations.AddField(
            model_name='course',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='school.school'),
        ),
        migrations.AlterUniqueTogether(
            name='cohort',
            unique_together={('course', 'cohort_number')},
        ),
        migrations.AlterUniqueTogether(
            name='enrollment',
            unique_together={('student', 'cohort')},
        ),
    ]
