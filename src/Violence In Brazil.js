const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as Common from './common';
$(window).on('load resize scroll', i => {
	if (i.type === 'load') {
		Common.DarkModeHandler(true, localStorage.getItem('darkMode'));
	}
});
cachedDarkMode ? Common.cachedDarkMode(true) : Common.cachedDarkMode(false);

$('#navbarInject').replaceWith(Common.navbar(cachedDarkMode));
$('#darkMode').on('click', i => Common.darkMode(i.currentTarget.checked));

$('#breadcrumbInject').replaceWith(Common.breadcrumb('Violence In Brazil', cachedDarkMode));
