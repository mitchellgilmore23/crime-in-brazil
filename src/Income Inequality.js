const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as common from './common';

$('#navbarInject').replaceWith(common.navbar);
$('#breadcrumbInject').replaceWith(common.breadcrumb('Income Inequality'));
$('#darkMode').on('click', darkMode);
