/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const bs = require('bootstrap');
const $ = require('jquery');

const darkModeButton = '#darkMode';
$(darkModeButton).on('mouseenter', () => {
	$(darkModeButton).removeClass('bg-dark').addClass('bg-success');
});
$(darkModeButton).on('mouseleave', () => {
	$(darkModeButton).addClass('bg-dark').removeClass('bg-success');
});
$(darkModeButton).on('click', darkModeToggle);

function darkModeToggle() {
	console.log($(darkModeButton).text());
	// Document is not in dark mode, on click switch TO dark mode
	if ($(darkModeButton).text() == 'Dark Mode') {
		$('[darkMode=bg]').addClass('bg-dark');
		setTimeout(() => {
			$('[darkMode=text]').addClass('text-bg-dark');
			$(darkModeButton).text('Light Mode'); //.removeClass('bg-dark');
		}, 250);
	}
	// Document is in dark mode, switch TO light mode
	if ($(darkModeButton).text() == 'Light Mode') {
		$('[darkMode=text]').removeClass('text-bg-dark');
		setTimeout(() => {
			$('[darkMode=bg]').removeClass('bg-dark');
			$(darkModeButton).text('Dark Mode'); //.addClass('bg-dark text-bg-dark');
		}, 250);
	}
}

$('#corruption').on('click', () => {
	console.error('Fuck you bitch');
});

// Below is link for JSON data of Corruption Index/Country
// https://www.transparency.org/api/latest/cpi
