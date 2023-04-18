import * as Common from './common'; 
const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const $ = Common.$
$('#breadcrumbInject').html(Common.breadcrumb('Operation Car Wash'))
Common.darkModeHandler(true, darkMode);
darkModeHandler(true,darkMode)
$('#darkMode').on('click', i => {
	Common.darkModeHandler(null, null, true, i.currentTarget.checked) ; 
	darkModeHandler(null,null,true,i.currentTarget.checked);
})

function darkModeHandler(onLoad, cachedBool, onClick, clickDarkMode) {
	if (onLoad) {
		if (cachedBool) $('#accordion').attr('data-bs-theme','dark')
		else if (!cachedBool) $('#accordion').removeAttr('data-bs-theme')
	}
	if (onClick) {
		if (clickDarkMode) $('#accordion').attr('data-bs-theme','dark')
		else if (!clickDarkMode) $('#accordion').removeAttr('data-bs-theme')
	}
}
