from django.shortcuts import render
from django.http import HttpResponse
from . import models

#检验用户是否已经登录
#def login_test(request):
#    name=request.COOKIES.get('name')
#    password=request.COOKIES.get('password')
#    student_id=request.COOKIES.get('student_id')
#    if not name and password and student_id:
#        return render(request,'hitvmm/login.html')



def index(request):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))


    return render(request,'hitvmm/index.html',{'name':name,'password':password,})

def login(request):
    return render(request,'hitvmm/login.html')

def login_action(request):
    name=request.POST.get('name','NAME')
    password=request.POST.get('password','PASSWORD')
    try:
        user_test= models.User.objects.get(name=name)
    except:
        return render(request,'hitvmm/login.html',{'hint':'*姓名不存在','name':name,'password':password})

    if name==user_test.name and password==user_test.password:
        #取到学生的ID
        human = models.User.objects.get(name=name,password=password)
        user_id=human.id
        ret= render(request,'hitvmm/toindex.html')

        #判断是不是为老师
        if human.identity=='2':
            ret= render(request,'hitvmm/toreport_correct.html')
        #将ID、姓名和学号加入缓存
        ret.set_cookie('name', name)
        ret.set_cookie('password', password)
        ret.set_cookie('user_id', user_id)
        return ret

    else:
        return render(request,'hitvmm/login.html',{'hint':'*密码错误','name':name,'password':password})

def exp_pre_v(request,v_id):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))
    reports=models.ReportRecord.objects.filter(student_id=user_id)

    return render(request,'hitvmm/exp_pre_v.html',{'v_id':v_id,'name':name,'password':password,})

#打开实验操作页面
def exp_opr(request):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))
    reports=models.ReportRecord.objects.filter(student_id=user_id)

    return render(request,'hitvmm/exp_opr.html',{'name':name,'password':password,})

#打开报告提交页面
def report(request):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))
    reports=models.ReportRecord.objects.filter(student_id=user_id)

    return render(request,'hitvmm/report.html',{'name':name,'password':password,'reports':reports,'student_id':user_id})

#学生上传报告
def upload_ajax(request):
    if request.method == 'POST':
        file_obj = request.FILES.get('file')
        new_file_name=request.POST.get('new_file_name')
        name=request.POST.get('name')
        password=request.POST.get('password')
        user_id=request.POST.get('user_id')
        experiment_id=request.POST.get('experiment_id')
        timestamp=request.POST.get('timestamp')

        team=models.TeamRecord.objects.get(student_id=user_id,experiment_id=experiment_id)
        teacher_id=team.teacher_id
        teacher_name=models.User.objects.get(pk=teacher_id).name

        models.ReportRecord.objects.create(timestamp=timestamp,teacher_name=teacher_name,teacher_id=teacher_id,student_id=user_id,student_name=name,student_password=password,experiment_id=experiment_id)


        import os
        f = open(os.path.join('static', 'reports', new_file_name), 'wb')
        print(file_obj,type(file_obj))
        for chunk in file_obj.chunks():
            f.write(chunk)
        f.close()

        return HttpResponse('OK')

#老师浏览待批阅报告
def report_correct(request):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))

    reports=models.ReportRecord.objects.filter(teacher_id=user_id,tatus=False)

    return render(request,'hitvmm/report_correct.html',{'name':name,'password':password,'user':user_id,'reports':reports})



# 老师批阅报告
def report_correct_view(request,v_id):
    name=request.COOKIES.get('name')
    if not name:
        return render(request,'hitvmm/login.html')
    password=request.COOKIES.get('password')
    user_id=str(request.COOKIES.get('user_id'))

    report=models.ReportRecord.objects.get(pk=v_id)
    s=report.experiment_id
    file_name='reports/'+str(s)+'_'+report.student_name+'_'+report.student_password+'_'+report.timestamp+'.pdf'
    return render(request,'hitvmm/report_correct_view.html',{'file_name':file_name,'name':name,'password':password,'user':user_id,'report_id':v_id})

#老师提交分数
def score_ajax(request):
    if request.method == 'POST':
        score=request.POST.get('score')
        report_id=request.POST.get('report_id')
        report=models.ReportRecord.objects.get(pk=report_id)
        report.score=score
        report.tatus=True
        report.save()
        return HttpResponse('OK')

#实验准备页面
def exp_opr_1_1(request):
    return render(request,'hitvmm/exp_1_1.html')

def exp_opr_2_1(request):
    return render(request,'hitvmm/exp_2_1.html')

def exp_opr_3_1(request):
    return render(request,'hitvmm/exp_3_1.html')


#实验操作第一步页面
def exp_opr_1_2(request):

    cfc=1;
    xfc=1;
    yfc=1;
    kkfc=1;
    klfc=1;
    knfc=1;
    krfc=1;

    #根据加工形式调整参数
    machining_form=request.POST.get('machining_form')
    if machining_form=="a":
        cfc=180
        xfc=1
        yfc=0.75
    elif machining_form=="b":
        cfc=222
        xfc=1
        yfc=1
    else :
        cfc=191
        xfc=1
        yfc=0.75

    #根据主偏角调整参数
    main_arc=request.POST.get('main_arc')
    if main_arc=="a":
        kkfc=1.08
    elif main_arc=="b":
        kkfc=1
    elif main_arc=="c":
        kkfc=0.94
    elif main_arc=="d":
        kkfc=0.92
    else :
        kkfc=0.89

    #根据刀具前角调整参数
    front_arc=request.POST.get('front_arc')
    if front_arc=="a":
        klfc=1.25
    elif front_arc=="b":
        klfc=1.2
    elif front_arc=="c":
        klfc=1.1
    elif front_arc=="d":
        klfc=1
    else :
        klfc=0.9

    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    ret=render(request,'hitvmm/exp_1_2.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})
    #将参数存进cookie
    ret.set_cookie('cfc', cfc)
    ret.set_cookie('xfc', xfc)
    ret.set_cookie('yfc', yfc)
    ret.set_cookie('kkfc', kkfc)
    ret.set_cookie('klfc', klfc)
    ret.set_cookie('knfc', knfc)
    ret.set_cookie('krfc', krfc)

    return ret

    #实验操作第一步页面
    # def exp_opr_1_2(request,exp_id):
    #
    #     cfc=1;
    #     xfc=1;
    #     yfc=1;
    #     kkfc=1;
    #     klfc=1;
    #     knfc=1;
    #     krfc=1;
    #
    #     #根据加工形式调整参数
    #     machining_form=request.POST.get('machining_form')
    #     if machining_form=="a":
    #         cfc=180
    #         xfc=1
    #         yfc=0.75
    #     elif machining_form=="b":
    #         cfc=222
    #         xfc=1
    #         yfc=1
    #     else :
    #         cfc=191
    #         xfc=1
    #         yfc=0.75
    #
    #     #根据主偏角调整参数
    #     main_arc=request.POST.get('main_arc')
    #     if main_arc=="a":
    #         kkfc=1.08
    #     elif main_arc=="b":
    #         kkfc=1
    #     elif main_arc=="c":
    #         kkfc=0.94
    #     elif main_arc=="d":
    #         kkfc=0.92
    #     else :
    #         kkfc=0.89
    #
    #     #根据刀具前角调整参数
    #     front_arc=request.POST.get('front_arc')
    #     if front_arc=="a":
    #         klfc=1.25
    #     elif front_arc=="b":
    #         klfc=1.2
    #     elif front_arc=="c":
    #         klfc=1.1
    #     elif front_arc=="d":
    #         klfc=1
    #     else :
    #         klfc=0.9
    #
    #     name=request.COOKIES.get('name')
    #     password=request.COOKIES.get('password')
    #     if exp_id==1:
    #         ret=render(request,'hitvmm/exp_1_2.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})
    #     if exp_id==2:
    #         ret=render(request,'hitvmm/exp_1_2.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})
    #     if exp_id==3:
    #         ret=render(request,'hitvmm/exp_1_2.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})
    #     #将参数存进cookie
    #     ret.set_cookie('cfc', cfc)
    #     ret.set_cookie('xfc', xfc)
    #     ret.set_cookie('yfc', yfc)
    #     ret.set_cookie('kkfc', kkfc)
    #     ret.set_cookie('klfc', klfc)
    #     ret.set_cookie('knfc', knfc)
    #     ret.set_cookie('krfc', krfc)
    #
    #     return ret

#实验1操作第2步页面
def exp_opr_1_3(request):
    #从cookie中取参数
    cfc=request.COOKIES.get('cfc')
    xfc=request.COOKIES.get('xfc')
    yfc=request.COOKIES.get('yfc')
    kkfc=request.COOKIES.get('kkfc')
    klfc=request.COOKIES.get('klfc')
    knfc=request.COOKIES.get('knfc')
    krfc=request.COOKIES.get('krfc')

    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    return render(request,'hitvmm/exp_1_3.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})

#实验1操作第3步页面
def exp_opr_1_4(request):
    #从cookie中取参数
    cfc=request.COOKIES.get('cfc')
    xfc=request.COOKIES.get('xfc')
    yfc=request.COOKIES.get('yfc')
    kkfc=request.COOKIES.get('kkfc')
    klfc=request.COOKIES.get('klfc')
    knfc=request.COOKIES.get('knfc')
    krfc=request.COOKIES.get('krfc')

    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    return render(request,'hitvmm/exp_1_4.html',{'cfc':cfc,'xfc':xfc,'yfc':yfc,'kkfc':kkfc,'klfc':klfc,'knfc':knfc,'krfc':krfc,'name':name,'password':password})


#实验2操作第1步页面
def exp_opr_2_2(request):

    cfc=1;
    xfc=1;
    yfc=1;
    kkfc=1;
    klfc=1;
    knfc=1;
    krfc=1;

    #根据加工形式调整参数
    machining_form=request.POST.get('machining_form')
    if machining_form=="a":
        cfc=180
        xfc=1
        yfc=0.75
    elif machining_form=="b":
        cfc=222
        xfc=1
        yfc=1
    else :
        cfc=191
        xfc=1
        yfc=0.75

    #根据主偏角调整参数
    main_arc=request.POST.get('main_arc')
    if main_arc=="a":
        kkr=1
    elif main_arc=="b":
        kkr=1.05
    elif main_arc=="c":
        kkr=1.15
    elif main_arc=="d":
        kkr=1.2
    else :
        kkr=1.25

    #根据刀具前角调整参数
    front_arc=request.POST.get('front_arc')
    if front_arc=="a":
        kr0=1.15
    elif front_arc=="b":
        kr0=1.1
    elif front_arc=="c":
        kr0=1.05
    elif front_arc=="d":
        kr0=1
    else :
        kr0=0.8

    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    ret=render(request,'hitvmm/exp_2_2.html',{'kkr':kkr,'kr0':kr0,'name':name,'password':password})
    #将参数存进cookie

    ret.set_cookie('kkr', kkr)
    ret.set_cookie('kr0', kr0)

    return ret


#实验2操作第2步页面
def exp_opr_2_3(request):
    kkr=request.COOKIES.get('kkr')
    kr0=request.COOKIES.get('kr0')


    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    return render(request,'hitvmm/exp_2_3.html',{'kkr':kkr,'kr0':kr0,'name':name,'password':password})

#实验2操作第3步页面
def exp_opr_2_4(request):
    kkr=request.COOKIES.get('kkr')
    kr0=request.COOKIES.get('kr0')


    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    return render(request,'hitvmm/exp_2_4.html',{'kkr':kkr,'kr0':kr0,'name':name,'password':password})

#实验3操作第1步页面
def exp_opr_3_2(request):
    tool_arc=0
    tool_arc_a=request.POST.get('tool_arc')
    if tool_arc_a=='a':
        tool_arc=0.25
    elif tool_arc_a=='b':
        tool_arc=0.5
    elif tool_arc_a=='c':
        tool_arc=0.75
    elif tool_arc_a=='d':
        tool_arc=1
    elif tool_arc_a=='e':
        tool_arc=1.5
    else:
        tool_arc=2


    name=request.COOKIES.get('name')
    password=request.COOKIES.get('password')

    ret=render(request,'hitvmm/exp_3_2.html',{'tool_arc':tool_arc,'name':name,'password':password})


    return ret
