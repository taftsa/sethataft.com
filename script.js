var bodyText = {
	About: 'This will be the About section.',
	Teaching: 'This will be the Teaching section.',
	Playing: 'This will be the Playing section.',
	Researching: 'This will be the Researching section.',
	Coding: '<p>I made this website.',
	Woodworking: '<p>It doesn\'t have anything to do with my career, and I\'m not very good at it yet. However, I belive in work-life balance, hobbies, and learning new things. ' +
				'With years of experience as a musician and educator, I think it\'s good to have something completely unrelated that I can be new at to keep perspective.' +
				'<div class="imageContainer"><img class="pageImage" src="woodworking/woodworking1.jpg" /><img class="pageImage" src="woodworking/woodworking2.jpg" /><img class="pageImage" src="woodworking/woodworking3.jpg" /></p>',
	Contact: '<p>The best method for contacting me is my work email, <a target="_blank" href="mailto:sataft@limestone.edu">sataft@limestone.edu</a>.</p>' + 
				'<p>You can also call me at <a href="tel:8644884508">(864) 488-4508</a>.</p>' +
				'<p>I\'m not very active on social media, but you can find me on <a target="_blank" href="https://www.facebook.com/seth.taft.79">Facebook</a>.</p>' +
				'<p>You can also find my adorable dog Toby on <a target="_blank" href="https://www.instagram.com/tobiashuckleberry/?hl=en">Instagram</a>.</p>',
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
	window.location.replace('http://sethataft.com');
});