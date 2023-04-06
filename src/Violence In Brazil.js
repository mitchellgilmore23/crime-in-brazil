const bootstrap = require('bootstrap');
const $ = require('jquery');
import * as common from './common';

$('#navbarInject').replaceWith(common.navbar);
$('#breadcrumbInject').replaceWith(common.breadcrumb('Violence In Brazil'));
