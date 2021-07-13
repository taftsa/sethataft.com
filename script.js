var bodyText = {
	About: "This will be the About section.",
	Teaching: "This will be the Teaching section.",
	Playing: "This will be the Playing section.",
	Researching: "This will be the Researching section.",
	Coding: "This will be the Coding section.",
	Woodworking: "This will be the Woodworking section.",
};


$(document).ready(function(){

});

$(document).on('click', '.mainMenu.link', function(){
	$(this).addClass('current');
	$(this).children('image').css('opacity', '1');
	
	var section = $('.mainMenu.link.current').children('.label').html();

	$('.mainMenu.link.current').children('.image').css('opacity','1');
	$('.mainMenu.link.current').children('.label').empty();
	
	$('.mainMenu.link').not('.current').remove();
	
	$('body').append('<h1>' + section + '<h1>');
	$('body').append('<p>' + bodyText[section] + '<p>');
	$('body').append('<div id="back"><</div>');
});

$(document).on('click', '#back', function(){
	window.location.replace('sethataft.com');
});