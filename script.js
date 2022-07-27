$(document).ready(function(){

});

$(document).on('click', '.mainMenu.link', function(){
	//Return Things to Normal
	$('.current').removeClass('current');
	$('.text').css('display', '');
	$('.current').children('.label').css('display', '');
	
	$('.mainMenu').addClass('pandora');
	
	//Set and Modify Current
	$(this).addClass('current');
	$('#text' + $('.current').children('.label').html()).css('display', 'block');
});