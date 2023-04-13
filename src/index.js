const bootstrap = require('bootstrap');
const $ = require('jquery');
window.$ = $;
import * as Common from './common';
Common.darkModeHandler(true, localStorage.getItem('darkMode'));
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));

const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	ride: 'carousel',
	pause: 'hover',
	interval: 4200,
});
const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'));
setTimeout(() => {
	introToast.show();
}, 5000);

$(document).on('scroll resize', function (i) {
	if (i.type == 'scroll') {
		Common.fnOnScroll();
	}
	if (i.type == 'resize') {
		Common.fnOnResize();
	}
});
