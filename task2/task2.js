

	var Name=document.getElementById('name');
	var box=document.getElementById('box');
	var verfiy_btn=document.getElementById('verfiy');
	var pId=document.getElementById('nametext');
	




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
		}
		//判断字符字数
		else if(getByteLen(Name.value)<4 || getByteLen(Name.value)>16){
			pId.innerHTML="长度为："+getByteLen(Name.value)+"，"+arr[0];
			pId.className="gray";
			Name.style.borderColor='#A9A9A9';	
		}
		else{	
			pId.innerHTML=arr[2];
			pId.className="green";
			Name.style.borderColor='#69B956';	
		}
	}

	 function onMessage(){
    	pId.innerHTML=arr[0];
    	Name.style.borderColor="#ccc";
    	pId.className="gray";
    }

    //验证密码
    function passwordVerfiy(){

    }





