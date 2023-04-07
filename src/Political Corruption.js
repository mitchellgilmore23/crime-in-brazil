const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as Common from './common';

$('#navbarInject').replaceWith(Common.navbar);
$('#breadcrumbInject').replaceWith(Common.breadcrumb('Political Corruption'));
$('#darkMode').on('click', i => Common.darkMode(i.currentTarget.checked));
