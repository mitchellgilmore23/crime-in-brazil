/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// dark mode toggle
var darkModeButton = '#darkMode';
$(darkModeButton).on('mouseenter', () => {
	$(darkModeButton).removeClass('bg-dark').addClass('bg-success');
});
$(darkModeButton).on('mouseleave', () => {
	$(darkModeButton).addClass('bg-dark').removeClass('bg-success');
});
$(darkModeButton).on('click', darkModeToggle);

function darkModeToggle() {
	// is document currently in dark mode?
	var isInDarkMode = false;
	if ($('[darkMode=bg]').hasClass('bg-dark')) {
		isInDarkMode = true;
	}
	// Document is not in dark mode, on click switch TO dark mode
	if ($(darkModeButton).text() == 'Dark Mode' && !isInDarkMode) {
		$('[darkMode=bg]').addClass('bg-dark');
		setTimeout(() => {
			$('[darkMode=text]').addClass('text-bg-dark');
			$(darkModeButton).text('Light Mode').removeClass('bg-dark');
		}, 250);
	}
	// Document is in dark mode, switch TO light mode
	if ($(darkModeButton).text() == 'Light Mode' && isInDarkMode) {
		$('[darkMode=text]').removeClass('text-bg-dark');
		setTimeout(() => {
			$('[darkMode=bg]').removeClass('bg-dark');
			$(darkModeButton).text('Dark Mode').addClass('bg-dark text-bg-dark');
		}, 250);
	}
}

function languageChanger(whichlanguage) {
	switch (whichlanguage) {
		case 'en':
			$('[lang=en]').removeAttr('hidden');
			break;
		case 'pr':
			$('[lang=pr]').removeAttr('hidden');
			break;
	}
}
