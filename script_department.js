$(document).ready(function(){
	
	var flag_android=false;
	var flag_webdev=false;
	var flag_coding=false;
	var flag_linux=false;
	var flag_atleastoneopen=false;
	
	var bottom = $(window).height() - $("#Linux").offset().top-$("#Linux").height();
	
	$(".description").css("margin-top",bottom+'px');
	
	$(document).ready(function(){
$("#LinuxCircle").mouseover(function(){
$("#content-linux").fadeIn();
})
$("#LinuxCircle").mouseout(function(){
$("#content-linux").fadeOut();
})
});

$(document).ready(function(){
$("#WebdevCircle").mouseover(function(){
$("#content-webdev").fadeIn();
$("#WebdevCircle").mouseout(function(){
$("#content-webdev").fadeOut();
})
})
});

$(document).ready(function(){
$("#CompCircle").mouseover(function(){
$("#content-comp").fadeIn();
})
$("#CompCircle").mouseout(function(){
$("#content-comp").fadeOut();
})
});

$(document).ready(function(){
$("#AndroidCircle").mouseover(function(){
$("#content-android").fadeIn();
})
$("#AndroidCircle").mouseout(function(){
$("#content-android").fadeOut();
})
});
	
	$("#Android").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500,function(){});
			flag_webdev=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_android==false)
	    {	
	        $("#A_text").fadeIn(500);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#A_text").offset().top }, 900);
			
			flag_android=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-50}, 900, function(){
			$("#A_text").fadeOut(500);
			flag_android=false;
			flag_atleastoneopen=false;
			});			
		}
	});
	
	$("#Web_Development").click(function(){
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
			flag_android=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_webdev==false)
	    {	
	        $("#WD_text").fadeIn(500);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#WD_text").offset().top }, 900);
			
			flag_webdev=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-50}, 900, function(){
			$("#WD_text").fadeOut(500);
			flag_webdev=false;
			flag_atleastoneopen=false;
			});			
		} 
	});
	
	$("#Coding").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500);
			flag_webdev=false;
		}
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
            flag_android=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_coding==false)
	    {	
	        $("#C_text").fadeIn(500);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#C_text").offset().top }, 900);
			
			flag_coding=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-50}, 900, function(){
			$("#C_text").fadeOut(500);
			flag_coding=false;
			flag_atleastoneopen=false;
			});			
		} 
	});
	
	$("#Linux").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500);
			flag_webdev=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
             flag_android=false;			
		}
		
		if(flag_linux==false)
	    {	
	        $("#L_text").fadeIn(500);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#L_text").offset().top }, 900);
			
			flag_atleastoneopen=true;
			flag_linux=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-50}, 900, function(){
			$("#L_text").fadeOut(500);
			flag_linux=false;
			flag_atleastoneopen=false;
			});			
		}
	});
	
});
