from django.db import models
import django.utils.timezone as timezone


#用户表
class User(models.Model):
    name=models.CharField(max_length=64)
    password=models.CharField(max_length=64)
    school=models.CharField(max_length=64,default="free")

    #学生为1，老师为2
    identity=models.CharField(max_length=32,default="1")
    create_time=models.DateTimeField(default=timezone.now)

#班级表
class TeamRecord(models.Model):
    team_name=models.CharField(max_length=64,default="free_team")
    school=models.CharField(max_length=64,default="free_school")
    experiment_id=models.IntegerField(default=0)
    teacher_id=models.IntegerField(default=0)
    student_id=models.IntegerField(default=0)
    create_time=models.DateTimeField(default=timezone.now)

#报告表
class ReportRecord(models.Model):
    #对应实验ID
    experiment_id=models.IntegerField(default=0)
    #老师ID
    teacher_id=models.IntegerField(default=0)
    #老师姓名
    teacher_name=models.CharField(max_length=32,default="free")
    #学生ID
    student_id=models.IntegerField(default=0)
    #学生姓名
    student_name=models.CharField(max_length=32,default="free")
    #学生学号
    student_password=models.CharField(max_length=32,default="free")
    #报告提交时间
    subm_time=models.DateTimeField(default=timezone.now)
    #报告批改时间
    score_time=models.DateTimeField(default=timezone.now)
    #报告分数
    score=models.IntegerField(default=0)
    #报告批阅状态，false为未批改，ture为批改
    tatus=models.BooleanField(default=False)
    #时间戳
    timestamp=models.CharField(max_length=32,default="")
