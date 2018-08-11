
from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^index/$', views.index,name='index'),
    url(r'^login/$', views.login,name='login'),
    url(r'^login/action$', views.login_action,name='login_action'),
    url(r'^exp/prev/(?P<v_id>[0-9]+)$', views.exp_pre_v,name='exp_pre_v'),
    url(r'^exp/opr/$', views.exp_opr,name='exp_opr'),
    url(r'^report$', views.report,name='report'),
    url(r'^upload_ajax/$', views.upload_ajax,name='upload_ajax'),
    url(r'^report/correct$', views.report_correct,name='report_correct'),
    url(r'^report/correct/(?P<v_id>[0-9]+)$', views.report_correct_view,name='report_correct_view'),


    #老师提交分数
    url(r'^score_ajax/$', views.score_ajax,name='score_ajax'),

    #实验准备页面1,2,3
    url(r'^exp/opr/1$', views.exp_opr_1_1,name='exp_opr_1_1'),
    url(r'^exp/opr/2$', views.exp_opr_2_1,name='exp_opr_2_1'),
    url(r'^exp/opr/3$', views.exp_opr_3_1,name='exp_opr_3_1'),

    #实验操作第1步
    url(r'^exp/opr/1/1/$', views.exp_opr_1_2,name='exp_opr_1_2'),
    url(r'^exp/opr/2/1/$', views.exp_opr_2_2,name='exp_opr_2_2'),
    url(r'^exp/opr/3/1/$', views.exp_opr_3_2,name='exp_opr_3_2'),

    #实验操作第2步
    url(r'^exp/opr/1/2$', views.exp_opr_1_3,name='exp_opr_1_3'),
    url(r'^exp/opr/2/2$', views.exp_opr_2_3,name='exp_opr_2_3'),

    #实验操作第3步
    url(r'^exp/opr/1/3$', views.exp_opr_1_4,name='exp_opr_1_4'),
    url(r'^exp/opr/2/3$', views.exp_opr_2_4,name='exp_opr_2_4'),


]
