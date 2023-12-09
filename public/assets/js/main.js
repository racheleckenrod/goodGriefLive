// /*
// 	Escape Velocity by HTML5 UP
// 	html5up.net | @ajlkn
// 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
// */

// window.executeMainJs = function($) {

// 	console.log("##############main.js jquery")
// 	var	$window = jQuery(window),
// 		$body = jQuery('body');

// 	// Breakpoints.
// 		breakpoints({
// 			xlarge:  [ '1281px',  '1680px' ],
// 			large:   [ '981px',   '1280px' ],
// 			medium:  [ '737px',   '980px'  ],
// 			small:   [ null,      '736px'  ]
// 		});

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			window.setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// 	// Dropdowns.
// 		jQuery('#nav > ul').dropotron({
// 			mode: 'fade',
// 			noOpenerFade: true,
// 			alignment: 'center',
// 			detach: false
// 		});

// 	// Nav.

// 		// Title Bar.
// 			jQuery(
// 				'<div id="titleBar">' +
// 					'<a href="#navPanel" class="toggle"></a>' +
// 					'<span class="title">' + jQuery('#logo h1').html() + '</span>' +
// 				'</div>'
// 			)
// 				.appendTo($body);

// 		// Panel.
// 			jQuery(
// 				'<div id="navPanel">' +
// 					'<nav>' +
// 						jQuery('#nav').navList() +
// 					'</nav>' +
// 				'</div>'
// 			)
// 				.appendTo($body)
// 				.panel({
// 					delay: 500,
// 					hideOnClick: true,
// 					hideOnSwipe: true,
// 					resetScroll: true,
// 					resetForms: true,
// 					side: 'left',
// 					target: $body,
// 					visibleClass: 'navPanel-visible'
// 				});

// };