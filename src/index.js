const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as Common from './common';
console.log($('#darkMode'));

$('#navbarInject').replaceWith(Common.navbar);

const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	// ride: 'carousel',
	pause: 'hover',
	interval: 3500,
});
// const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'));
// setTimeout(() => {
// 	introToast.show();
// }, 10000);

$(window).on('scroll', function () {
	Common.fnOnScroll();
});

$(window).on('resize', function () {
	Common.fnOnResize();
});
