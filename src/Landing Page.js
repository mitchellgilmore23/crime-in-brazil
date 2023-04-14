import * as Common from './common';
import cpi from '../dist/media/cpi';
const $ = Common.$;
window.$ = $;
const bootstrap = Common.bootstrap;
Common.darkModeHandler(true, localStorage.getItem('darkMode'));

$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
const carousel = new bootstrap.Carousel('#landingPageCarousel', {
	ride: 'carousel',
	pause: 'hover',
	interval: 4200,
});
carousel.cycle();
const introToast = bootstrap.Toast.getOrCreateInstance($('#introToast'), {
	autohide: false,
});
setTimeout(() => {
	// introToast.show();
}, 2000);

$(document).on('scroll resize', function (i) {
	if (i.type == 'scroll') {
		Common.fnOnScroll();
	}
	if (i.type == 'resize') {
		Common.fnOnResize();
	}
});
function cpiText(country, rank, index, region, code) {
	return `
<tr>
<td>${code}</td>
<td>${country}</td>
<td>${region}</td>
<td>${index}</td>
<td>${rank}</td>
</tr>
`;
}

function cpiResultViaYear() {
	var year = $('#cpiDropdown').text();
	var newList = [];
	$('#cpiList').appendTo();
	cpi.forEach(i => {
		if (i.year == year) {
			newList.push(i);
		}
	});
	newList.sort((a, b) => {
		return a.rank - b.rank;
	});
	newList.forEach(i => {
		if (i.rank < 2) {
			newList.shift();
		}
	});
	newList.forEach(i => {
		$('#cpiList').append(cpiText(i.country, i.rank, i.score, i.region, i.iso3));
	});
}
cpiResultViaYear();
$('#cpiContainer').on('scroll', i => {
	var header = $('#scrolling-header');
	var pos = $('#cpiContainer').scrollTop();
	if (pos < 40) {
		header.css({
			'background-color': `rgba(251, 254, 82, ${(pos / 2) * 0.05})`,
		});
	} else {
		header.css({
			'background-color': `rgba(251, 254, 82, 0.9)`,
		});
	}
});
