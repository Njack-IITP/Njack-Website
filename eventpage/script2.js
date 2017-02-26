$(document).ready(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	//button.addEventListener('click', handler, false);

	//function handler(){
	 $("#cn-button").click(function(){
	  if(!open){
	    this.innerHTML = "Close";
	      $("#cn-overlay").addClass("on-overlay");
	     $("#cn-wrapper").addClass("opened-nav");
	     
	    //classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
	   $("#cn-overlay").removeClass("on-overlay");
		$( "#cn-wrapper" ).removeClass( "opened-nav" );
	  }
	  open = !open;
	});
	function closeWrapper(){
		//classie.remove(wrapper, 'opened-nav');
	}

});
