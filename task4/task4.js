/*案例：https://tobiaschan.github.io/BaiduJs/Btask4/Btask4.html*/

//扩浏览器添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}
var btn =document.getElementById('submit');
var box= document.getElementById('box');
var text=document.getElementById('text');
var defaultDeg=0;//初始角度
var count=1;//初始化计数 

//获取外链样式
function getStyle(sname){
	for(var i=0;i<document.styleSheets.length;i++){
		var rules;
		if(document.styleSheets[i].cssRules){//W3C

			rules=document.styleSheets[i].cssRules;
		}else{
			rules=document.styleSheets[i].rules;
		}
		for(var j=0;j<rules.length;i++){
			if(rules[j].selectorText==sname){
				return rules[j].style;
			}
		}

	}
}


function insertRule(sheet,selectorText,cssText,position){
	//W3C
	if(sheet.insertRule){
		sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}else if(sheet.addRule){
		sheet.addRule(selectorText,cssText,position);
	}
}
//小方块运动函数
function toChange(e){
	
	if(e.value=='TUN LEF'){
		if(count==1){
			count=4;
		}else{
			count=(count-1)%4;
		}
		box.style.transform = "rotate("+(defaultDeg-90)+"deg)";
		//getStyle(box,transform)="rotate("+(defaultDeg-90)+"deg)";
		defaultDeg=-90+defaultDeg;//递增角度值
		 console.log(count);
	}
	if(e.value=="TUN RIG"){
        if(count==3) {
        	count=4;
        } else {
        	count=(count+1)%4;
        }
        box.style.transform="rotate("+(defaultDeg+90)+"deg)";
        defaultDeg=90+defaultDeg;
        console.log(count);
    }
	if(e.value=='TUN BAC'){
		if(count==2){
			count=4;
		}else{
			count=(count+2)%4;
		}
		box.style.transform = "rotate("+(defaultDeg+180)+"deg)";
		defaultDeg=180+defaultDeg;//递增角度值
		 console.log(count);
	}
	if(e.value=='GO'){
		Go();
	}



}
function Go(){
	box.style.backgroundColor='yellow';
	if(!box.style.left){
		box.style.left="0px";
	}
	if(!box.style.top){
		box.style.top="0px";
	}
	var final_x=500,final_y=500;
	var xpos=parseInt(box.style.left);
	var xpos=parseInt(box.style.top);
	
	if((final_x-xpos)>0){
		if(count=1){
			alert('1');
		}
		else if(count=2){
			alert('2');
		}
		else if(count=3){
			alert('3');
		}
		else if(count=4){
			alert('4');
		}
	}
}
addEvent(btn,'click',function(){
	toChange(text);
});