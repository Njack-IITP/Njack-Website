$(document).ready(function(){
	
	//For checking if fotorama has been initialized or not
	var Fnotinit = true;

	// Fotorama API objects
	var $fotoramaDiv, fotorama;

	//Hide the fotorama the close button is clicked on
	$('.closebtn').on('click', function() {
		$("#myNav").fadeOut(200);
	});

	//Show the fotorama gallery when an image is clicked on
	$('.hovereffect').on('click', function() {
		
		$("#myNav").fadeIn(200);

	// Since initializing fotorama as a hidden object breaks it
	// known bug: https://github.com/artpolikarpov/fotorama/issues/406
	// initialization is being done later when it is shown
		if(Fnotinit)
		{
			$("#myNav").fadeIn(200);
			// 1. Initialize fotorama manually.
		    $fotoramaDiv = $('.fotorama').fotorama();

		    // 2. Get the API object.
		    fotorama = $fotoramaDiv.data('fotorama');

		    // 3. Inspect it in console.
		    console.log(fotorama);
		    //set Fnotinit to false since fotorama has been initialized now
		    Fnotinit = false;
		}

		$("#myNav").fadeIn(200);

		//Extract the id of the image and scroll to it
		var id = parseInt(this.getAttribute('id'));
		fotorama.show(id);

	});
});