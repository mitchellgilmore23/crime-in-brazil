import * as Common from './common'; 
const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const $ = Common.$
$('#breadcrumbInject').html(Common.breadcrumb('Operation Car Wash'))
$("#footerInject").replaceWith(Common.footer());
Common.darkModeHandler(true, darkMode);
darkModeHandler(true,darkMode)
$('#darkMode').on('click', i => {
	Common.darkModeHandler(null, null, true, i.currentTarget.checked) ; 
	darkModeHandler(null,null,true,i.currentTarget.checked);
})

console.log($('#footerInject'))
function darkModeHandler(onLoad, cachedBool, onClick, clickDarkMode) {
	if (onLoad) {
		if (cachedBool) $('#accordion').attr('data-bs-theme','dark').css({
			'--bs-accordion-btn-color':'rgb(251, 254, 82)',
		'--bs-accordion-color':'rgb(255,255,255)',
		'--bs-accordion-border-color': 'rgb(251, 254, 82)'
	})
		else if (!cachedBool) $('#accordion').removeAttr('data-bs-theme').css({
			'--bs-accordion-btn-color':'#000',
			'--bs-accordion-color': 'rgb(0,0,0)',
			'--bs-accordion-border-color': 'rgb(0,0,0)'

		})
	}
	if (onClick) {
		if (clickDarkMode) $('#accordion').attr('data-bs-theme','dark').css({
			'--bs-accordion-btn-color':'rgb(251, 254, 82)',
			'--bs-accordion-color':'rgb(255,255,255)',
			'--bs-accordion-border-color': 'rgb(251, 254, 82)'
		})
		else if (!clickDarkMode) $('#accordion').removeAttr('data-bs-theme').css(
			{'--bs-accordion-btn-color':'#000',
			'--bs-accordion-color': 'rgb(0,0,0)',
			'--bs-accordion-border-color': 'rgb(0,0,0)'
		})
	}
}
