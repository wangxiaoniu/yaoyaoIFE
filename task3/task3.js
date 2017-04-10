	



	(function(){
		if(!document.getElementById) return false;
		if(!document.getElementById('student')) return false;
		if(!document.getElementById('un_student')) return false;
		if(!document.getElementById('student_class')) return false;
		if(!document.getElementById('work')) return false;
		var student=document.getElementById('student');
		var un_student=document.getElementById('un_student');
		var student_class=document.getElementById('student_class');
		var work=document.getElementById('work');
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
	})();
