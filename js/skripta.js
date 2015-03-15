var i = 0;

function postStatus(){
	$('#newDiv').prepend('<div id="statusBox'+i+'"><div class="statusId"><img src="img/ada.jpg" class="img-circle"></img><p>Name Surname</p></div><div class="status">'
					+$('#input').val()
					+'<div class="statusComment"><input type="submit" id="comment" value="comment" style="float: right"/></div></div></div><div id="content'+i+'"></div>');
					i++;
		
}

function resetArea(){
	document.getElementById("input").value = "";
}

function checkPasswordMatch() {
    var password = $j("#inputPassword").val();
    var confirmPassword = $j("#inputPasswordConfirm").val();

    if (password != confirmPassword)
        $j("#CheckPasswordMatch").html("Passwords do not match!");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}

function imageChange(){
	$j("p#img-change").dropzone({ url: "/file/post" });
}

  
   function upload() {
    document.getElementById('my_file').click();	
	document.getElementById("image").src="../"+this.files[0];
	}
	



//React classes
