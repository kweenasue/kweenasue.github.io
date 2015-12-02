$(document).ready(function() {
	$('#logo').click(function() {
		window.location.href = '/';
	});

	$('#portfolio').click(function() {
		window.location.href = 'portfolio.html';
	});

	$('#blog').click(function() {
		window.location.href = 'http://xuqueena.tumblr.com';
	});

	$('#contact').click(function() {
		window.location.href = 'contact.html';
	});

	window.onscroll = function() {
		if ($('body').scrollTop() >= 100) {
			$('#content').fadeOut();
		}
		else {
			$('#content').fadeIn();
		}
	};
});

// window.location.href = 'anotherpage.html';
// this changes your page to whatever anotherpage.html is
// as long as anotherpage.html is in same directory