

	var Name=document.getElementById('name');
	var password=document.getElementById('password');
	var password2=document.getElementById('password2');
	var box=document.getElementById('box');
	var verfiy_btn=document.getElementById('verfiy');
	var pId=document.getElementById('nametext');
	var passP=document.getElementById('password_text');
	var passP2=document.getElementById('password2_text');
	var email=document.getElementById('email');
	var email_text=document.getElementById('email_text');
	var phone=document.getElementById('phone');
	var phone_text=document.getElementById('phone_text');
	var submit_btn=document.getElementById('submit');

	//获取字符串长度（汉字算两个字符，字母数字算一个）
	///[^\x00-\xff]/ig其中[^\x00-\xff]表示非双字节字符，i表示忽略大小写，g表示全局匹配
    function getByteLen(val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    }
    //验证名称
    var arr=['必填，长度应为4~16个字符','姓名不能为空','名称格式正确'];
	//验证名称输入框内容的合法性
	function myTest(){

		//判断是否为空为空
		if(Name.value==""){
			pId.innerHTML=arr[1];
			pId.className="red";	
			Name.style.borderColor="#f00";
			return false;	
		}
		//判断字符字数
		else if(getByteLen(Name.value)<4 || getByteLen(Name.value)>16){
			pId.innerHTML="长度为："+getByteLen(Name.value)+"，"+arr[0];
			pId.className="gray";
			Name.style.borderColor='#A9A9A9';
			return false;	
		}
		else{	
			pId.innerHTML=arr[2];
			pId.className="green";
			Name.style.borderColor='#69B956';
			return true;	
		}
	}

	 function onMessage(){
    	pId.innerHTML=arr[0];
    	Name.style.borderColor="#62ADEE";
    	pId.className="gray";
    }

    //验证密码
    function passwordVerfiy(){

		//判断是否为空为空
		if(password.value==""){
			passP.innerHTML='密码不能为空';
			passP.className="red";	
			password.style.borderColor="#f00";
			return false;	
		}
		//判断字符字数
		else if(getByteLen(password.value)<8){
			passP.innerHTML="长度为："+getByteLen(password.value)+"，"+"至少输入8个字符";
			passP.className="gray";
			password.style.borderColor='#A9A9A9';	
			return false;
		}
		else{	
			passP.innerHTML="密码可用";
			passP.className="green";
			password.style.borderColor='#69B956';
			return true;	
		}
    }
     //验证密码 获取焦点时
    function onPassword(){
    	passP.innerHTML='输入8位数密码，一个汉字为两位数';
    	password.style.borderColor="#62ADEE";
    	passP.className="gray";
    }

    //密码二次确认
    function password2Verfiy(){

		//判断是否为空为空
		if(password2.value==""){
			passP2.innerHTML='必填，不能为空';
			passP2.className="red";	
			password2.style.borderColor="#f00";
			return false;
		}
		else if(password2.value != password.value){
			passP2.innerHTML="密码输入不一致";
			passP2.className="gray";
			password2.style.borderColor='#A9A9A9';
			return false;	
		}
		else{	
			passP2.innerHTML="密码输入一致";
			passP2.className="green";
			password2.style.borderColor='#69B956';
			return true;	
		}
    }
    //密码二次确认 获取焦点时
    function onPassword2(){
    	passP2.innerHTML='再次输入相同密码';
    	password2.style.borderColor="#62ADEE";
    	passP2.className="gray";
    }

    //邮箱

   function validate_email2(field,alerttxt){
		with (field)
		{
			style.borderColor="#62ADEE";
			email_text.className="gray";
			email_text.innerHTML=alerttxt;
		}
	}
	//验证输入合法性
	function validate_email(){
		
		apos=email.value.indexOf("@")
		dotpos=email.value.lastIndexOf(".")
		if(email.value == null || email.value == ""){
			email.style.borderColor="#f00";
		  	email_text.className="red";
		  	email_text.innerHTML='不能为空!';
		  	return false;
		}
		else if (apos<1||dotpos-apos<2) 
		  {
		  	email.style.borderColor="#62ADEE";
		  	email_text.className="gray";
		  	email_text.innerHTML="格式不正确!";
		  	return false;
		  }
		else {
			email.style.borderColor='#69B956';
		  	email_text.className="green";
		  	email_text.innerHTML="邮箱可用";
		  	return true;
		}
		
	}

	//邮箱获取焦点时
	function onValidate_form(){
		
		if (validate_email2(email,"必填输入邮箱!")==false)
		  {

		  	{email.focus();return false}
		  }
	}

	//手机
	var phoneArr="格式不正确!不能为空!邮箱可用";
	function phoneVerfiy(){
		var reg=/^1[3|4|5|8][0-9]\d{8}$/g;
		if(phone.value==null||phone.value==""){
			phone.style.borderColor="#f00";
			phone_text.className="red";
			phone_text.innerHTML="必填，不能为空";
			return false;
		}

		else if( getByteLen(phone.value) != 11  && !(reg.test(phone.value))){
			phone.style.borderColor='#A9A9A9';
			phone_text.className="gray";
			phone_text.innerHTML="不是完整的11位手机号或输入的不是数字";
			return false;
		}
		else{
			phone.style.borderColor='#69B956';	
			phone_text.className="green";
			phone_text.innerHTML="格式正确";
			return true;
		}
	}
	//手机 获取焦点时
	function onPhone(){
		phone.style.borderColor="#62ADEE";
		phone_text.className="gray";
		phone_text.innerHTML="必填，不能为空";
	

	}
//提交
 function verfiy_form(){
 	phoneVerfiy();
 	myTest();
 	password2Verfiy();
 	passwordVerfiy();
 	validate_email();
 	if( phoneVerfiy() != 1|| myTest()!=1 || password2Verfiy() != 1 || passwordVerfiy() != 1 ||validate_email()!=1  ){
 		alert("输入有误，请重新检查");
 		return false;
 	}else{
 		alert('提交成功');
 	}
 }

