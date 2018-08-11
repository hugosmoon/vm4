from django.contrib import admin

from .models import TeamRecord
from .models import ReportRecord
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display=('name','password','school','identity')

class TeamRecordAdmin(admin.ModelAdmin):
    list_display=('team_name','school','experiment_id','teacher_id','student_id')

class ReportRecordAdmin(admin.ModelAdmin):
    list_display=('teacher_id','student_id')

admin.site.register(User,UserAdmin)
admin.site.register(TeamRecord,TeamRecordAdmin)
admin.site.register(ReportRecord,ReportRecordAdmin)
