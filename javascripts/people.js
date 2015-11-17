// This script is to test that I can add data using Ajax and a seperate JSON file - in this case, 
// bio info about favorite food and toy for specific users.

personId = 'Cooper';
var xhr = new XMLHttpRequest(); // Create XML object

// When ready state changes, perform a check to make sure the response is a 200 request, then proceed
xhr.onload = function() {
	if(xhr.status === 200) { 
		// document.getElementById('factsheet').innerHTML = '<h1> test if this works </h1>';
		responseObject = JSON.parse(xhr.responseText);
		
		
		

		// Build up a string with new content based on the data
		for (var i=0; i<responseObject.characteristics.length; i++) {
			var personEl = document.getElementById(responseObject.characteristics[i].person); //Get the person element that matches the JSON characteristic person
			var bioEl = document.createElement('div'); // Create a new Div element
			var newContent = '';
			newContent += '<ul>';
			newContent += '<li>Favorite food: '+responseObject.characteristics[i].food+'</li>';
			newContent += '<li>Favorite toy: '+responseObject.characteristics[i].toy+'</li>';
			newContent += '</ul>';

			bioEl.innerHTML = newContent;
			personEl.appendChild(bioEl);
			// var bioText = document.createTextNode(responseObject.characteristics[i].food);
			// bioEl.appendChild(bioText);
			// personEl.appendChild(bioEl);


			// newContent += '<div class="characteristics">';

		}

		// Update the page with new content that was just created
		// document.getElementById('factsheet').innerHTML = newContent;
	}
};



// Prepare the request
xhr.open('GET', 'data/people.json', true);

// Send the request
xhr.send(null);