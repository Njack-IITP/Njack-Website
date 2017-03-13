$(document).ready(function(){
	
	if($(window).width()<770)
	{
		$(".tabs").css("width","93vw");
		$(".tabs").css("display","block");
		$(".tabs").css("margin","auto");
		$(".tabs").css("marginBottom","5px");
		$(".individualProjects").css("display","block");
		$(".individualProjects").css("width","90vw");
	}
	
	if($(window).width()<=1150)
	{
		$(".tabs").css("margin-right","0vw");
	}
	
	$(window).resize(function(){
		
		if($(window).width()<770)
		{
			$(".tabs").css("width","93vw");
			$(".tabs").css("display","block");
			$(".tabs").css("margin","auto");
			$(".tabs").css("marginBottom","5px");
			$(".individualProjects").css("display","block");
			$(".individualProjects").css("width","90vw");
		}			
		else if($(window).width()<=1150)
		{
			$(".tabs").css("width","23vw");
			$(".tabs").css("display","inline-block");
			$(".tabs").css("margin-right","0vw");
			$(".individualProjects").css("display","inline-block");
			$(".individualProjects").css("width","27vw");
		}			
		else
		{
			$(".tabs").css("width","23vw");
			$(".tabs").css("margin-right","1vw");			
			$(".tabs").css("display","inline-block");
			$(".individualProjects").css("display","inline-block");		
			$(".individualProjects").css("width","27vw");	
		}
	});
	
	var flag_android=false;
	var flag_webdev=false;
	var flag_coding=false;
	var flag_linux=false;
	var flag_atleastoneopen=false;

	var bottom = 20;	
	
	$(".description").css("margin-top",bottom+'px');
	
	$("#LinuxCircle").mouseover(function(){
	$("#initial").fadeOut();
	$("#content-linux").delay(800).fadeIn();
	});

	$("#LinuxCircle").mouseout(function(){
	$("#content-linux").fadeOut();
	$("#initial").delay(800).fadeIn();
	});



	$("#WebdevCircle").mouseover(function(){
	$("#initial").fadeOut();	
	$("#content-webdev").delay(800).fadeIn();
	});

	$("#WebdevCircle").mouseout(function(){
	$("#content-webdev").fadeOut();
	$("#initial").delay(800).fadeIn();
	});



	$("#CompCircle").mouseover(function(){
	$("#initial").fadeOut();	
	$("#content-comp").delay(800).fadeIn();
	});

	$("#CompCircle").mouseout(function(){
	$("#content-comp").fadeOut();
	$("#initial").delay(800).fadeIn();
	});


	$("#AndroidCircle").mouseover(function(){
	$("#initial").fadeOut();
	$("#content-android").delay(800).fadeIn();
	});
	
	$("#AndroidCircle").mouseout(function(){
	$("#content-android").fadeOut();
	$("#initial").delay(800).fadeIn();
	});
	
	var scrollVar= $(window).height() * 0.31;;
	
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
	        $("#A_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false || $(window).width()<770)
			$("html, body").animate({ scrollTop: $("#A_text").offset().top }, 900);
			
			flag_android=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#img").offset().top+scrollVar}, 1000, function(){
			$( "#A_text" ).fadeTo( 0 , 0.0,function(){$( "#A_text" ).fadeOut(0);});
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
	        $("#WD_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false || $(window).width()<770)
			$("html, body").animate({ scrollTop: $("#WD_text").offset().top }, 900);
			
			flag_webdev=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#img").offset().top+scrollVar}, 900, function(){
			$("#WD_text").fadeTo(0,0.0,function(){$( "#WD_text" ).fadeOut(0);});
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
	        $("#C_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false || $(window).width()<770)
			$("html, body").animate({ scrollTop: $("#C_text").offset().top }, 900);
			
			flag_coding=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#img").offset().top+scrollVar}, 900, function(){
			$("#C_text").fadeTo(0,0.0,function(){$( "#C_text" ).fadeOut(0);});
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
	        $("#L_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false || $(window).width()<770)
			$("html, body").animate({ scrollTop: $("#L_text").offset().top }, 900);
			
			flag_atleastoneopen=true;
			flag_linux=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#img").offset().top+scrollVar}, 900, function(){
			$("#L_text").fadeTo(0,0.0,function(){$( "#L_text" ).fadeOut(0);});
			flag_linux=false;
			flag_atleastoneopen=false;
			});			
		}
	});
	
});
