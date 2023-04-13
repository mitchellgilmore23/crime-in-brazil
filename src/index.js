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
const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'), {
	autohide: false,
});
setTimeout(() => {
	introToast.show();
}, 2000);

$(document).on('scroll resize', function (i) {
	if (i.type == 'scroll') {
		Common.fnOnScroll();
	}
	if (i.type == 'resize') {
		Common.fnOnResize();
	}
});
