var xmlHttp;
var djyhbj=document.getElementById('djyhbj').value;
function S_xmlhttprequest() {
	if(window.ActiveXObject) {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
}
//x1��������x2�����ٶȣ�x3-x12���Ե�����x13=xfc,x14=yfc
function funphp100x(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14) {
	S_xmlhttprequest();
	var url="shiyan2_3shujuchuli.php";
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
//}




//function qxltu1()
//{
	 
	var xfc=document.getElementById('jjlx_11').value;
	var cfc=document.getElementById('cfc').value;
	var yfc=document.getElementById('jjlx_12').value; 
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
	var fc1=new Array();
	fc1[0]=(9.81)*(cfc)*(zhishu1[0])*(zhishu2)*(0.95)*(kkfc)*(klfc)*(knfc)*(krfc)*(kv);;
	fc1[1]=9.81*cfc*zhishu1[1]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[2]=9.81*cfc*zhishu1[2]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[3]=9.81*cfc*zhishu1[3]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[4]=9.81*cfc*zhishu1[4]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[5]=9.81*cfc*zhishu1[5]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[6]=9.81*cfc*zhishu1[6]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[7]=9.81*cfc*zhishu1[7]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[8]=9.81*cfc*zhishu1[8]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	fc1[9]=9.81*cfc*zhishu1[9]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;

	var ry1=new Array();
	for (var i = 5; i < 10; i++) {
		ry1[i]=(0.95+Math.random()/10)*(f[i])*(f[i])/(8*djyhbj);
	};

var canvas=document.getElementById('tuxiang_2');
var cxt=canvas.getContext('2d');
//������
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//��˫��������
//y��
cxt.beginPath();
cxt.strokeStyle="rgb(155,187,89)";
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(10+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(10+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(135+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(135+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(260+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(260+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(385+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(385+(Math.log(i)/(Math.log(10)))*125,510);
	
}


//x��
for(i=100;i<1000;i=i+100)
{
	cxt.moveTo(10,135-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,135-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*250);
}
for(i=1000;i<10000;i=i+1000)
{
	cxt.moveTo(10,260-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,260-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*250);
}

for(i=10000;i<100000;i=i+10000)
{
	cxt.moveTo(10,385-(((Math.log(i))/(Math.log(10))-4)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,385-(((Math.log(i))/(Math.log(10))-4)/((Math.log(10000))/(Math.log(10))-2))*250);
}

for(i=100000;i<1000000;i=i+100000)
{
	cxt.moveTo(10,510-(((Math.log(i))/(Math.log(10))-5)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,510-(((Math.log(i))/(Math.log(10))-5)/((Math.log(10000))/(Math.log(10))-2))*250);
}
cxt.stroke();

//��������
cxt.beginPath();
cxt.strokeStyle="rgb(0,0,0)";
	cxt.moveTo(10,10);
	cxt.lineTo(10,510);
	cxt.lineTo(510,510);
	
	cxt.stroke();
//��ͼ
	cxt.beginPath();
	cxt.strokeStyle="rgb(0,0,255)";
	cxt.font="15px Arial";
	cxt.fillStyle="rgb(0,0,0)";
	var m=1;
	for (i=5;i<10;i++)
	{
		cxt.moveTo(10+(Math.log(10*f[i])/Math.log(10)*125),510-(Math.log(ry1[i]*10000)/Math.log(10000))*500);
		cxt.lineTo(10+(Math.log(10*f[i+1])/Math.log(10)*125),510-(Math.log(ry1[i+1]*10000)/Math.log(10000))*500);
		cxt.fillText("("+(Math.round(f[i]*100))/100+","+(Math.round(ry1[i]*10000))/10000+")",20+(Math.log(10*f[i])/Math.log(10)*125),510-(Math.log(ry1[i]*10000)/Math.log(10000))*500);
		cxt.arc(10+(Math.log(10*f[i])/Math.log(10)*125),510-(Math.log(ry1[i]*10000)/Math.log(10000))*500,1.5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.fill();
		m=-m;
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
	cxt.fillText("Ry/mm",15,30);
	//cxt.fillText(f[6],15,50);
	cxt.fillText("feed rate/mm/r",415,525);
	cxt.fillText(xuehao,415,440);
	cxt.fillText(xingming,418,460);
	
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
lalala=lalala+"<b>corner radius</b>:"+document.getElementById('djyhbj').value+"mm<br>";
lalala=lalala+"<b>cutting speed</b>:"+document.getElementById('qxsdx').value+"m/min<br>";
lalala=lalala+"<b>milling depth</b>:"+document.getElementById('bcdlx').value+"mm<br>";
lalala=lalala+"<b>feed rate</b>(mm/r):<br>"
for (i=5;i<10;i++)
{
	lalala=lalala+f[i]+"&nbsp;&nbsp;&nbsp;&nbsp;";
}
lalala=lalala+"<br>";
lalala=lalala+"<b>scallop-height</b>(mm):<br>"
for (i=5;i<10;i++)
{
	lalala=lalala+(Math.round(ry1[i]*10000))/10000+"&nbsp;&nbsp;";
}


document.getElementById('qxlcanshukuang2_3').innerHTML = lalala;
}








/////////////////////////////////////////////////////////////////////
//����ϵ����
(function(){
var canvas=document.getElementById('tuxiang_2');
var cxt=canvas.getContext('2d');
//������
cxt.fillStyle="rgb(255,255,255)";
cxt.beginPath();
cxt.clearRect(0,0,600,600);
cxt.fillRect(10,10,550,550);


//��˫��������
//y��
cxt.beginPath();
cxt.strokeStyle="rgb(155,187,89)";
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(10+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(10+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(135+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(135+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(260+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(260+(Math.log(i)/(Math.log(10)))*125,510);
	
}
for(i=1;i<10.1;i=i+1)
{
	cxt.moveTo(385+(Math.log(i)/(Math.log(10)))*125,10);
	cxt.lineTo(385+(Math.log(i)/(Math.log(10)))*125,510);
	
}


//x��
for(i=100;i<1000;i=i+100)
{
	cxt.moveTo(10,135-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,135-(((Math.log(i))/(Math.log(10))-2)/((Math.log(10000))/(Math.log(10))-2))*250);
}
for(i=1000;i<10000;i=i+1000)
{
	cxt.moveTo(10,260-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,260-(((Math.log(i))/(Math.log(10))-3)/((Math.log(10000))/(Math.log(10))-2))*250);
}

for(i=10000;i<100000;i=i+10000)
{
	cxt.moveTo(10,385-(((Math.log(i))/(Math.log(10))-4)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,385-(((Math.log(i))/(Math.log(10))-4)/((Math.log(10000))/(Math.log(10))-2))*250);
}

for(i=100000;i<1000000;i=i+100000)
{
	cxt.moveTo(10,510-(((Math.log(i))/(Math.log(10))-5)/((Math.log(10000))/(Math.log(10))-2))*250);
	cxt.lineTo(510,510-(((Math.log(i))/(Math.log(10))-5)/((Math.log(10000))/(Math.log(10))-2))*250);
}
cxt.stroke();


//��������
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
	cxt.fillText("Ry/mm",15,30);
	cxt.fillText("feed rate//mm/r",415,525);
	
	
	cxt.fill();

})();


//���嶯��1ͼ��
var canvas1=document.getElementById('donghua1_1');
var cxt1=canvas1.getContext('2d');

//������
function qingli()
{
	cxt1.fillStyle="rgb(50,50,50)";
	cxt1.beginPath();
	cxt1.clearRect(0,0,2000,2000);
	cxt1.fillRect(0,0,2000,2000);
}

function tukuang(){	


//��ͼ��
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
//������ϵ
	//FC����
	var zbx=10,zby=365,xc=165,yc=480,
		mc1="0.2mm Ry",mc2="lathe displacement 40mm",mc1x=12,mc1y=380,mc2x=310,mc2y=525;
	//��������ϵͨ�ú���
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
	
	}


	//������ʼ״̬
	function jichuangchushi()
	{
		
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(1,80,1,220);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(10,110,10,190);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(60,110,60,190);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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

	//����
	function bangliao(l,d){
		//l�Ǳ��е��ĳ���,d�Ǳ��Ե���

		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//l�Ǳ��е��ĳ���,d�Ǳ��Ե���,u�ǵ��ǿ��

		if(u==0)//����û����������
		{
			//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
			//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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
			//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100,50+d,100,250-d);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
		//������
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		//����
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
		//�������Խ��䣬ǰ��������Ϊ���俪ʼ�����꣬������Ϊ�������������
		var grad=cxt1.createLinearGradient(100+l,50,100+l,250);
		//Ϊ���Խ���ָ������ɫ��0��ʾ������ʼɫ��1��ʾ������ֹɫ
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


	
//����������׼��Ϊ��������x,y
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




//����1_1��ʼ����
(function donghua1chushi() {
	qingli();
	jichuangchushi();
	bangliao(0,0);
	
		//���ݱ���
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
				cxt1.fillText("Ry(mm)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				//cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				//cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				//cxt1.fillText("Pc(Kw)",505,236);

		
	sizuobiaoxi();
	chedao(440,250);
	tukuang();
	
})();

//��λ����
function fuwei()
{
	qingli();
	jichuangchushi();
	bangliao(0,0);
	
		//���ݱ���
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
				cxt1.fillText("Ry(mm)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				//cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				//cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				//cxt1.fillText("Pc(Kw)",505,236);

		
	sizuobiaoxi();
	chedao(440,250);
	tukuang();
}

//��������
var ani;//��ǰ����ѭ��
	var djx,djy;//����λ��
	djx=440;
	djy=250;//�����λ
	var anniuid;//b���Ե��� j������ q�����ٶ�
	var b;
	var b=Array();
	var j0,j1,j2,j3,j4;
	var q;
	var dhfc=Array();
	var dhry=Array();
	var anniubiaohao;//���ڱ궨����ڼ��������������
	var anniuid;//���Ͱ�ťId���ڸı䰴ť����
	var htfcx=10,htfcy=530;//����ÿ�λ�fcͼ������
	var htpcx=510,htpcy=350;//����ÿ�λ�pcͼ������

	//���ڶ�����ajax����
	//x1���Ե�����x2�����ٶȣ�x3-x12��������x13=xfc,x14=yfc
function donghua100(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,s) {
	//x15�ǰ�ť���0,1,2,3,s�ǰ�ťid
	anniuid=s;
	j0=x3;
	j1=x4;
	j2=x5;
	j3=x6;
	j4=x7;
	b[1]=x4;
	b[2]=x5;
	b[3]=x6;
	b=x1;
	q=x2;
	anniubiaohao=x15;

	S_xmlhttprequest();
	var url="shiyan2_3dhshujuchuli.php";
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
	xmlHttp.onreadystatechange =donghuabyphp;
	xmlHttp.send(null);
	
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
	var xfc=document.getElementById('jjlx_11').value;
	var yfc=document.getElementById('jjlx_12').value; 
	var kkfc=document.getElementById('kkfc').value; 
	var klfc=document.getElementById('klfc').value;
	var knfc=document.getElementById('knfc').value; 
	var krfc=document.getElementById('krfc').value; 
	var djyhbj=document.getElementById('djyhbj').value; 
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
	//��Fc���鸳ֵ   ֻ���õ�ǰ����dhfc�Ѿ��ں���������
	dhfc[0]=(9.81)*(cfc)*(zhishu1[0])*(zhishu2)*(0.95)*(kkfc)*(klfc)*(knfc)*(krfc)*(kv);;
	dhfc[1]=9.81*cfc*zhishu1[1]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	dhfc[2]=9.81*cfc*zhishu1[2]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	dhfc[3]=9.81*cfc*zhishu1[3]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	dhfc[4]=9.81*cfc*zhishu1[4]*zhishu2*0.95*kkfc*klfc*knfc*krfc*kv;
	//��dhry��ֵ���Ѿ��ں���������
		dhry[0]=(document.getElementById('jjlx_1').value)*(document.getElementById('jjlx_1').value)/(8*djyhbj);
		dhry[1]=(document.getElementById('jjlx_2').value)*(document.getElementById('jjlx_2').value)/(8*djyhbj);
		dhry[2]=(document.getElementById('jjlx_3').value)*(document.getElementById('jjlx_3').value)/(8*djyhbj);
		dhry[3]=(document.getElementById('jjlx_4').value)*(document.getElementById('jjlx_4').value)/(8*djyhbj);
		dhry[4]=(document.getElementById('jjlx_5').value)*(document.getElementById('jjlx_5').value)/(8*djyhbj);
		
	
	if(anniubiaohao==0)//�������������ǵ�һ����ť
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
//���ƶ������ŵĺ���
	function play(s,b1,j1,q1){//����s��һ��button
			
			
			b=b1;
			j=j1;
			q=q1;
		

		   if(ani){	//���ani��Ϊnull����������ǵ�ǰ�Ѿ�����һ������
		      clearInterval(ani);//����������Ҫ�����(ֹͣ����)
		      ani=null;					
		      s.innerHTML='START';//�������ð�ťΪ�����š�
		   }else{
		      ani=setInterval("donghuaxingjin(b,j,q)",20);//���ǽ����ö���Ϊ25fps[֡ÿ��]��40/1000����Ϊ��ʮ���֮һ
		      s.innerHTML="PAUSE";//�������ð�ťΪ����ͣ��
		   }
		}
	function donghuaxingjin(b,j,q){
		

		//��շ������
		cxt1.fillStyle="rgb(50,50,50)";
		cxt1.beginPath();		
		cxt1.fillRect(0,3,500,356);
		cxt1.fill();
		//�ػ���������⵶���Ƿ��Ѿ����ұ߽�
		chedao(djx,djy);
		djx=djx-(j*q/236)*2;
		if(djy>(250-(b*2)))
		{
			djy=djy-0.2;
		}
		
		//������
		jichuangchushi();
		//������
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
		
	
		//��Fcͼ��
		if(djx<400)
		{
			
			if(djx>385)
			{
				//��Fcͼ��
				var suijishu=8.7-((500-djx)/15)+((Math.random())/4);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htfcx,htfcy);
				htfcx=htfcx+(j*q/236)*2.4;
				htfcy=530-((0.9+Math.random()/5)*j*j/(8*djyhbj))*165/0.2;
				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				
				//�������̷������
				cxt1.fillStyle="rgb(50,50,50)";
				cxt1.beginPath();
				cxt1.fillRect(505,5,240,263);
				cxt1.fill();
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
				cxt1.fillText("Ry(mm)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				//cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				//cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				//cxt1.fillText("Pc(Kw)",505,236);
				
				//���Fcʵʱ��ֵ
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
				//cxt1.fillText(j,520,100);
				
				cxt1.fillText(Math.round(10000*(0.9+Math.random()/5)*j*j/(8*djyhbj))/10000,520,100);
				
				//cxt1.fillText(djyhbj,520,120);
				//Pc
				//cxt1.fillText(Math.round((dhfc[anniubiaohao]*q/60000)*suijishu*10)/10,520,260);
				//����λ��
				if(djx<400){
				cxt1.fillText(Math.round(400-djx)/10,520,50);
				}
				cxt1.fill();
				
			}
			else
			{
				//Fcͼ��
				var suijishu=(((Math.random())/5)+0.9);
				cxt1.lineWidth=0.2;
				cxt1.strokeStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.moveTo(htfcx,htfcy);
				htfcx=htfcx+(j*q/236)*2.4;
				htfcy=530-((0.9+Math.random()/5)*j*j/(8*djyhbj))*165/0.2;
				
				cxt1.lineTo(htfcx,htfcy);
				cxt1.stroke();
				
				//�������̷������
				cxt1.fillStyle="rgb(50,50,50)";
				cxt1.beginPath();
				cxt1.fillRect(505,5,240,263);
				cxt1.fill();
				cxt1.fillStyle="rgb(255,255,255)";
				cxt1.beginPath();
				cxt1.font="15px Arial";
				cxt1.fillText("Lathe displacement(mm)",505,20);
				cxt1.fillText("Ry(mm)",505,74);
				cxt1.fillText("ap(mm)",625,74);
				//cxt1.fillText("Fp(N)",505,128);
				cxt1.fillText("f(mm/r)",625,128);
				//cxt1.fillText("Ff(N)",505,182);
				cxt1.fillText("Vc(m/min)",625,182);
				//cxt1.fillText("Pc(Kw)",505,236);
				//���ʵʱ��ֵ
				cxt1.fillStyle="rgb(0,255,0)";
				cxt1.beginPath();
				cxt1.font="10px Arial";
				//ap
				cxt1.fillText(b,640,100);
				//f
				cxt1.fillText(j,640,154);
				//Vc
				cxt1.fillText(q,640,208);
				//Ry
				cxt1.fillText(Math.round(10000*(0.9+Math.random()/5)*j*j/(8*djyhbj))/10000,520,100);
				//����λ��
				if(djx<400){
				cxt1.fillText(Math.round(400-djx)/10,520,50);
				}

				cxt1.fill();
			}
		}


		//��⵶���Ƿ��Ѿ����ұ߽�
		if(djx<0)
		{
			clearInterval(ani);//����������Ҫ�����(ֹͣ����)
			ani=null;
			anniuid.innerHTML ="FINISH";
			djx=440;
			djy=250;//�����λ
			htfcx=10;
			htfcy=530;//fc��ͼ����λ
			htpcx=510;
			htpcy=350;//Pc��ͼ����λ
			//��շ������
			cxt1.fillStyle="rgb(50,50,50)";
			cxt1.beginPath();		
			cxt1.fillRect(0,3,500,356);
			cxt1.fill();
			//�ػ���������⵶���Ƿ��Ѿ����ұ߽�
			chedao(djx,djy);
			//������
			jichuangchushi();
			//������
			bangliao(0,0);
			
		}

	}