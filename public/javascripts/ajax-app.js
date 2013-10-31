//***************
// CLIENT SIDE JS
//***************

$(function(){


	console.log("READY!")


	$("#signup-form").submit(function(e){
		e.preventDefault()
		// this console.log will display on the console (inspect element)
		console.log('made it here');


		//make a post request to our /signup endpoint
		$.post('/submitform', $(this).serialize(), function(data){
			// this console.log will display on the console (inspect element)
			console.log('made it here also');

			//if there was an error, show the error
			if(data.error){
				// add the error text to the message div
				$('#message').text(data.error);
			}

			// if the request returned a success message, display it.
			if(data.success){
				// add the error text to the message div
				$('#message').text(data.success);
			}
			
		});

	});

});