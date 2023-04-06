// console.log(123);

const bootstrap = require('bootstrap');
const $ = require('jquery');
window.$ = $;
const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	// ride: 'carousel',
	pause: 'hover',
	interval: 3500,
});
