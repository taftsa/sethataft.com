$(document).on('click', '.mainMenu.link', function(){
	//Return Things to Normal
	$('.current').removeClass('current');
	$('.text').css('display', '');
	
	//Shift View
	$('.mainMenu').addClass('pandora');
	$('#buttons').addClass('pandora');
	$('body').addClass('pandora');
	$('#name').css('display', 'none');
	
	//Set and Modify Current
	$(this).addClass('current');
	$('#text' + $('.current').html()).css('display', 'block');
});

$(document).on('click', '#headshot', function(){
	$('.current').removeClass('current');
	$('.pandora').removeClass('pandora');
	$('.text').css('display', '');
	$('#name').css('display', '');
});