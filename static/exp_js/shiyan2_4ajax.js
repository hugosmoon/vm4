var xmlHttp;
function S_xmlhttprequest() {
	if(window.ActiveXObject) {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
}
//x1进给量，x2切削速度，x3-x12背吃刀量，x13=xfc,x14=yfc
function funphp100y(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14) {
	S_xmlhttprequest();
	var url="shiyan2_4shujuchuli.php";
	url=url+"?x1="+x1;
	url=url+"&x2="+x2;
	url=url+"&x3="+x3;
	url=url+"&x4="+x4;
	url=url+"&x5="+x5;
	url=url+"&x6="+x6;
	url=url+"&x7="+x7;
	url=url+"&x8="+x8;
	url=url+"&x9="+x9;
	url=url+"&x10="+x10;
	url=url+"&x11="+x11;
	url=url+"&x12="+x12;
	url=url+"&x13="+x13;
	url=url+"&x14="+x14;
	url=url+"&sid="+Math.random();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange = byphp;
	xmlHttp.send(null);


	//S_xmlhttprequest();
	//xmlHttp.open("GET","for.php?id="+url+"&x1="+x1,true);
	//xmlHttp.onreadystatechange = byphp;
	//xmlHttp.send(null);
}

function byphp() {

  	if(xmlHttp.readyState == 1) {
		 document.getElementById('php100').innerHTML = "loading....";
	}

    	if(xmlHttp.readyState == 4 ){
		if(xmlHttp.status == 200) {
          var byphp100 =  xmlHttp.responseText;
          
		  
		  var yuanshi=Array();
		  yuanshi=byphp100.split("m");
		 
		}
	}


	var cfc=document.getElementById('cfc').value; 
	var xfc=document.getElementById('qxsdy_11').value;
	var yfc=document.getElementById('qxsdy_12').value; 
	var kkfc=document.getElementById('kkfc').value; 
	var klfc=document.getElementById('klfc').value;
	var knfc=document.getElementById('knfc').value; 
	var krfc=document.getElementById('krfc').value; 
	var xuehao=document.getElementById('xuehao').value;
	var xingming=document.getElementById('xingming').value;
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

	var kv=Array();
		kv[0]=yuanshi[10];
		kv[1]=yuanshi[11];
		kv[2]=yuanshi[12];
		kv[3]=yuanshi[13];
		kv[4]=yuanshi[14];
		kv[5]=yuanshi[15];
		kv[6]=yuanshi[16];
		kv[7]=yuanshi[17];
		kv[8]=yuanshi[18];
		kv[9]=yuanshi[19];
	var zhishu1=yuanshi[20];
	var zhishu2=yuanshi[21];
	var fc1=new Array();
	fc1[0]=(9.81)*(cfc)*(kv[0])*(zhishu2)*(0.95)*(kkfc)*(klfc)*(knfc)*(krfc)*(zhishu1);;
	fc1[1]=9.81*cfc*kv[1]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[2]=9.81*cfc*kv[2]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[3]=9.81*cfc*kv[3]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[4]=9.81*cfc*kv[4]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[5]=9.81*cfc*kv[5]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[6]=9.81*cfc*kv[6]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[7]=9.81*cfc*kv[7]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[8]=9.81*cfc*kv[8]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	fc1[9]=9.81*cfc*kv[9]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
var canvas=document.getElementById('tuxiang_3');
var cxt=canvas.getContext('2d');
//清理画布
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//画网格
cxt.beginPath();
cxt.strokeStyle="rgb(155,187,89)";
for(i=10;i<520;i=i+10)
{
	cxt.moveTo(i,10);
	cxt.lineTo(i,510);
	
}
for(i=10;i<520;i=i+10)
{
	cxt.moveTo(10,i);
	cxt.lineTo(510,i);
	
}
cxt.stroke();

//画坐标轴
cxt.beginPath();
cxt.strokeStyle="rgb(0,0,0)";
	cxt.moveTo(10,10);
	cxt.lineTo(10,510);
	cxt.lineTo(510,510);
	
	cxt.stroke();
//画图
	cxt.beginPath();
	cxt.strokeStyle="rgb(0,0,255)";
	cxt.font="15px Arial";
	cxt.fillStyle="rgb(0,0,0)";
	var m=1;
	for (i=0;i<10;i++)
	{
		cxt.moveTo(10+(((f[i]-f[0])/(f[9]-f[0]))*500),510-(fc1[i]/13000)*500);
		cxt.lineTo(10+(((f[i+1]-f[0])/(f[9]-f[0]))*500),510-(fc1[i+1]/13000)*500);
		cxt.fillText("("+(Math.round(f[i]*10))/10+","+(Math.round(fc1[i]*10))/10+")",10+(((f[i]-f[0])/(f[9]-f[0]))*500),520+(20*m)-(fc1[i]/13000)*500);
		cxt.arc(10+(((f[i]-f[0])/(f[9]-f[0]))*500),510-(fc1[i]/13000)*500,1.5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.fill();
		m=-m;
	}
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath();
	cxt.fillStyle="#0000FF";
	cxt.beginPath();
	cxt.arc(10+(((f[0]-f[0])/4)*500),510-(fc1[0]/13000)*500,1.5,0,Math.PI*2,true);
	cxt.closePath();

	cxt.fill();
	cxt.beginPath();
	cxt.fillStyle="rgb(0,0,0)";
	cxt.font="15px Arial";
	cxt.fillText("cutting force/N",15,30);
	cxt.fillText("cutting speed/m/min",415,525);
	cxt.fillText(xuehao,415,30);
	cxt.fillText(xingming,418,50);
	
	cxt.fill();






var lalala="<b>Workpiece Material</b>:45 steel <br> <b>cutting tool material</b>:cemented carbide YT15<br>";
if (cfc==180)
{
	lalala=lalala+"<b>processing method</b>:cylindrical turning,crosswise turning or boring holes<br>"
}
else if (cfc==222)
{
	lalala=lalala+"<b>processing method</b>:grooving or cutting off<br>"
}
else 
{
	lalala=lalala+"<b>processing method</b>:form turning<br>"
}


lalala=lalala+"<b>cutting tool parameter</b>&nbsp;&nbsp;&nbsp;&nbsp;tool cutting edge angle:"


if (kkfc==1.08)
{
	lalala=lalala+"30&nbsp;&nbsp;"
}
else if (kkfc==1)
{
	lalala=lalala+"45&nbsp;&nbsp;"
}
else if (kkfc==0.94)
{
	lalala=lalala+"60&nbsp;&nbsp;"
}
else if (kkfc==0.92)
{
	lalala=lalala+"75&nbsp;&nbsp;"
}
else
{
	lalala=lalala+"90&nbsp;&nbsp;"
}
 if(klfc==1.25)
{
	lalala=lalala+"anterior angle:-15<br>"
}
else if(klfc==1.2)
{
	lalala=lalala+"anterior angle:-10<br>"
}
else if(klfc==1.1)
{
	lalala=lalala+"anterior angle:0<br>"
}
else if(klfc==1)
{
	lalala=lalala+"anterior angle10<br>"
}
else
{
	lalala=lalala+"anterior angle:20<br>"
}

lalala=lalala+"<b>feed rate</b>:"+document.getElementById('jjly').value+"mm/r<br>";
lalala=lalala+"<b>milling depth</b>:"+document.getElementById('bcdly').value+"mm<br>";
lalala=lalala+"<b>cutting speed</b>(m/min):<br>"
for (i=0;i<10;i++)
{
	lalala=lalala+f[i]+"&nbsp;&nbsp;&nbsp;&nbsp;";
}
lalala=lalala+"<br>";
lalala=lalala+"<b>main mcutting force</b>(N):<br>"
for (i=0;i<10;i++)
{
	lalala=lalala+(Math.round(fc1[i]*10))/10+"&nbsp;&nbsp;";
}


document.getElementById('qxlcanshukuang2_4').innerHTML = lalala;
}



/////////////////////////////////////////////////////////////////////
//坐标系绘制
(function(){
var canvas=document.getElementById('tuxiang_3');
var cxt=canvas.getContext('2d');
//清理画布
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//画网格
cxt.beginPath();
cxt.strokeStyle="rgb(155,187,89)";
for(i=10;i<520;i=i+10)
{
	cxt.moveTo(i,10);
	cxt.lineTo(i,510);
	
}
for(i=10;i<520;i=i+10)
{
	cxt.moveTo(10,i);
	cxt.lineTo(510,i);
	
}
cxt.stroke();

//画坐标轴
cxt.beginPath();
cxt.strokeStyle="rgb(0,0,0)";
	cxt.moveTo(10,10);
	cxt.lineTo(10,510);
	cxt.lineTo(510,510);
	
	cxt.stroke();

	cxt.beginPath();
	cxt.fillStyle="rgb(0,0,0)";
	cxt.font="15px Arial";
	cxt.fillText("cutting force/N",15,30);
	cxt.fillText("cutting speed/m/min",415,525);
	
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
}

//动画过程
var ani;//当前动画循环
	var djx,djy;//刀尖位置
	djx=440;
	djy=250;//刀尖归位
	var anniuid;//b背吃刀量 j进给量 q切削速度
	var b;
	var b=Array();
	var j;
	var q0,q1,q2,q3,q4,q5,q6,q7,q8,q9;
	var dhfc=Array();
	var anniubiaohao;//用于标定输出第几组参数的切削力
	var anniuid;//传送按钮Id用于改变按钮名称
	var htfcx=10,htfcy=530;//储存每次画fc图像的起点
	var htpcx=510,htpcy=350;//储存每次画pc图像的起点
//用于动画的ajax请求

//x1进给量，x2背吃刀量，x3-x12切削速度，x13=xfc,x14=yfc
function donghua100(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,s) {
	//x15是按钮标号0,1,2,3,s是按钮id
	anniuid=s;
	q0=x3;
	q1=x4;
	q2=x5;
	q3=x6;
	q4=x7;
	q5=x8;
	q6=x9;
	q7=x10;
	q8=x11;
	q9=x12;
	b[1]=x4;
	b[2]=x5;
	b[3]=x6;
	j=x1;
	b=x2;
	anniubiaohao=x15;


	S_xmlhttprequest();
	var url="shiyan2_4dhshujuchuli.php";
	url=url+"?x1="+x1;
	url=url+"&x2="+x2;
	url=url+"&x3="+x3;
	url=url+"&x4="+x4;
	url=url+"&x5="+x5;
	url=url+"&x6="+x6;
	url=url+"&x7="+x7;
	url=url+"&x8="+x8;
	url=url+"&x9="+x9;
	url=url+"&x10="+x10;
	url=url+"&x11="+x11;
	url=url+"&x12="+x12;
	url=url+"&x13="+x13;
	url=url+"&x14="+x14;
	url=url+"&sid="+Math.random();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange = donghuabyphp;
	xmlHttp.send(null);


	//S_xmlhttprequest();
	//xmlHttp.open("GET","for.php?id="+url+"&x1="+x1,true);
	//xmlHttp.onreadystatechange = byphp;
	//xmlHttp.send(null);
}

function donghuabyphp() {

  	if(xmlHttp.readyState == 1) {
		 document.getElementById('php100').innerHTML = "loading....";
	}

    	if(xmlHttp.readyState == 4 ){
		if(xmlHttp.status == 200) {
          var byphp100 =  xmlHttp.responseText;
          
		  
		  var yuanshi=Array();
		  yuanshi=byphp100.split("m");
		 
		}
	}


	var cfc=document.getElementById('cfc').value; 
	var xfc=document.getElementById('qxsdy_11').value;
	var yfc=document.getElementById('qxsdy_12').value; 
	var kkfc=document.getElementById('kkfc').value; 
	var klfc=document.getElementById('klfc').value;
	var knfc=document.getElementById('knfc').value; 
	var krfc=document.getElementById('krfc').value; 
	var xuehao=document.getElementById('xuehao').value;
	var xingming=document.getElementById('xingming').value;
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

	var kv=Array();
		kv[0]=yuanshi[10];
		kv[1]=yuanshi[11];
		kv[2]=yuanshi[12];
		kv[3]=yuanshi[13];
		kv[4]=yuanshi[14];
		kv[5]=yuanshi[15];
		kv[6]=yuanshi[16];
		kv[7]=yuanshi[17];
		kv[8]=yuanshi[18];
		kv[9]=yuanshi[19];
	var zhishu1=yuanshi[20];
	var zhishu2=yuanshi[21];
	//对Fc数组赋值   只能用到前四组dhfc已经在函数外声明
	dhfc[0]=(9.81)*(cfc)*(kv[0])*(zhishu2)*(0.95)*(kkfc)*(klfc)*(knfc)*(krfc)*(zhishu1);;
	dhfc[1]=9.81*cfc*kv[1]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[2]=9.81*cfc*kv[2]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[3]=9.81*cfc*kv[3]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[4]=9.81*cfc*kv[4]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[5]=9.81*cfc*kv[5]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[6]=9.81*cfc*kv[6]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[7]=9.81*cfc*kv[7]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[8]=9.81*cfc*kv[8]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	dhfc[9]=9.81*cfc*kv[9]*zhishu2*0.95*kkfc*klfc*knfc*krfc*zhishu1;
	if(anniubiaohao==0)//如果发送请求的是第一个按钮
	{
		play(anniuid,b,j,q0);
	}
	else if(anniubiaohao==1)
	{
		play(anniuid,b,j,q1);
	}
	else if(anniubiaohao==2)
	{
		play(anniuid,b,j,q2);
	}
	else if(anniubiaohao==3) 
	{
		play(anniuid,b,j,q3);
	}
	else if(anniubiaohao==4) 
	{
		play(anniuid,b,j,q4);
	}
	else if(anniubiaohao==5) 
	{
		play(anniuid,b,j,q5);
	}
	else if(anniubiaohao==6) 
	{
		play(anniuid,b,j,q6);
	}
	else if(anniubiaohao==7) 
	{
		play(anniuid,b,j,q7);
	}
	else if(anniubiaohao==8) 
	{
		play(anniuid,b,j,q8);
	}
	else if(anniubiaohao==9) 
	{
		play(anniuid,b,j,q9);
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
		      s.innerHTML='START';//重命名该按钮为“播放”
		   }else{
		      ani=setInterval("donghuaxingjin(b,j,q)",20);//我们将设置动画为25fps[帧每秒]，40/1000，即为二十五分之一
		      s.innerHTML="PAUSE";//重命名该按钮为“暂停”
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
				htfcx=htfcx+(j*q/236)*2.4;
				htfcy=530-((dhfc[anniubiaohao])*(165/10000)*suijishu);
				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				//画Pc图像
				cxt1.beginPath();
				cxt1.moveTo(htpcx,htpcy);
				htpcx=htpcx+(j*q/236)*1.15;
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
				htfcx=htfcx+(j*q/236)*2.4;
				htfcy=530-((dhfc[anniubiaohao])*(165/10000)*suijishu);
				
				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				//画Pc图像
				cxt1.beginPath();
				cxt1.moveTo(htpcx,htpcy);
				htpcx=htpcx+(j*q/236)*1.15;
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
			anniuid.innerHTML ="FINISH";
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
