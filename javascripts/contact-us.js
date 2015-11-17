$(function() {
	// Define JQuery variables based on DOM elements
	var $emailEl = $('#user-email');
	var $emailHint = $('#email-feedback');
	var $messageEl = $('#user-message');
	var $messageHint = $('#message-feedback');
	var $contactForm = $('#contact-form');
	var lengthReq = 5;

	// Function to check if the email is valid; use Javascript function that takes an email as a parameter
	function checkEmail(email) {
	 	var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	 	return emailFilter.test(email);
	}

	// When user clicks out of email, call the checkEmail function and return hint text
	$emailEl.on('blur', function(){
		//$emailHint.append('test to see if this works');
		// $emailHint.text('');
		var email = $emailEl.val();
		// console.log(email);
		
		// if (checkEmail(email)){
		// 	$emailHint.text('');
		// }

		$emailHint.text('');  // Set the hint text to blank to avoid duplicate messages
		if (checkEmail(email)){
			$emailHint.append('');
		} else{
			$emailHint.append('Please enter a valid email address');
		}
	})

	// Function to confirm the message is longer than a given number of characters
	function checkMessageLength(message, length) {
		return message.length > length; 
	}


	// When user clicks out of message, call checkMessageLength function to confirm message is long enough

	$messageEl.on('blur', function(){
		$messageHint.text(''); // Set hint to blank to avoid dupe messages
		var message = $messageEl.val();
		if (checkMessageLength(message, lengthReq)){
			$messageHint.append('');
		} else{
			$messageHint.append('Please enter a longer messages');
		}
	})

	// Prevent form submission if errors are triggered
	$contactForm.on('submit', function(event){
		if($emailHint.text() || $messageHint.text()){
			event.preventDefault();
			$contactForm.append('<span>You need to complete all fields</span>'); //Add form-level error message
			$('#contact-form span').attr('class', 'error-message'); // turn form-level message into relevant css class
		}
	})


})



// Function to check the body message if it's longer than 5 characters (or some variable)


// var elEmail, elMessage, elSubmit, elEmailFeedback, elMessageFeedback;

// // Set variables to relevant DOM elements
// elEmail = document.getElementById('user-email');
// elMessage = document.getElementById('user-message');
// elForm = document.getElementById('contact-form');
// elEmailFeedback = document.getElementById('email-feedback');
// elMessageFeedback = document.getElementById('message-feedback');


// // Function to check the email if it's valid
// function checkEmail() {
// 	var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	

// 	if (!emailFilter.test(elEmail.value)){
// 		elEmailFeedback.textContent='Please enter a valid email address';
// 	}
// 	else {
// 		elEmailFeedback.textContent='';
// 	}
// }

// // Function to check the message if it's longer than five characters
// function checkMessage() {
	

// 	if(elMessage.value.length < 5){
// 		elMessageFeedback.textContent='Please enter a message';
// 	}
// 	else {
// 		elMessageFeedback.textContent='';
// 	}
// }


// // Function to check completed email address and a message
// function checkComplete(event) {
// 	checkEmail();
// 	checkMessage();
// 	var elFormFeedback = document.getElementById('form-feedback');
	
// 	if (elMessageFeedback.textContent || elEmailFeedback.textContent) { // Check if either email or message error shows
// 		event.preventDefault();
// 		elFormFeedback.innerHTML = 'You have not filled out all fields';

// 	} else {
// 		elFormFeedback.innerHTML = 'Nice, you submitted';
// 	}
// }

// elEmail.addEventListener('blur', checkEmail, false); // Call check email after user leaves email field
// elMessage.addEventListener('blur', checkMessage, false); // Call checkMessage  after user leaves message field
// elForm.addEventListener('submit', checkComplete, false); // Call checkComplete if user hits 'submit' button