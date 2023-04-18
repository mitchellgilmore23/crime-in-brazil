import * as Common from './common'; 
const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const $ = Common.$
$('#breadcrumbInject').html(Common.breadcrumb('Human Trafficking', localStorage.getItem('darkMode') === true))
Common.darkModeHandler(true, darkMode);
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));
