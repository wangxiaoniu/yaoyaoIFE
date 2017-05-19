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

}
addEvent(btn,'click',function(){
	toChange(text);
});