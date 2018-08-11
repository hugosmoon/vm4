
function weizeng1(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>=1&&qxsd<6)
	qxsd=qxsd*1+0.1;
	document.getElementById(x).value=(Math.round(qxsd*10))/10;
	document.getElementById(y).value=(Math.round(qxsd*10))/10;
}
function weijian1(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>1&&qxsd<=6)
	qxsd=qxsd*1-0.1;
	document.getElementById(x).value=(Math.round(qxsd*10))/10;
	document.getElementById(y).value=(Math.round(qxsd*10))/10;
}
function weizeng2(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>=0.1&&qxsd<0.6)
	qxsd=qxsd*1+0.01;
	document.getElementById(x).value=(Math.round(qxsd*100))/100;
	document.getElementById(y).value=(Math.round(qxsd*100))/100;
}
function weijian2(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>0.1&&qxsd<=0.6)
	qxsd=qxsd*1-0.01;
	document.getElementById(x).value=(Math.round(qxsd*100))/100;
	document.getElementById(y).value=(Math.round(qxsd*100))/100;
}
function weizeng3(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>=0&&qxsd<280)
	qxsd=qxsd*1+0.2;
	document.getElementById(x).value=(Math.round(qxsd*10))/10;
	document.getElementById(y).value=(Math.round(qxsd*10))/10;
}
function weijian3(x,y)
{
	var qxsd=document.getElementById(x).value;
	if(qxsd>0&&qxsd<=280)
	qxsd=qxsd*1-0.2;
	document.getElementById(x).value=(Math.round(qxsd*10))/10;
	document.getElementById(y).value=(Math.round(qxsd*10))/10;
}