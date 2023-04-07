const bootstrap = require('bootstrap');
const $ = require('jquery');
window.$ = $;
import * as Common from './common';
const cachedDarkMode = Common.strToBool(localStorage.getItem('darkMode'));
cachedDarkMode ? Common.cachedDarkMode(true) : Common.cachedDarkMode(false);

$('#navbarInject').replaceWith(Common.navbar(cachedDarkMode));
$('#darkMode').on('click', i => Common.darkMode(i.currentTarget.checked));

const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	// ride: 'carousel',
	pause: 'hover',
	interval: 3500,
});
// const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'));
// setTimeout(() => {
// 	introToast.show();
// }, 1000);

$(window).on('scroll resize', function (i) {
	if (i.type == 'scroll') {
		Common.fnOnScroll();
	}
	if (i.type == 'resize') {
		Common.fnOnResize();
	}
});
