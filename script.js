var bodyText = {
	About: 'My name is Seth A. Taft, and I am Assistant Professor of Music Education, Director of Instrumental Music, and Music Program Coordinator at <a href="https://www.limestone.edu/">Limestone University</a>. I have degrees in ' +
				'Music Education from the University of Colorado Boulder (PhD) and Virginia Commonwealth University (MM, BM). I am a teacher, musician, researcher, technology advocate, quasi-praxialist, and occasional idealist.'
	,
	Teaching: '<p>Teaching is the core of my professional life. One of the things I love aobut my current job is the variety of things I get to teach about. I teach classes in instrumental performance, conducting, and music education. That means ' +
				'I get to teach students, especially future music educators, at multiple touchpoints in their musical experiences. I get to help them improve as musicians in Wind Ensemble, then discuss how I planned and made decisions ' +
				'the next day during methods classes. As much as I enjoy playing and conducting, there\'s nothing more satisfying than watching a student go from not being able to play or conduct something to being able to do so ' +
				'exceptionally well.</p>' +
				'<p>Teaching also affords me the opportunity to refine my understanding of musical and pedagogical concepts. I love when students ask questions to which I don\'t know the answers or derail my entire lesson plan to discuss ' +
				'a fringe case that doesn\'t fit neatly into the conceptual framework we\'re discussing. It makes me a better musician and teacher, and it means that next year\'s lesson will be all the more useful.</p>'
	,
	Playing: 'My primary instrument is the saxophone, especially the baritone and alto saxes. As a music educator, I don\'t get as much time to play as I would like. Although most of my playing happens in traditional Western art music idioms ' +
				'and their derivatives, I enjoy playing pop tunes, especially <a target="_blank" href="https://fb.watch/v/dCbANj5Ik/">well-written children\'s music</a>, and can be heard playing in <a target="_blank" href="https://landsofawesternsunrise.bandcamp.com/track/hidden-or-forgotten">some unexpected places</a>.</p>' +
				'<p>I also enjoy playing most other traditional band instruments, especially low brass and percussion. Beyond that, though, I have a deep-seated love of obscure folk instruments. Several years ago, I purchased a Chinese ' +
				'<i><a href="https://en.wikipedia.org/wiki/Erhu">erhu</a></i> that I have, regrettably, still not learned to play. My most recent acquisition is an Irish <a href="https://en.wikipedia.org/wiki/Bodhr%C3%A1n">bodhr??n</a>, for which my intentions are marginally better.'
	,
	Researching: '<p>Research and other academic writing are some of the main ways that I stay connected with the broader music education community. That connection takes place in several forms, including collaborations with peers, ' +
				'reading and discussing the writings of others, and offering my own ideas into the compendium of music education knowledge.</p>' +
				'<p>I have collaborated with others in research on music teacher evaluation and job fit. I have also written with a colleague about the <a target="_blank" href="https://doi.org/10.1080/10588167.2021.1874199">use of APA 7 in music ' +
				'bibliography courses</a>.</p>' +
				'<p>On my own, I have studied music teacher migration experiences, preservice teacher motivation in instrument techniques classes, and <a target="_blank" href="https://www.proquest.com/openview/8450d2e3275ae5618e1464bab435961d/1?pq-origsite=gscholar&cbl=44156">music teacher role stress</a>. ' +
				'I have also written about <a target="_blank" href="https://doi.org/10.1177/0027432119877924">optimism in music study</a> and <a target="_blank" href="https://doi.org/10.1177/8755123319846542">composition in ensemble classrooms</a>.'
	,
	Coding: '<p>Teachers use all kinds of tools to solve everyday pedagogical and adminstrative problems. For me, coding in web development languages (HTML, CSS, and JavaScript) is one of those tools. ' +
				'I\'ve developed web-based solutions for <a target="_blank" href="https://snap.sethataft.com">advising</a>, <a target="_blank" href="https://basicode.sethataft.com">qualitative analysis</a>, and more. ' +
				'I also made this website and <a href="https://turtle.sethataft.com/">my own take on WORDLE-based word games</a>. ' +
				'These things are all made from scratch (i.e., no WordPress or Weebly).</p>' +
				'<p>Probably the most ambitious thing I ever built was Optimal, a platform for ensemble literature selection. It stored records of various aspects of difficulty of a piece, and any user could create one of those records. ' +
				'You could search through all the pieces that had been logged and get an average opinion (and plenty of comments) about the difficulty of that piece. It is no longer active, but it\'s a great example of what ' +
				'technology could do for music education.</p>' +
				'<p>I also created a solution for blind recorded auditions, which I call Principal. You can access Principal <a target="_blank" href="https://bandhacker.sethataft.com/principal/principal.html">here</a>. Both Optimal and Principal were hosted on a site I called bandhacker, so I\'ve kept that ' +
				'nomenclature for the time being.'
				,
	Making: '<p>I belive in work-life balance, hobbies, and learning new things. When I\'m not teaching or making music, I enjoy working with my hands and creating things. ' +
			'Narratives surrounding creativity???especially self-narratives of people who don\'t think they are creative???seem to present creativity as ' +
			'an abstract or mysterious quality derived more often from a muse than a mind. I think that\'s backwards; as important as ingenuity is, it all start with the act of creating, even re-creating. ' +
				'With years of experience as a musician and educator, I also think it\'s good to have something not ostensibly related to my job so that I can be new at something and keep perspective.' +
				'<div class="imageContainer"><img class="pageImage" src="hobbies/woodworking1.jpg" /><img class="pageImage" src="hobbies/woodworking2.jpg" /><img class="pageImage" src="hobbies/woodworking3.jpg" /><img class="pageImage" src="hobbies/modding1.jpg" /></p>'
				,
	Contact: '<p>The best method for contacting me is my work email, <a target="_blank" href="mailto:sataft@limestone.edu">sataft@limestone.edu</a>.</p>' + 
				'<p>You can also call me at <a href="tel:8644884508">(864) 488-4508</a>.</p>' +
				'<p>I\'m not very active on social media, but you can find me on <a target="_blank" href="https://www.facebook.com/seth.taft.79">Facebook</a>.</p>' +
				'<p>You can also find my adorable dog Toby on <a target="_blank" href="https://www.instagram.com/tobiashuckleberry/?hl=en">Instagram</a>.</p>'
				,
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