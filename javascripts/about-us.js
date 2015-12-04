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
