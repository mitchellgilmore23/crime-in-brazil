const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as Common from './common';
Common.darkModeHandler(true, localStorage.getItem('darkMode'));
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
$('#breadcrumbInject').replaceWith(Common.breadcrumb('Violence In Brazil', localStorage.getItem('darkMode')));

function jQ() {
	$('.breadcrumb-item:before').css(`
	.breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: var(--bs-breadcrumb-item-padding-x);
    color: rgb(255 255 255 / 75%);
    content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
	`);
}
window.jQ = jQ;
window.$ = $;
