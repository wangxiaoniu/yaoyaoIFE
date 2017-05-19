

//扩浏览器添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}
var btn =document.getElementById('submit');

btn.addEventListener('click',toChange,false);


//小方块运动函数
function toChange(){
	var box= document.getElementById('box');
	var value=document.getElementsByClassName('text')[0].value;
	/*if(value=='TUN LEF'){
		box.className='tun-left';
	}else if(value=='TUN RIG'){
		box.className='tun-right';
	}*/
	switch(value){
		case 'TUN LEF':
		box.className='tun-left';
		break;
		case 'TUN RIG':
		box.className='tun-right';
	}

}