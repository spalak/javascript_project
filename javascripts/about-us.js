// Create a function to highlight an image using JQuery
$(function() {
	var $divPictures = $('div.flex-item') // Create a variable to hold the list items on the page
	$divPictures.on('mouseenter click', function(event){ //create a function that looks for clicks or mouseenter
		event.preventDefault(); // prevent default click from sending to a picture
		var $this = $(this);
		$this.addClass("highlighted-image"); // change class if event occurs
		$divClass = $this.attr('class').split(" ")[0]; // create a variable to store only the first class of the parent element
		$this.children('p').append('<span> ('+$divClass+') </span>'); // add a span for the parent element if it's the correct item
	});

	$divPictures.on('mouseleave', function(){ // create a function to remove class and span after mouse leaves
		$(this).removeClass("highlighted-image");
		$(this).children('p').children('span').remove();

	});

});



// The code below is about accomplishing with vanilla Javascript what jquery acheives above.  What a difference!

// // Function to get target of an event
// function getTarget(e) {
// 	if (!e) {
// 		e = window.event; // if using IE, use older syntax to grab event
// 	}
// 	return e.target || e.srcElement;
// }

// Create function to highlight an image with the given target of an event
// function highlightImage(e) {
// 	var target;
// 	target = getTarget(e);  //Get the item clicked link
// 	if (target.tagName.toLowerCase() === "img"){
// 		target.className = "highlighted-image";
	
// 		if (e.preventDefault) {  // if preventDefault works
// 			e.preventDefault();		// prevent the default click event from happening
// 		} else {								// otherwise, use old IE version
// 			e.returnValue = false;
// 		}	
// 	}
	
// }







// var el = document.getElementById('workers');
// if (el.addEventListener) { 													//Check if user has modern browser, call event listener
// 	el.addEventListener("click", function(e){
// 											highlightImage(e); }, false);
// } else { 																						//Use old IE model
// 	el.attachEvent('onclick', function(e){
// 									highlightImage(e); })
// }

