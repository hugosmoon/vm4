

//计算切削温度
//x1进给量，x2切削速度，x3-x12背吃刀量
function huatuxian(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12) {


	var kr0=document.getElementById('kr0').value; 
	var kkr=document.getElementById('kkr').value;
	var j=x1;
	var b=x2;
	
	var xuehao=document.getElementById('xuehao').value;
	var xingming=document.getElementById('xingming').value;
	var q=Array();
		q[0]=x3;
		q[1]=x4;
		q[2]=x5;
		q[3]=x6;
		q[4]=x7;
		q[5]=x8;
		q[6]=x9;
		q[7]=x10;
		q[8]=x11;
		q[9]=x12;

		//q.sort(function(a,b){return a>b?1:-1});//切削速度从小到大排序
		q.sort(function(a,b){return a-b;});
	//温度计算
	
	var t=Array();
	for(i=0;i<10;i++)
	{
		var zhishu1=0.26+(1/(50*j+6.67));
		var suijishu1=0.95+Math.random()/10;
		t[i]=suijishu1*223*Math.pow(q[i],zhishu1)*Math.pow(j,0.14)*Math.pow(b,0.04)*kr0*kkr;
		t[i]=Math.round(t[i]);
	}

	


var canvas=document.getElementById('tuxiang_3');
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
	for (i=0;i<10;i++)
	{
		
		cxt.fillText("("+q[i]+","+t[i]+")",10+(Math.log(q[i]/10)/Math.log(10)*250),520+80*m-(Math.log(t[i]/100)/Math.log(100))*500);
		cxt.arc(10+(Math.log(q[i]/10)/Math.log(10)*250),510-(Math.log(t[i]/100)/Math.log(100))*500,1.5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.fill();
		m=-m;
	}
	
	cxt.beginPath();
	cxt.fillStyle="#0000FF";
	cxt.beginPath();
	
	cxt.closePath();

	cxt.fill();
	cxt.beginPath();
	cxt.fillStyle="rgb(0,0,0)";
	cxt.font="15px Arial";
	cxt.fillText("temperature/'C",15,30);
	cxt.fillText("cutting speed//m/min",405,525);
	//学号和姓名
	cxt.fillText(xuehao,415,440);
	cxt.fillText(xingming,418,460);
	
	cxt.fill();







var lalala="<b>Workpiece Material</b>:45 steel <br> <b>cutting tool material</b>:cemented carbide YT15<br>";

lalala=lalala+"<b>cutting tool parameter</b>&nbsp;&nbsp;&nbsp;&nbsp;tool cutting edge angle:";

if (kkr==1.25)
{
	lalala=lalala+"30&deg&nbsp;&nbsp;"
}
else if (kkr==1.2)
{
	lalala=lalala+"45&deg&nbsp;&nbsp;"
}
else if (kkr==1.15)
{
	lalala=lalala+"60&deg&nbsp;&nbsp;"
}
else if (kkr==1.05)
{
	lalala=lalala+"75&deg&nbsp;&nbsp;"
}
else
{
	lalala=lalala+"90&deg&nbsp;&nbsp;"
}


 if(kr0==1.15)
{
	lalala=lalala+"anterior angle:-15&deg<br>"
}
else if(kr0==1.1)
{
	lalala=lalala+"anterior angle:-10&deg<br>"
}
else if(kr0==1.05)
{
	lalala=lalala+"anterior angle:0&deg<br>"
}
else if(kr0==1)
{
	lalala=lalala+"anterior angle10&deg<br>"
}
else
{
	lalala=lalala+"anterior angle:20&deg<br>"
}

lalala=lalala+"<b>feed rate</b>:"+document.getElementById('jjly').value+"mm/r<br>";
lalala=lalala+"<b>milling depth</b>:"+document.getElementById('bcdly').value+"mm<br>";
lalala=lalala+"<b>cutting speed</b>(m/min):<br>"
for (i=0;i<10;i++)
{
	lalala=lalala+q[i]+"&nbsp;&nbsp;&nbsp;&nbsp;";
}
lalala=lalala+"<br>";
lalala=lalala+"<b>temperature</b>(&deg;C):<br>"
for (i=0;i<10;i++)
{
	lalala=lalala+t[i]+"&nbsp;&nbsp;";
}


document.getElementById('qxlcanshukuang2_3').innerHTML = lalala;
}


















//坐标系绘制
(function(){
var canvas=document.getElementById('tuxiang_3');
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
	cxt.fillText("temperature/'C",15,30);
	cxt.fillText("cutting speed//m/min",405,525);
	
	
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
	cxt1.lineTo(502,360);
	

	cxt1.stroke();
}

function sizuobiaoxi(){
//画坐标系
	//T坐标
	var zbx=10,zby=365,xc=165,yc=730,
		mc1="2000'C temperature",mc2="lathe displacement 40mm",mc1x=12,mc1y=380,mc2x=560,mc2y=525;
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
	for(i=0;i<41;i++)
		{
			cxt1.moveTo(x0+(i*(yc0/40)),y0);
			cxt1.lineTo(x0+(i*(yc0/40)),y0+xc0);
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
				cxt1.fillText("temperature('C)",505,236);
				cxt1.fillText("ap(mm)",505,74);
				cxt1.fillText("f(mm/r)",505,128);
				cxt1.fillText("Vc(m/min)",505,182);

		
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
					cxt1.fillText("temperature('C)",505,236);
				cxt1.fillText("ap(mm)",505,74);
				
				cxt1.fillText("f(mm/r)",505,128);
		
				cxt1.fillText("Vc(m/min)",505,182);
			

		
	sizuobiaoxi();
	chedao(440,250);
	tukuang();
	setCookie("cfc",document.getElementById('cfc').value);
	setCookie("yfc",document.getElementById('bcdl_12').value);
	setCookie("kkfc",document.getElementById('kkfc').value);
	setCookie("klfc",document.getElementById('klfc').value);
}


//动画过程
var ani;//当前动画循环
	var djx,djy;//刀尖位置
	djx=440;
	djy=250;//刀尖归位
	var anniuid;//b背吃刀量 j进给量 q切削速度
	var qq=Array();
	var b;
	var j;
	var q;
	var dhwd=Array();
	var anniubiaohao;//用于标定输出第几组参数的温度
	var anniuid;//传送按钮Id用于改变按钮名称
	var htwdx=10,htwdy=530;//储存每次画wd图像的起点
	

//用于动画的温度计算
//x1进给量，x2背吃刀量，x3-x12切削速度
function donghua100(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x15,s) {
	//x15是按钮标号0,1,2,3,s是按钮id
	
	anniuid=s;
	j=x1;
	b=x2;
	anniubiaohao=x15;
		qq[0]=x3;
		qq[1]=x4;
		qq[2]=x5;
		qq[3]=x6;
		qq[4]=x7;
		qq[5]=x8;
		qq[6]=x9;
		qq[7]=x10;
		qq[8]=x11;
		qq[9]=x12;
	//
	var kr0=document.getElementById('kr0').value; 
	var kkr=document.getElementById('kkr').value;
	
	
	var xuehao=document.getElementById('xuehao').value;
	var xingming=document.getElementById('xingming').value;
	

	var suijishu1;	
	//温度计算
	
	for(i=0;i<10;i++)
	{
		var zhishu1=0.26+(1/(50*j+6.67));
		suijishu1=0.95+Math.random()/10;
		dhwd[i]=suijishu1*223*Math.pow(qq[i],zhishu1)*Math.pow(j,0.14)*Math.pow(b,0.04)*kr0*kkr;		
		dhwd[i]=(10*Math.round(dhwd[i]))/10;
	}
	
		play(anniuid,b,j,qq[x15]);
	
	
}




	//控制动画播放的函数
	function play(s,b1,j1,q1){//参数s是一个button
			b=b1;
			j=j1;
			q=q1;
			
		   if(ani){	//如果ani不为null，则代表我们当前已经有了一个动画
		      clearInterval(ani);//所以我们需要清除它(停止动画)
		      ani=null;					
		      s.innerHTML='START';//重命名该按钮为“播放”
		   }else{
		      ani=setInterval("donghuaxingjin()",20);//我们将设置动画为25fps[帧每秒]，40/1000，即为二十五分之一
		      s.innerHTML="PAUSE";//重命名该按钮为“暂停”
		   }
		}

	function donghuaxingjin(){
		

		//清空仿真界面
		cxt1.fillStyle="rgb(50,50,50)";
		cxt1.beginPath();		
		cxt1.fillRect(0,3,500,356);
		cxt1.fill();
		
		//重画车刀并检测刀尖是否已经过右边界
		chedao(djx,djy);
		djx=djx-(j*q/236)*2;
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
		
	

		//画wd图像
		if(djx<400)
		{
			
			if(djx>385)
			{
				//画wd图像
				var suijishu=Math.pow((((500-djx)/15)-6.7),0.2)+((Math.random())/20);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htwdx,htwdy);
				htwdx=htwdx+(j*q/236)*3.65;
				htwdy=530-((dhwd[anniubiaohao])*(165/2000)*suijishu);
				cxt1.lineTo(htwdx,htwdy);
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
					cxt1.fillText("temperature('C)",505,236);
				cxt1.fillText("ap(mm)",505,74);
				
				cxt1.fillText("f(mm/r)",505,128);
				
				cxt1.fillText("Vc(m/min)",505,182);
				
				
				//输出wd实时数值
				cxt1.fillStyle="rgb(0,255,0)";
				cxt1.beginPath();
				cxt1.font="10px Arial";
				//ap
				cxt1.fillText(b,515,100);
				//f
				cxt1.fillText(j,515,154);
				//Vc
				cxt1.fillText(q,515,208);
				//wd
				cxt1.fillText(Math.round(dhwd[anniubiaohao]*suijishu),515,262);
				//车刀位移
				if(djx<400){
				cxt1.fillText(Math.round(400-djx)/10,520,50);
				}
				cxt1.fill();
				
			}
			else
			{
				//wd图像
				var suijishu=(((Math.random())/20)+0.975);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htwdx,htwdy);
				htwdx=htwdx+(j*q/236)*3.65;
				htwdy=530-((dhwd[anniubiaohao])*(165/2000)*suijishu);
				
				cxt1.lineTo(htwdx,htwdy);
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
					cxt1.fillText("temperature('C)",505,236);
				cxt1.fillText("ap(mm)",505,74);
			
				cxt1.fillText("f(mm/r)",505,128);
			
				cxt1.fillText("Vc(m/min)",505,182);
	
			
				//输出实时数值
				cxt1.fillStyle="rgb(0,255,0)";
				cxt1.beginPath();
				cxt1.font="10px Arial";
				//ap
				cxt1.fillText(b,515,100);
				//f
				cxt1.fillText(j,515,154);
				//Vc
				cxt1.fillText(q,515,208);
				//wd
				cxt1.fillText(Math.round(dhwd[anniubiaohao]*suijishu),515,262);
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
			anniuid.innerHTML ="FINISH";
			djx=440;
			djy=250;//刀尖归位
			htwdx=10;
			htwdy=530;//wd画图起点归位
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

	


