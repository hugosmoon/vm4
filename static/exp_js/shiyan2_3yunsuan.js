//全局变量，记录四个需要输出的切削力
var force_1,force_2,force_3,force_4,force_5,force_6,force_7,force_8,force_9,force_10;
var yuanshi1,yuanshi2,yuanshi3,yuanshi4,yuanshi5,yuanshi6,yuanshi7,yuanshi8,yuanshi9,yuanshi10;
var kkfc=document.getElementById('kkfc').value;
var klfc=document.getElementById('klfc').value;
var cfc=document.getElementById('cfc').value;
//是否已经生成图像
 var imagestatus=0;


//画图及数据输出
function gra_dra(){

  imagestatus=1;


	var xuehao=document.getElementById('xuehao').value;
	var xingming=document.getElementById('xingming').value;
	var fc1=Array();

	fc1[0]=force_1;
	fc1[1]=force_2;
	fc1[2]=force_3;
	fc1[3]=force_4;
  fc1[4]=force_5;

	var f=Array();

	f[0]=yuanshi1;
	f[1]=yuanshi2;
	f[2]=yuanshi3;
	f[3]=yuanshi4;
  f[4]=yuanshi5;

  if (!(fc1[0])) {
    alert("您没有进行任何实验操作吧~")
    return false;

  }





var canvas=document.getElementById('tuxiang_1');
var cxt=canvas.getContext('2d');
//清理画布
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//画双对数网格
//y轴
cxt.beginPath();
cxt.lineWidth=0.5;
cxt.strokeStyle="rgb(155,187,89)";
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(10+(Math.log(i)/(Math.log(10)))*250,10);
	cxt.lineTo(10+(Math.log(i)/(Math.log(10)))*250,510);

}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(260+(Math.log(i)/(Math.log(10)))*250,10);
	cxt.lineTo(260+(Math.log(i)/(Math.log(10)))*250,510);

}

//x轴
//for(i=1;i<10;i=i+1)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
//for(i=10;i<100;i=i+10)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
for(i=100;i<1000;i=i+100)
{
	cxt.moveTo(10,260-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*500);
	cxt.lineTo(510,260-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*500);
}
for(i=1000;i<10000;i=i+1000)
{
	cxt.moveTo(10,510-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*500);
	cxt.lineTo(510,510-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*500);
}
//for(i=10000;i<20001;i=i+10000)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
cxt.stroke();

//画坐标轴
cxt.beginPath();
cxt.lineWidth=1;
cxt.strokeStyle="rgb(0,0,0)";
	cxt.moveTo(10,10);
	cxt.lineTo(10,510);
	cxt.lineTo(510,510);

	cxt.stroke();




//画图
	cxt.beginPath();
	cxt.lineWidth=0.5;
	cxt.strokeStyle="rgb(0,0,255)";
	cxt.font="15px Arial";
	cxt.fillStyle="rgb(0,0,0)";
	var m=0.5;




	for (var i=0;i<5;i++)
	{

		cxt.moveTo(10+(Math.log(10*f[i])/Math.log(10)*250),510-(Math.log(fc1[i]/100)/Math.log(100))*500);
		//cxt.lineTo(10+(Math.log(10*f[i+1])/Math.log(10)*250),510-(Math.log(fc1[i+1]/100)/Math.log(100))*500);
		cxt.fillText("("+(Math.round(f[i]*100))/100+","+(Math.round(fc1[i]*10))/10+")",10+(Math.log(10*f[i])/Math.log(10)*250),520+30*m-(Math.log(fc1[i]/100)/Math.log(100))*500);
		cxt.arc(10+(Math.log(10*f[i])/Math.log(10)*250),510-(Math.log(fc1[i]/100)/Math.log(100))*500,1.5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.fill();
		//m=-m;
	}

	cxt.stroke();
	cxt.closePath();

	cxt.beginPath();
	cxt.fillStyle="#0000FF";
	cxt.beginPath();

	cxt.closePath();

	cxt.fill();
	cxt.beginPath();
	cxt.fillStyle="rgb(0,0,0)";
	cxt.font="15px Arial";
	cxt.fillText("主切削力/N",15,30);
	cxt.fillText("背吃刀量/mm",415,525);
	//学号和姓名
	cxt.fillText(xuehao,415,440);
	cxt.fillText(xingming,418,460);

	cxt.fill();






var lalala="<p style='color:red'>请将此处数据填写到实验报告相应位置</p><table class='table'><tr><td><p><b>工件材料</b>:</p></td><td><p>45 钢 </p></td><td></td></tr><tr><td><p> <b>刀具材料</b>:</p></td><td><p>硬质合金</p></td><td></td></tr>";
if (cfc==180)
{
	lalala=lalala+"<tr><td><p><b>加工形式:</b></p></td><td><p>外圆纵车</p></td><td></td></tr>"
}
else if (cfc==222)
{
	lalala=lalala+"<tr><td><p><b>加工形式:</b></p></td><td><p>切槽及切断</p></td><td></td></tr>"
}
else
{
	lalala=lalala+"<tr><td><p><b>加工形式:</b></p></td><td><p>成形车削</p></td><td></td></tr>"
}


lalala=lalala+"<tr><td><p><b>刀具参数</b></p></td><td><p>主偏角:</p></td>"


if (kkfc==1.08)
{
	lalala=lalala+"<td><p>30°</p></td></tr>"
}
else if (kkfc==1)
{
	lalala=lalala+"<td><p>45°</p></td></tr>"
}
else if (kkfc==0.94)
{
	lalala=lalala+"<td><p>60°</p></td></tr>"
}
else if (kkfc==0.92)
{
	lalala=lalala+"<td><p>75°</p></td></tr>"
}
else
{
	lalala=lalala+"<td><p>90°</p></td></tr>"
}

 if(klfc==1.25)
{
	lalala=lalala+"<tr><td></td><td><p>前角:</p></td><td><p>-15°<p></td></tr>"
}
else if(klfc==1.2)
{
	lalala=lalala+"<tr><td></td><td><p>前角:</p></td><td><p>-10°<p></td></tr>"
}
else if(klfc==1.1)
{
	lalala=lalala+"<tr><td></td><td><p>前角:</p></td><td><p>0°<p></td></tr>"
}
else if(klfc==1)
{
	lalala=lalala+"<tr><td></td><td><p>前角:</p></td><td><p>10°<p></td></tr>"
}
else
{
	lalala=lalala+"<tr><td></td><td><p>前角:</p></td><td><p>20°<p></td></tr>"
}

lalala=lalala+"<tr><td><p><b>切削速度:</b><p></td><td><p>"+document.getElementById('qxsdx').value+"m/min</p></td><td></td></tr>";
lalala=lalala+"<tr><td><p><b>背吃刀量:</b><p></td><td><p>"+document.getElementById('bcdlx').value+"mm</p></td><td></td></tr></table>";
lalala=lalala+"<table class='table '><tr><td><p><b>进给量(mm/r):</b></p></td><td><b>(1)</b></p></td><td><b>(2)</b></p></td><td><b>(3)</b></p></td><td><b>(4)</b></p></td><td><b>(5)</b></p></td></tr><tr><td></td>"
for (i=0;i<5;i++)
{
	lalala=lalala+"<td><p>"+f[i]+"</p></td>";
}
lalala=lalala+"</tr>";
lalala=lalala+"<tr><td><p><b>主切削力(N):</b></p></td><td><b>(1)</b></p></td><td><b>(2)</b></p></td><td><b>(3)</b></p></td><td><b>(4)</b></p></td><td><b>(5)</b></p></td></tr><tr><td></td>"
for (i=0;i<5;i++)
{
	lalala=lalala+"<td><p>"+(Math.round(fc1[i]*10))/10+"</p></td>";
}
lalala=lalala+"</tr></table>"

document.getElementById('qxlcanshukuang2_2').innerHTML = lalala+'<input name="data_2_1" type="hidden" value="'+lalala+'">';
}


















//坐标系绘制
(function(){
var canvas=document.getElementById('tuxiang_1');
var cxt=canvas.getContext('2d');
//清理画布
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//画双对数网格
//y轴
cxt.beginPath();
cxt.lineWidth=0.5;
cxt.strokeStyle="rgb(155,187,89)";
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(10+(Math.log(i)/(Math.log(10)))*250,10);
	cxt.lineTo(10+(Math.log(i)/(Math.log(10)))*250,510);

}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(260+(Math.log(i)/(Math.log(10)))*250,10);
	cxt.lineTo(260+(Math.log(i)/(Math.log(10)))*250,510);

}

//x轴
//for(i=1;i<10;i=i+1)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
//for(i=10;i<100;i=i+10)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
for(i=100;i<1000;i=i+100)
{
	cxt.moveTo(10,260-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*500);
	cxt.lineTo(510,260-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*500);
}
for(i=1000;i<10000;i=i+1000)
{
	cxt.moveTo(10,510-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*500);
	cxt.lineTo(510,510-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*500);
}
//for(i=10000;i<20001;i=i+10000)
//{
//	cxt.moveTo(10,10+(Math.log(i)/(Math.log(20000)))*500);
//	cxt.lineTo(510,10+(Math.log(i)/(Math.log(20000)))*500);
//
//}
cxt.stroke();

//画坐标轴
cxt.lineWidth=1;
cxt.beginPath();
cxt.strokeStyle="rgb(0,0,0)";
	cxt.moveTo(10,10);
	cxt.lineTo(10,510);
	cxt.lineTo(510,510);

	cxt.stroke();


cxt.beginPath();
	cxt.fillStyle="rgb(0,0,0)";
	cxt.font="15px Arial";
	cxt.fillText("主切削力/N",15,30);
	cxt.fillText("背吃刀量/mm",415,525);


	cxt.fill();

})();

//定义动画1图板
var canvas1=document.getElementById('donghua1_1');
var cxt1=canvas1.getContext('2d');

//清理画布
function qingli()
{
	cxt1.fillStyle="rgb(50,50,50)";
	cxt1.beginPath();
	cxt1.clearRect(0,0,2000,2000);
	cxt1.fillRect(0,0,2000,2000);
}

function tukuang(){


//画图框
cxt1.lineWidth=3;
cxt1.beginPath();
cxt1.strokeStyle="rgb(255,0,0)";
	cxt1.moveTo(1,1);
	cxt1.moveTo(1,540);
	cxt1.lineTo(749,539);
	cxt1.moveTo(749,1);
	cxt1.lineTo(1,1);
	cxt1.stroke();
	cxt1.lineWidth=1;
	cxt1.beginPath();
	cxt1.moveTo(0,360);
	cxt1.lineTo(750,360);
	cxt1.moveTo(502,0);
	cxt1.lineTo(502,540);
	cxt1.moveTo(502,270);
	cxt1.lineTo(750,270);
	cxt1.moveTo(502,450);
	cxt1.lineTo(750,450);
	cxt1.stroke();
}

function sizuobiaoxi(){
//画坐标系
	//FC坐标
	var zbx=10,zby=365,xc=165,yc=480,
		mc1="10000N Fc",mc2="lathe displacement 40mm",mc1x=12,mc1y=380,mc2x=310,mc2y=525;
	//四组坐标系通用函数
	function zuobiao(x0,y0,xc0,yc0,mc10,mc20,mc1x0,mc1y0,mc2x0,mc2y0){
	cxt1.lineWidth=1;
	cxt1.strokeStyle="rgb(255,255,255)";
	cxt1.beginPath();
	cxt1.moveTo(x0,y0);
	cxt1.lineTo(x0,y0+xc0);
	cxt1.lineTo(x0+yc0,y0+xc0);
	cxt1.stroke();

	cxt1.lineWidth=0.1;
	cxt1.beginPath();
	cxt1.moveTo(x0,y0);
	for(i=0;i<10;i++)
		{
			cxt1.moveTo(x0,y0+(i*(xc0/10)));
			cxt1.lineTo(x0+yc0,y0+i*(xc0/10));
		}
	for(i=0;i<31;i++)
		{
			cxt1.moveTo(x0+(i*(yc0/30)),y0);
			cxt1.lineTo(x0+(i*(yc0/30)),y0+xc0);
		}
	cxt1.stroke();

	cxt1.beginPath();
	cxt1.fillStyle="rgb(255,255,255)";
	cxt1.font="15px Arial";
	cxt1.fillText(mc10,mc1x0,mc1y0);
	cxt1.fillText(mc20,mc2x0,mc2y0);
	cxt1.fill();

	}
	zuobiao(zbx,zby,xc,yc,mc1,mc2,mc1x,mc1y,mc2x,mc2y);
	//Fp坐标
	var zbx=510,zby=365,xc=75,yc=230,
		mc1="10000N Fp",mc2="lathe displacement 40mm",mc1x=512,mc1y=380,mc2x=560,mc2y=435;
	zuobiao(zbx,zby,xc,yc,mc1,mc2,mc1x,mc1y,mc2x,mc2y);
	//Ff坐标
	var zbx=510,zby=455,xc=75,yc=230,
		mc1="10000N Ff",mc2="lathe displacement 40mm",mc1x=512,mc1y=470,mc2x=560,mc2y=525;

	zuobiao(zbx,zby,xc,yc,mc1,mc2,mc1x,mc1y,mc2x,mc2y);
	//Pc坐标
	var zbx=510,zby=275,xc=75,yc=230,
		mc1="40Kw Pc",mc2="lathe displacement 40mm",mc1x=512,mc1y=290,mc2x=560,mc2y=345;
	zuobiao(zbx,zby,xc,yc,mc1,mc2,mc1x,mc1y,mc2x,mc2y);
	}


	//机床初始状态
	function jichuangchushi()
	{

		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(1,80,1,220);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#222255');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#000011');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(499,80);
		cxt1.lineTo(490,80);
		cxt1.lineTo(490,220);
		cxt1.lineTo(499,220);
		cxt1.lineTo(499,80);
		cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(10,110,10,190);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#222255');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#000011');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(490,110);
		cxt1.lineTo(440,110);
		cxt1.lineTo(440,190);
		cxt1.lineTo(490,190);
		cxt1.lineTo(490,110);
		cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(60,110,60,190);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#9999ff');
		   grad.addColorStop(0.3,'#7777cc');
		   grad.addColorStop(0.5,'#111133');
		   grad.addColorStop(1,'#000011');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(440,110);
		cxt1.lineTo(390,150);
		cxt1.lineTo(440,190);
		cxt1.lineTo(440,110);
		cxt1.fill();

	}

	//棒料
	function bangliao(l,d){
		//l是被切掉的长度,d是背吃刀量

		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#770000');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#330000');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		   cxt1.moveTo(400,150);
		   cxt1.lineTo(400,250-d);
		   cxt1.lineTo(400-l,250-d);
		   cxt1.lineTo(400-l,50+d);
		   cxt1.lineTo(400,50+d);
		   cxt1.lineTo(400,150);
		   cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#cfcfcf');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#222222');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(400-l,50);
		cxt1.lineTo(0,50);
		cxt1.lineTo(0,250);
		cxt1.lineTo(400-l,250);
		cxt1.lineTo(400-l,50);
		cxt1.fill();
	}
	function a_bangliao(l,d,u){
		//l是被切掉的长度,d是背吃刀量,u是倒角宽度

		if(u==0)//刀具没有碰到棒料
		{
			//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#770000');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#330000');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		   cxt1.moveTo(400,150);
		   cxt1.lineTo(400,250-d);
		   cxt1.lineTo(400-l,250-d);
		   cxt1.lineTo(400-l,50+d);
		   cxt1.lineTo(400,50+d);
		   cxt1.lineTo(400,150);
		   cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#cfcfcf');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#222222');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(400-l,50);
		cxt1.lineTo(0,50);
		cxt1.lineTo(0,250);
		cxt1.lineTo(400-l,250);
		cxt1.lineTo(400-l,50);
		cxt1.fill();
		}

		else if(u>0&&u<d)
		{
			//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#770000');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#330000');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		   cxt1.moveTo(400,150);
		   cxt1.lineTo(400,250-u);
		   cxt1.lineTo(400-u,250);
		   cxt1.lineTo(400-u,50);
		   cxt1.lineTo(400,50+u);
		   cxt1.lineTo(400,150);
		   cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#cfcfcf');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#222222');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		cxt1.moveTo(400-u,50);
		cxt1.lineTo(0,50);
		cxt1.lineTo(0,250);
		cxt1.lineTo(400-u,250);
		cxt1.lineTo(400-u,50);
		cxt1.fill();
		}
		else
		{
			//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		//已切面
		   grad.addColorStop(0,'#550000');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#220000');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		   cxt1.moveTo(400,150);
		   cxt1.lineTo(400,250-d);
		   cxt1.lineTo(400-l,250-d);
		   cxt1.lineTo(400-l,50+d);
		   cxt1.lineTo(400,50+d);
		   cxt1.lineTo(400,150);
		   cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		//切面
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		grad.addColorStop(0,'#770000');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#330000');
		   cxt1.fillStyle=grad;
		   cxt1.beginPath();
		   cxt1.moveTo(400-l,150);
		   cxt1.lineTo(400-l,250-d);
		   cxt1.lineTo(400-l-d,250);
		   cxt1.lineTo(400-l-d,50);
		   cxt1.lineTo(400-l,50+d);
		   cxt1.lineTo(400-l,150);
		   cxt1.fill();
		//创建线性渐变，前两个参数为渐变开始点坐标，后两个为渐变结束点坐标
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//为线性渐变指定渐变色，0表示渐变起始色，1表示渐变终止色
		   grad.addColorStop(0,'#cfcfcf');
		   grad.addColorStop(0.25,'#ffffff');
		   grad.addColorStop(1,'#222222');
		    cxt1.fillStyle=grad;
		    cxt1.beginPath();
			cxt1.moveTo(400-l-d,50);
			cxt1.lineTo(0,50);
			cxt1.lineTo(0,250);
			cxt1.lineTo(400-l-d,250);
			cxt1.lineTo(400-l-d,50);
			cxt1.fill();
		}
	}


//画车刀，基准点为刀尖坐标x,y
	function chedao(x,y)
	{
		cxt1.fillStyle="rgb(23,27,26)";
		cxt1.beginPath();
		cxt1.moveTo(x,y);
		cxt1.lineTo(x+10,y+10);
		cxt1.lineTo(x-25,y+45);
		cxt1.lineTo(x+10,y+80);
		cxt1.lineTo(x+10,359);
		cxt1.lineTo(x+60,359);
		cxt1.lineTo(x+60,y+95);
		cxt1.lineTo(x+55,y+55);
		cxt1.lineTo(x+10,y+10);
		cxt1.lineTo(x,y);
		cxt1.fill();

		cxt1.fillStyle="rgb(215,181,92)";
		cxt1.beginPath();
		cxt1.moveTo(x,y);
		cxt1.lineTo(x-30,y+30);
		cxt1.lineTo(x,y+60);
		cxt1.lineTo(x+30,y+30);
		cxt1.lineTo(x,y);
		cxt1.fill();
		cxt1.fillStyle="rgb(23,27,26)";
		cxt1.beginPath();
		cxt1.arc(x,y+30,8,0,Math.PI*2,true);
		cxt1.arc(x+20,y+48,15,0,Math.PI*2,true);
		cxt1.fill();

	}



//动画1_1初始画面
(function donghua1chushi() {
	qingli();
	jichuangchushi();
	bangliao(0,0);

		//数据标题
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
				cxt1.fillText("Fc(N)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				cxt1.fillText("Pc(Kw)",505,236);


	sizuobiaoxi();
	chedao(440,250);
	tukuang();

})();

//复位函数
function fuwei()
{
	qingli();
	jichuangchushi();
	bangliao(0,0);

		//数据标题
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
					cxt1.fillText("Fc(N)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				cxt1.fillText("Pc(Kw)",505,236);


	sizuobiaoxi();
	chedao(440,250);
	tukuang();
	setCookie("cfc",document.getElementById('cfc').value);
	setCookie("yfc",document.getElementById('bcdl_12').value);
	setCookie("kkfc",document.getElementById('kkfc').value);
	setCookie("klfc",document.getElementById('klfc').value);
}
//JS设置cookie
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/")
}

//动画过程
	var ani;//当前动画循环
	var faster;//动画加速
	var djx,djy;//刀尖位置
	djx=440;
	djy=250;//刀尖归位
	var anniuid;//b背吃刀量 j进给量 q切削速度
	var j0,j1,j2,j3;
	var j=Array();
	var b;
	var q;
	var dhfc=Array();
	var anniubiaohao;//用于标定输出第几组参数的切削力
	var anniuid;//传送按钮Id用于改变按钮名称
	var htfcx=10,htfcy=530;//储存每次画fc图像的起点
	var htpcx=510,htpcy=350;//储存每次画pc图像的起点


// function wert()
// {
//   alert("haoa")
// }

//用于动画的ajax请求
//x1进给量，x2切削速度，x3-x12背吃刀量，x13=xfc,x14=yfc
function donghua100(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,s)
{
	//x15是按钮标号0,1,2,3,s是按钮id，b1,j1,q1分别是背吃刀量


	faster=1;
	anniuid=s;
	j0=x3;
	j1=x4;
	j2=x5;
	j3=x6;
  j4=x7;
  j[0]=x3;
	j[1]=x4;
	j[2]=x5;
	j[3]=x6;
  j[4]=x7;
	b=x1;
	q=x2;
	anniubiaohao=x15;

	var f=Array();
	f[0]=x3;
	f[1]=x4;
	f[2]=x5;
	f[3]=x6;
	f[4]=x7;
	f[5]=x8;
	f[6]=x9;
	f[7]=x10;
	f[8]=x11;
	f[9]=x12;
	var v=x2;
	var kv;

	if(v<15)
		kv=(-0.01)*v+1.7;
	else if(v>=15&&v<25)
		kv=(0.025)*v+1.175;
	else if(v>=25&&v<40)
		kv=(-0.011)*v+2.07;
	else
		kv=(-0.001)*v+1.65;
		kv=kv*0.54;
	var zhishu1=Array();
	var zhishu2;

  zhishu2=Math.pow(x1,x13);

	for(var i=0;i<10;i++)
	{
		zhishu1[i]=Math.pow(f[i]*(1+((Math.random()*(-800))/10000)),x14)/1.18;
	}




	var w="";
	for(var d=0;d<10;d++)
	{
		w=w+f[d];
		w=w+"m";
	}

	for(var d=0;d<10;d++)
	{
		w=w+Math.round(zhishu1[d]*100)/100;
		w=w+"m";
	}

	w=w+Math.round(kv*100)/100;
	w=w+"m";
	w=w+Math.round(zhishu2*100)/100;
	w=w+"m";

	donghuabyphp(w);



	// S_xmlhttprequest();
	// var url="shiyan2_2dhshujuchuli.php";
	// url=url+"?x1="+x1;
	// url=url+"&x2="+x2;
	// url=url+"&x3="+x3;
	// url=url+"&x4="+x4;
	// url=url+"&x5="+x5;
	// url=url+"&x6="+x6;
	// url=url+"&x7="+x7;
	// url=url+"&x8="+x8;
	// url=url+"&x9="+x9;
	// url=url+"&x10="+x10;
	// url=url+"&x11="+x11;
	// url=url+"&x12="+x12;
	// url=url+"&x13="+x13;
	// url=url+"&x14="+x14;
	// url=url+"&sid="+Math.random();
	// xmlHttp.open("GET",url,true);
	// xmlHttp.onreadystatechange = donghuabyphp;
	// xmlHttp.send(null);
}

//动画主函数

function donghuabyphp(w) {

  // 	if(xmlHttp.readyState == 1) {
	// 	 document.getElementById('php100').innerHTML = "loading....";
	// }
	//
  //   	if(xmlHttp.readyState == 4 ){
	// 	if(xmlHttp.status == 200) {
  //         var byphp100 =  xmlHttp.responseText;
	//

		  var yuanshi=Array();
		  yuanshi=w.split("m");

	// 	}
	// }
	//aaaa获取Fc值
	var cfc=document.getElementById('cfc').value;
	var xfc=document.getElementById('jjlx_11').value;
	var yfc=document.getElementById('jjlx_12').value;
	var kkfc=document.getElementById('kkfc').value;
	var klfc=document.getElementById('klfc').value;
	var knfc=document.getElementById('knfc').value;
	var krfc=document.getElementById('krfc').value;
	var f=Array();
		f[0]=yuanshi[0];
		f[1]=yuanshi[1];
		f[2]=yuanshi[2];
		f[3]=yuanshi[3];
    f[4]=yuanshi[4];
    f[5]=yuanshi[5];
		f[6]=yuanshi[6];
		f[7]=yuanshi[7];
		f[8]=yuanshi[8];
    f[9]=yuanshi[9];

		yuanshi1=f[0];
		yuanshi2=f[1];
		yuanshi3=f[2];
		yuanshi4=f[3];
    yuanshi5=f[4];
    yuanshi6=f[5];
		yuanshi7=f[6];
		yuanshi8=f[7];
		yuanshi9=f[8];
    yuanshi10=f[9];

	var zhishu1=Array();
		zhishu1[0]=yuanshi[10];
		zhishu1[1]=yuanshi[11];
		zhishu1[2]=yuanshi[12];
		zhishu1[3]=yuanshi[13];
    zhishu1[4]=yuanshi[14];
    zhishu1[5]=yuanshi[15];
		zhishu1[6]=yuanshi[16];
		zhishu1[7]=yuanshi[17];
		zhishu1[8]=yuanshi[18];
    zhishu1[9]=yuanshi[19];


	var kv=yuanshi[20];
	var zhishu2=yuanshi[21];

	//对Fc数组赋值   只能用到前四组dhfc已经在函数外声明
	dhfc[0]=(9.81)*(cfc)*(zhishu1[0])*(zhishu2)*(0.95)*(kkfc)*(klfc)*(knfc)*(krfc)*(kv);
	dhfc[1]=9.81*cfc*zhishu1[1]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	dhfc[2]=9.81*cfc*zhishu1[2]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	dhfc[3]=9.81*cfc*zhishu1[3]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
  dhfc[4]=9.81*cfc*zhishu1[4]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;

	//给切削力的全局变量赋值，方便后续图像的绘制
		force_1=Math.round(dhfc[0]*10)/10;
		force_2=Math.round(dhfc[1]*10)/10;
		force_3=Math.round(dhfc[2]*10)/10;
		force_4=Math.round(dhfc[3]*10)/10;
    force_5=Math.round(dhfc[4]*10)/10;
	if(anniubiaohao==0)//如果发送请求的是第一个按钮
	{
		play(anniuid,b,j0,q);
	}
	else if(anniubiaohao==1)
	{
		play(anniuid,b,j1,q);
	}
	else if(anniubiaohao==2)
	{
		play(anniuid,b,j2,q);
	}
  else if(anniubiaohao==3)
	{
		play(anniuid,b,j3,q);
	}
	else
	{
		play(anniuid,b,j4,q);
	}

}




	//控制动画播放的函数
	function play(s,b1,j1,q1){//参数s是一个button


			b=b1;
			j=j1;
			q=q1;

		   if(ani){	//如果ani不为null，则代表我们当前已经有了一个动画
		      clearInterval(ani);//所以我们需要清除它(停止动画)
		      ani=null;
		      s.innerHTML='开始切削';//重命名该按钮为“播放”
		   }else{
		      ani=setInterval("donghuaxingjin(b,j,q)",20);//我们将设置动画为25fps[帧每秒]，40/1000，即为二十五分之一
		      s.innerHTML="暂停切削";//重命名该按钮为“暂停”
		   }
		}

	function donghuaxingjin(b,j,q){


		//清空仿真界面
		cxt1.fillStyle="rgb(50,50,50)";
		cxt1.beginPath();
		cxt1.fillRect(0,3,500,356);
		cxt1.fill();
		//重画车刀并检测刀尖是否已经过右边界
		chedao(djx,djy);
		djx=djx-(j*q/236)*2*faster;

		if(djy>(250-(b*2)))
		{
			djy=djy-0.2;
		}

		//画车床
		jichuangchushi();
		//画棒料
		var changdu,beichidaoliang,daojiao;
		if(djx<400+b*2)
		{
			if(djx<400)
			{
			changdu=400-djx;
			daojiao=b*2;
			}
			else
			{
			changdu=0;
			daojiao=400+b*2-djx;
			}
		}


		else
		{
			changdu=0;
			daojiao=0;
		}
		beichidaoliang=b*2;
		a_bangliao(changdu,beichidaoliang,daojiao);

		//


		//画Fc图像
		if(djx<400)
		{

			if(djx>385)
			{
				//画Fc图像
				var suijishu=8.7-((500-djx)/15)+((Math.random())/4);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htfcx,htfcy);
				htfcx=htfcx+(j*q/236)*2.4*faster;
				htfcy=530-((dhfc[anniubiaohao])*(165/10000)*suijishu);
				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				//画Pc图像
				cxt1.beginPath();
				cxt1.moveTo(htpcx,htpcy);
				htpcx=htpcx+(j*q/236)*1.15*faster;
				htpcy=350-((dhfc[anniubiaohao]*q/60000)*1.875*suijishu);
				cxt1.lineTo(htpcx,htpcy);
				cxt1.stroke();
				//切削过程仿真标题
				cxt1.fillStyle="rgb(50,50,50)";
				cxt1.beginPath();
				cxt1.fillRect(505,5,240,263);
				cxt1.fill();
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
					cxt1.fillText("Fc(N)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				cxt1.fillText("Pc(Kw)",505,236);

				//输出Fc实时数值
				cxt1.fillStyle="rgb(0,255,0)";
				cxt1.beginPath();
				cxt1.font="10px Arial";
				//ap
				cxt1.fillText(b,640,100);
				//f
				cxt1.fillText(j,640,154);
				//Vc
				cxt1.fillText(q,640,208);
				//Fc
				cxt1.fillText(Math.round(dhfc[anniubiaohao]*10*suijishu)/10,520,100);
				//Pc
				cxt1.fillText(Math.round((dhfc[anniubiaohao]*q/60000)*suijishu*10)/10,520,260);
				//车刀位移
				if(djx<400){
				cxt1.fillText(Math.round(400-djx)/10,520,50);
				}
				cxt1.fill();

			}
			else
			{
				//Fc图像
				var suijishu=(((Math.random())/5)+0.9);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htfcx,htfcy);
				htfcx=htfcx+(j*q/236)*2.4*faster;
				htfcy=530-((dhfc[anniubiaohao])*(165/10000)*suijishu);

				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				//画Pc图像
				cxt1.beginPath();
				cxt1.moveTo(htpcx,htpcy);
				htpcx=htpcx+(j*q/236)*1.15*faster;
				htpcy=350-((dhfc[anniubiaohao]*q/60000)*1.875*suijishu);
				cxt1.lineTo(htpcx,htpcy);
				cxt1.stroke();
				//切削过程仿真标题
				cxt1.fillStyle="rgb(50,50,50)";
				cxt1.beginPath();
				cxt1.fillRect(505,5,240,263);
				cxt1.fill();
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
					cxt1.fillText("Fc(N)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				cxt1.fillText("Pc(Kw)",505,236);

				//输出实时数值
				cxt1.fillStyle="rgb(0,255,0)";
				cxt1.beginPath();
				cxt1.font="10px Arial";
				//ap
				cxt1.fillText(b,640,100);
				//f
				cxt1.fillText(j,640,154);
				//Vc
				cxt1.fillText(q,640,208);
				//Fc
				cxt1.fillText(Math.round(dhfc[anniubiaohao]*10*suijishu)/10,520,100);
				//Pc
				cxt1.fillText(Math.round((dhfc[anniubiaohao]*q/60000)*suijishu*10)/10,520,260);
				//车刀位移
				if(djx<400){
				cxt1.fillText(Math.round(400-djx)/10,520,50);
				}

				cxt1.fill();
			}
		}


		//检测刀尖是否已经过右边界
		if(djx<0)
		{
			clearInterval(ani);//所以我们需要清除它(停止动画)
			ani=null;
			anniuid.innerHTML ="完成切削";
			djx=440;
			djy=250;//刀尖归位
			htfcx=10;
			htfcy=530;//fc画图起点归位
			htpcx=510;
			htpcy=350;//Pc画图起点归位
			//清空仿真界面
			cxt1.fillStyle="rgb(50,50,50)";
			cxt1.beginPath();
			cxt1.fillRect(0,3,500,356);
			cxt1.fill();
			//重画车刀并检测刀尖是否已经过右边界
			chedao(djx,djy);
			//画车床
			jichuangchushi();
			//画棒料
			bangliao(0,0);

		}

	}

  //保存实验结果图像
function saveExpImage(){

  if (!(force_1)) {
    alert("您没有进行任何实验操作~")
    return false;

  }

  if (imagestatus==0) {
    alert("请先生成实验结果~")
    return false;

  }


var myCanvas = document.getElementById("tuxiang_1");
var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
window.location.href=image;
}
