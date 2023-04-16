import * as Common from './common';
import cpi from '../dist/media/cpi';
window.$ = Common.$;
var darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
Common.darkModeHandler(true, darkMode);

$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
const carousel = new Common.bootstrap.Carousel('#landingPageCarousel', {
	ride: 'carousel',
	pause: 'hover',
	interval: 4200,
});
carousel.cycle();
const introToast = Common.bootstrap.Toast.getOrCreateInstance($('#introToast'), {
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
	var darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
	var header = $('#scrolling-header');
	var pos = $('#cpiContainer').scrollTop();
	if (pos < 80) {
		header.css({'background-color': `rgba(251, 254, 82, ${(pos / 2) * 0.02})`});
		if (!darkMode) return;
		if (darkMode) {
			$('[cpihelper=yep]').css({color: `rgb(${255 - pos * 7}, ${255 - pos * 7},${255 - pos * 7})`});
			$('[darkmode=icon]').attr({fill: `rgb(${255 - pos * 7}, ${255 - pos * 7},${255 - pos * 7})`});
		}
	} else if (pos >= 80) {
		if (!darkMode) return;
		if (darkMode) {
			header.css({'background-color': `rgba(251, 254, 82, .8)`});
			$('[cpihelper=yep]').css({color: 'rgb(0,0,0)'});
			$('[darkmode=icon]').attr({fill: `rgb(0,0,0)`});
		}
	}
});
window.sort = function sort(col) {
	var icon;
	const sortIcons = {
		aToZ: `<path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
			<path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
			`,
		zToA: `<path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
			<path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
			<path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
		oneToNine: `<path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
		<path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
		<path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
		nineToOne: `<path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
		<path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
	};
	$('#cpiContainer').animate({scrollTop: 0});
	switch (col) {
		case 'countryCode':
			icon = $('#countryCodeIcon');
			if (icon.attr('current') == 'aToZ') {
				icon.html(sortIcons.zToA);
				icon.attr('current', 'zToA');
			} else if (icon.attr('current') == 'zToA') {
				icon.html(sortIcons.aToZ);
				icon.attr('current', 'aToZ');
			}
			break;
		case 'country':
			icon = $('#countryIcon');
			if (icon.attr('current') == 'aToZ') {
				icon.html(sortIcons.zToA);
				icon.attr('current', 'zToA');
			} else if (icon.attr('current') == 'zToA') {
				icon.html(sortIcons.aToZ);
				icon.attr('current', 'aToZ');
			}
			break;
		case 'region':
			icon = $('#regionIcon');
			if (icon.attr('current') == 'aToZ') {
				icon.html(sortIcons.zToA);
				icon.attr('current', 'zToA');
			} else if (icon.attr('current') == 'zToA') {
				icon.html(sortIcons.aToZ);
				icon.attr('current', 'aToZ');
			}
			break;
		case 'score':
			icon = $('#scoreIcon');
			if (icon.attr('current') == '1to9') {
				icon.html(sortIcons.nineToOne);
				icon.attr('current', '9to1');
			} else if (icon.attr('current') == '9to1') {
				icon.html(sortIcons.oneToNine);
				icon.attr('current', '1to9');
			}
			break;
		case 'rank':
			icon = $('#rankIcon');
			if (icon.attr('current') == '1to9') {
				icon.html(sortIcons.nineToOne);
				icon.attr('current', '9to1');
			} else if (icon.attr('current') == '9to1') {
				icon.html(sortIcons.oneToNine);
				icon.attr('current', '1to9');
			}
			break;
		default:
			icon = null;
			console.error('SORT Function did not find a case in switch statement.');
			break;
	}
};
