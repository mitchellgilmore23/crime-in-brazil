const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as Common from './common';
Common.darkModeHandler(true, localStorage.getItem('darkMode'));
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
$('#breadcrumbInject').replaceWith(Common.breadcrumb('Human Trafficking', localStorage.getItem('darkMode')));
