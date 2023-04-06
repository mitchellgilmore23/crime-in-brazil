// console.log(123);

const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as timeline from './landingtimeline';
window.$ = $;
import * as common from './common';
$('#navbarInject').replaceWith(common.navbar);
const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	// ride: 'carousel',
	pause: 'hover',
	interval: 3500,
});
const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'));

// setTimeout(() => {
// 	introToast.show();
// }, 10000);

$(window).on('scroll', function () {
	timeline.fnOnScroll();
});

$(window).on('resize', function () {
	timeline.fnOnResize();
});
