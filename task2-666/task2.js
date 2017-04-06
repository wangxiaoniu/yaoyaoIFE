

	var Name=document.getElementById('name');
	var password=document.getElementById('password');
	var password2=document.getElementById('password2');
	var verfiy_btn=document.getElementById('verfiy');
	var email=document.getElementById('email');
	var phone=document.getElementById('phone');
	var submit_btn=document.getElementById('submit');
	//document.querySelector("p")获取第一个p选择器，如果想要获取所有就用document.querySelectorAll
	//这里获取所有的input
	var form_input=document.querySelectorAll('input');
	//获取字符串长度（汉字算两个字符，字母数字算一个）
	///[^\x00-\xff]/ig其中[^\x00-\xff]表示非双字节字符，i表示忽略大小写，g表示全局匹配
    function getByteLen(str) {
    	//简单匹配中文方法: /[^\u0000-\u00FF]/ (匹配非单字节字符 ) 
    	//u0000-u00ff.包含unicode单字节编码（ 0-255编码）包含基本控制字符和拉丁文字母。 
    	//采用该否定表达式，粗略判断是否含有中文。
    	//来源：http://blog.csdn.net/dean19900504/article/details/9126523
         return str.replace(/[^\u0000-\u00ff]/g, "AA").length;  
    }
    //获得焦点提示文本
    var arr=[
	    '必填，长度应为4~16个字符',
	    '请输入密码',
	    '再次输入相同密码',
	    '请输入邮箱',
	    '请输入手机',
    ];
    //input样式改变及添加提示文本
    function styleChange(id,str,bor_color,text_color){
    	var focus_iput=document.getElementById(id);
    	focus_iput.style.borderColor=bor_color;
        if (focus_iput.parentNode.children.length == 3) {
            focus_iput.parentNode.removeChild(focus_iput.parentNode.lastChild);
        };
    	var p=document.createElement('p');
    	var p_text=document.createTextNode(str);
    	p.appendChild(p_text);
    	focus_iput.parentNode.appendChild(p);
    	p.style.color=text_color;
    }
    //获取焦点
    function addFocus() {
        for (var i = 0; i < form_input.length; i++) {
            (function(i) { //闭包，这个i为形参
                var id = form_input[i].getAttribute("id");
                form_input[i].onfocus = function() {
                    styleChange(id, arr[i], "#62ADEE", "#A9A9A9");    
                }
            })(i); //这个i是for中的i作为参数
        }
    }

    window.onload=addFocus();
	//验证名称输入框内容的合法性
	function nameValidate(){
		//判断是否为空为空
		var id = form_input[0].getAttribute("id");
		if(form_input[0].value==""){
			styleChange(id, "不能为空", "#f00", "#f00");   	
			return false;	
		}
		//判断字符字数
		else if(getByteLen(form_input[0].value)<4 || getByteLen(form_input[0].value)>16){
			styleChange(id, "输入错误，长度应为4-16位", "#A9A9A9", "#A9A9A9");
			return false;	
		}
		else{	
			styleChange(id, "格式正确", "#69B956", "#69B956");
			return true;	
		}
	
	}

	Name.onblur=nameValidate;


    //验证密码
    function passwordVerfiy(){
    	
		var id = form_input[1].getAttribute("id");
			//判断是否为空为空
		if(form_input[1].value==""){
			styleChange(id, "密码不能为空", "#f00", "#f00");
			return false;	
		}
		//判断字符字数
		else if(getByteLen(form_input[1].value)<8){
			styleChange(id, "至少输入8个字符", "#A9A9A9", "#A9A9A9");
			return false;
		}
		else{	
			styleChange(id, "密码可用", "#69B956", "#69B956");
			return true;	
		}

    }
    password.onblur=passwordVerfiy;
    //密码二次确认
    function password2Verfiy(){
    	var id=form_input[2].getAttribute('id');
		//判断是否为空为空
		if(form_input[2].value==""){
			styleChange(id, "不能为空", "#f00", "#f00");
			return false;
		}
		else if(form_input[2].value != form_input[1].value){
			styleChange(id, "密码输入不一致", "#A9A9A9", "#A9A9A9");
			return false;	
		}
		else{	
			styleChange(id, "密码输入一致", "#69B956", "#69B956");
			return true;	
		}
    }

    password2.onblur=password2Verfiy;

    //邮箱

	function validate_email(){
		var id=form_input[3].getAttribute('id');
		if(form_input[3].value == null || form_input[3].value == ""){
			styleChange(id, "不能为空", "#f00", "#f00");
		  	return false;
		}
		else if (!(/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(form_input[3].value))) 
		  {
		  	styleChange(id, "格式不正确!", "#62ADEE", "#A9A9A9");
		  	return false;
		  }
		else {
			styleChange(id, "邮箱可用", "#69B956", "#69B956");
		  	return true;
		}
		
	}

	email.onblur=validate_email;

	

	//手机
	function phoneVerfiy(){
		var id=form_input[4].getAttribute('id');
		var reg=/^1[3|4|5|8][0-9]\d{8}$/g;
		if(form_input[4].value==null||form_input[4].value==""){
			styleChange(id, "必填，不能为空", "#f00", "#f00");
			return false;
		}

		else if( getByteLen(form_input[4].value) != 11  && !(reg.test(form_input[4].value))){
			styleChange(id, "不是完整的11位手机号或输入的不是数字!", "#62ADEE", "#A9A9A9");
			return false;
		}
		else{
			styleChange(id, "格式正确", "#69B956", "#69B956");
			return true;
		}
	}
	phone.onblur=phoneVerfiy;
//提交
  submit_btn.onclick = function() {
 	phoneVerfiy();
 	nameValidate();
 	password2Verfiy();
 	passwordVerfiy();
 	validate_email();
 	if( phoneVerfiy() != 1|| nameValidate()!=1 || password2Verfiy() != 1 || passwordVerfiy() != 1 ||validate_email()!=1  ){
 		alert("输入有误，请重新检查");
 		return false;
 	}
 	else{
 		alert('提交成功');
 	}
 }

