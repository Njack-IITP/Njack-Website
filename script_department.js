$(document).ready(function(){
	
	var flag=false;
	
	$("#Android").click(function(){
		$("#A_text").toggleClass("hidden");
		$("#WD_text").addClass("hidden");
		$("#C_text").addClass("hidden");
		$("#L_text").addClass("hidden");
		/*if(flag==false)
	    {
			$("#A_text").toggleClass("hidden");
			$("html, body").animate({ scrollTop: 500 }, 800);
			flag=true;}
		else
	    {
			$("html, body").animate({ scrollTop: 0 }, 800);
			$("#A_text").toggleClass("hidden");
			flag=false;}*/
	});
	
	$("#Web_Development").click(function(){
		$("#WD_text").toggleClass("hidden");
		$("#A_text").addClass("hidden");
		$("#C_text").addClass("hidden");
		$("#L_text").addClass("hidden");
	    $("html, body").animate({ scrollTop: 500 }, 800); 
	});
	
	$("#Coding").click(function(){
		$("#C_text").toggleClass("hidden");
		$("#WD_text").addClass("hidden");
		$("#A_text").addClass("hidden");
		$("#L_text").addClass("hidden");
	    $("html, body").animate({ scrollTop: 500 }, 800); 
	});
	
	$("#Linux").click(function(){
		$("#L_text").toggleClass("hidden");
		$("#WD_text").addClass("hidden");
		$("#C_text").addClass("hidden");
		$("#A_text").addClass("hidden");
	    $("html, body").animate({ scrollTop: 500 }, 800); 
	});
	
});
