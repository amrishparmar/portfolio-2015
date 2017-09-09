/**
	scripts.js

	JavaScript code for My Portfolio web programming final project
**/

// media queries for small and mobile devices
var mq_small = window.matchMedia('(max-width: 991px)');
var mq_mob = window.matchMedia('(max-width: 767px)');

/* universal scripts */

if (mq_mob.matches) {
	// give the navbar fixed position on mobile devices
	$('nav').addClass('navbar-fixed-top');

	// adds smooth page transitions for mobile
	$('body').on('click', 'a', function(e) {
		var href = $(this).attr('href');
		var target = $(this).attr('target');

		// prevent it happening for links that are not within the site and for control a's
		if (href !== '#' && target !== '_blank') {
			// fade out
			$('body').fadeOut('fast', function() {
				// go to next page
				location.href = href;
			});
			e.preventDefault();
		}
	});

	// fade page in on page load
	$('body').hide().fadeIn('fast');
}

/* cv.php */

if ($(document).find('title').text() === 'CV - My Portfolio') {

	if (mq_small.matches) {
		// slide out content when clicking on show details for smaller devices
		$('.slider-head').on('click', function(e) {
			$this = $(this);
			$this.next('.slider-item-cv').slideToggle('fast');
			if ($this.html() === '[Show details]') {
				$this.html('[Hide details]');
			} 
			else {
				$this.html('[Show details]');
			}
			e.preventDefault();
		});
	}

}

/* abc123.php */

if ($(document).find('title').text() === 'ABC123 - My Portfolio') {

	// code for modals - disabled on smaller devices
	if (!mq_small.matches) {
		$('.dm-screenshots img').on('click', function(e) {
			var id = $(this).attr('id');
			var cwNum = id.slice(2, 3);
			var screenNum = id.slice(11);
			$('#cw' + cwNum + '-screen-' + screenNum + '-modal').modal('show');
			e.preventDefault();
		});
	}

	if (mq_mob.matches) {
		// wide coursework link buttons on mobile devices
		$('.dm-cw-link').addClass('btn-block');
	}

}

/* virtualoso.php */

if ($(document).find('title').text() === 'Virtualoso - My Portfolio') {

	// code for modals - disabled on smaller devices
	if (!mq_small.matches) {
		$('.dm-screenshots img').on('click', function(e) {
			var id = $(this).attr('id');
			var screenNum = id.slice(12);
			$('#virt-screen-' + screenNum + '-modal').modal('show');
			e.preventDefault();
		});
	}

	if (mq_mob.matches) {
		// wide coursework link buttons on mobile devices
		$('.download-links a').addClass('btn-block');
	}

}

/* voidattack.php */

if ($(document).find('title').text() === 'Void Attack - My Portfolio') {

	// code for modals - disabled on smaller devices
	if (!mq_small.matches) {
		$('.dm-screenshots img').on('click', function(e) {
			var id = $(this).attr('id');
			var screenNum = id.slice(10);
			$('#va-screen-' + screenNum + '-modal').modal('show');
			e.preventDefault();
		});
	}

}

/* cs50.php */

if ($(document).find('title').text() === 'CS50 Projects - My Portfolio') {

	// code for modals - disabled on smaller devices
	if (!mq_small.matches) {
		$('.cs50-screens img').on('click', function(e) {
			var id = $(this).attr('id');
			var csNum = id.slice(5, 6);
			var screenNum = id.slice(7);
			$('#cs50-' + csNum + '-' + screenNum + '-modal').modal('show');
			e.preventDefault();
		});
	}

}

/* volunteering.php */

if ($(document).find('title').text() === 'Volunteering Services - My Portfolio') {

	// code for modals - disabled on smaller devices
	if (!mq_small.matches) {
		$('#vw-screen').on('click', function(e) {
			$('#vw-modal').modal('show');
			e.preventDefault();
		});

		$('#vr-screen').on('click', function(e) {
			$('#vr-modal').modal('show');
			e.preventDefault();
		});
	}

	if (mq_small.matches) {
		// wide volunter link buttons on smaller devices
		$('#vol-buttons a').addClass('btn-block');
	}

}