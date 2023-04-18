import * as Common from './common'; 
const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const $ = Common.$
$('#breadcrumbInject').html(Common.breadcrumb('Operation Car Wash', localStorage.getItem('darkMode') === true))
Common.darkModeHandler(true, darkMode);
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
