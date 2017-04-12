//加载函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != "function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//切换在校非在校生
function inputTab(){
	if(!document.getElementById) return false;
	if(!document.getElementById('student')) return false;
	if(!document.getElementById('un_student')) return false;
	if(!document.getElementById('student_class')) return false;
	if(!document.getElementById('work')) return false;
	var student=document.getElementById('student');
	var un_student=document.getElementById('un_student');
	var student_class=document.getElementById('student_class');
	var work=document.getElementById('work');
	student.setAttribute('checked',"checked");
	work.style.display="none";
		
	student.onclick=function() {
		work.style.display="none";
		student_class.style.display="none";
		student_class.style.display="block";
	}
	un_student.onclick=function(){
		work.style.display="none";
		student_class.style.display="none";
		work.style.display="block";
	}	
}
//选择列表
function tabOption(){
	var select_city=document.getElementById('select_city');
	var select_school=document.getElementById('select_school');
	var arr=['北京','海南','上海'];
	var array=new Array();
	 array[1]=new Array('北京大学','清华大学','北京理工大学');
	 array[2]=new Array('海南大学','海南师范大学','琼州学院','三亚学院');
	 array[3]=new Array('复旦大学','上海交通大学');
	 //往第一个选择列表添加选项
	for(var j=0;j<arr.length;j++){
		var op1=new Option();
		op1.text=arr[j];
		op1.value=op1.text;
		select_city.add(op1);	
	}
	//第一个选择列表值改变时触发事件
	select_city.onchange=function(){
		//序号，取当前选中选项的序号，从1开始而不是从0；
		var index=select_city.selectedIndex; 
		if(select_city.value=="sz")
        {   
			array[index]=['-- 请选择 --'];
        }
        //每次改变都先把第二个联动的选择选项个数设置为0，否则会叠加之前的选项；
        select_school.length=0;
        //添加对应的数组，成为第二个选择列表的选项
		for(var i=0;i<array[index].length;i++){
			var op2=new Option();
			op2.text=array[index][i];
			op2.value=op2.text;
			select_school.add(op2);
		}
	}
}	
addLoadEvent(inputTab);
addLoadEvent(tabOption);
