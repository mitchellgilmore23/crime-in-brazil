const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as breadcrumb from './breadcrumb';
import darkMode from './darkMode';
import * as common from './common';

$('#navbarInject').replaceWith(common.navbar);
$('#breadcrumbInject').replaceWith(common.breadcrumb('Political Corruption'));
