/*案例：https://tobiaschan.github.io/BaiduJs/Btask4/Btask4.html

参考资料：
http://www.zhangxinxu.com/wordpress/2011/03/ie%E7%9F%A9%E9%98%B5%E6%BB%A4%E9%95%9Cmatrix%E4%B8%8B%E6%97%8B%E8%BD%AC%E4%B8%8E%E7%BC%A9%E6%94%BE%E5%8F%8A%E7%BB%93%E5%90%88transform%E7%9A%84%E6%8B%93%E5%B1%95/
*/

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
//查找外链样式
function getstyle(sname) { 
    for (var i=0;i< document.styleSheets.length;i++) { 
        var rules; 
        if (document.styleSheets[i].cssRules) { 
            rules = document.styleSheets[i].cssRules; 
        } else { 
            rules = document.styleSheets[i].rules; 
        } 
        for (var j=0;j< rules.length;j++) { 
            if (rules[j].selectorText == sname) { 
                return rules[j].style; 
            } 
        } 
    } 
}

//小方块旋转运动函数
function toChange(e){
	
	if(e.value=='TUN LEF'){
		if(count==1){
			count=4;

		}else{
			count=(count-1)%4;
		}
		getstyle("#box").transform = "rotate("+(defaultDeg-90)+"deg)";
		
		defaultDeg=-90+defaultDeg;//递增角度值
		 //console.log(count);
	}
	if(e.value=="TUN RIG"){
        if(count==3) {
        	count=4;
        } else {
        	count=(count+1)%4;
        }
        box.style.transform="rotate("+(defaultDeg+90)+"deg)";
        defaultDeg=90+defaultDeg;
        //console.log(count);
    }
	if(e.value=='TUN BAC'){
		if(count==2){
			count=4;
		}else{
			count=(count+2)%4;
		}
		box.style.transform = "rotate("+(defaultDeg+180)+"deg)";
		defaultDeg=180+defaultDeg;//递增角度值
		//console.log(count);
	}
	if(e.value=='GO'){
		Go();
	}
}
//判断移动方向及实现移动函数
function Go(){
	var final_x=500,final_y=500;
	var xpos=parseInt(getstyle("#box").left);
	var ypos=parseInt(getstyle("#box").top);
	var dist=50;
	if(count==1){
		ypos=ypos-dist;
		if(ypos>=0){
			getstyle("#box").top=ypos+'px';
			//console.log(ypos);
		}
	}
	if(count==2){
		xpos=xpos+dist;
		if(xpos<=450){
			getstyle("#box").left=xpos+'px';
			//console.log(xpos);
		}
	}
	if(count==3){
		ypos=ypos+dist;
		if(ypos<=(final_x-dist)){
			getstyle("#box").top=ypos+'px';
			//console.log(ypos);
		}
	}
	else if(count==4){
		xpos=xpos-dist;
		if(xpos>=0){
			getstyle("#box").left=xpos+'px';
			//console.log(xpos);
		}
	}
	
}

addEvent(btn,'click',function(){
	toChange(text);
});