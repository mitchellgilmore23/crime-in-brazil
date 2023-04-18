import * as Common from './common'; import cpi from '../dist/media/cpi'; window.$ = Common.$;
const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false; const $ = Common.$;
Common.darkModeHandler(true, darkMode); window.tableSorter = tableSorter;
printCpiResults(yearExtractor());

new Common.bootstrap.Carousel('#landingPageCarousel', {ride: 'carousel',pause: 'hover',interval: 4200}).cycle();
const introToast = Common.bootstrap.Toast.getOrCreateInstance($('#introToast'), {autohide: false});
setTimeout(() => {introToast.show()}, 2000);
$(document).on('scroll resize', i =>  i.type === 'resize' ? Common.fnOnResize() : Common.fnOnScroll());
$('#darkMode').on('click', i => Common.darkModeHandler(null, null, true, i.currentTarget.checked));

$('#cpiContainer').on('scroll mousedown resize mousemove', i => cpiContainerScroll(i));

function cpiContainerScroll(i) {
	if (i.type === 'scroll'){
		let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
		let header = $('#scrolling-header');
		let pos = $('#cpiContainer').scrollTop();
		if (pos < 80) {
			header.css({'background-color': `rgba(251, 254, 82, ${(pos / 2) * 0.02})`});
			if (!darkMode) return;
			if (darkMode) {
				$('[cpihelper=true]').css({color: `rgb(${255 - pos * 7}, ${255 - pos * 7},${255 - pos * 7})`});
				$('[darkmode=icon]').attr({fill: `rgb(${255 - pos * 7}, ${255 - pos * 7},${255 - pos * 7})`});
			}
		} else if (pos >= 80) {
			if (!darkMode) return;
			if (darkMode) {
				header.css({'background-color': `rgba(251, 254, 82, .8)`});
				$('[cpihelper=true]').css({color: 'rgb(0,0,0)'});
				$('[darkmode=icon]').attr({fill: `rgb(0,0,0)`});
			}
		}
	}
	else if (i.type === 'mousedown' || i.type === 'mousemove'){
		window.scrollTo(0,22000)
	}
};
function tableSorter(col) {
	$('#cpiContainer').animate({scrollTop: 0});
	let perYearArr = yearExtractor();
	switch (col) {
		case 'code':
			iconChanger('countryCodeIcon');
			if ($('#countryCodeIcon').attr('current') === 'aToZ'){perYearArr.sort((a,b) => a.iso3 < b.iso3 ? -1 : null )}
			else if ($('#countryCodeIcon').attr('current') === 'zToA'){perYearArr.sort((a,b) => a.iso3 > b.iso3 ? -1 : null )}
			break;
		case 'country':	
		iconChanger('countryIcon'); 
		if ($('#countryIcon').attr('current') === 'aToZ'){perYearArr.sort((a,b) => a.country  <b.country ? -1 : null )}
		else if ($('#countryIcon').attr('current') === 'zToA'){perYearArr.sort((a,b) => a.country > b.country ? -1 : null )}
		break;
		case 'region':
			iconChanger('regionIcon')
			if ($('#regionIcon').attr('current') === 'aToZ'){perYearArr.sort((a,b) => a.region < b.region ? -1 : null )}
			else if ($('#regionIcon').attr('current') === 'zToA'){perYearArr.sort((a,b) => a.region > b.region ? -1 : null )}
			break;
		case 'score':
			iconChanger('scoreIcon',true)
			if ($('#scoreIcon').attr('current') === '1To9'){perYearArr.sort((a,b) => a.score < b.score ? -1 : null )}
			else if ($('#scoreIcon').attr('current') === '9To1'){perYearArr.sort((a,b) => a.score > b.score ? -1 : null )}
			break;
		case 'rank':
			iconChanger('rankIcon',true)
			if ($('#rankIcon').attr('current') === '1To9'){perYearArr.sort((a,b) => a.rank < b.rank ? -1 : null)}
			else if ($('#rankIcon').attr('current') === '9To1'){perYearArr.sort((a,b) => a.rank > b.rank? -1 : null)}
			break;
		default: console.warn('SORT Function did not find a case in switch statement.'); break;
	}
	printCpiResults(perYearArr)
};
function printCpiResults(arr){
	let pushResults = $('#cpiList')
	pushResults.html('')
	arr.forEach((v,i) => {
		pushResults.append(`
		<tr>
			<td>${v.iso3}</td>
			<td>${v.country}</td>
			<td>${v.region}</td>
			<td>${v.score}</td>
			<td>${v.rank}</td>
		</tr>
		`);
	})
};
function iconChanger (activeCol, numeric = false) {
	const sortIcons = {
		aToZ: `<path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
			<path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
			`,
		zToA: `<path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
			<path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
			<path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
		oneToNine: `<path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
		<path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
		<path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
		nineToOne: `<path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
		<path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
		`,
	};
	let all = ['countryCodeIcon','countryIcon','regionIcon','scoreIcon','rankIcon']
	all.splice(all.indexOf(activeCol),1);
	let activeColJQ = $(`#${activeCol}`);
	all.forEach(i => {$(`#${i}`).parent().parent().removeClass('border-bottom')});
	if (!activeColJQ.parent().parent().hasClass('border-bottom') && !numeric ){ // element doesn't have border and is alphabetical sort
		activeColJQ.parent().parent().addClass('border-bottom')
	} 
	else if (!activeColJQ.parent().parent().hasClass('border-bottom') && numeric ){ // element doesn't have border and is numerical sort
		activeColJQ.parent().parent().addClass('border-bottom')
	} 
	else if (activeColJQ.parent().parent().hasClass('border-bottom') && !numeric ){ // element has border and is alphabetical sort
		activeColJQ.attr('current') === 'aToZ' ? activeColJQ.html(sortIcons.zToA).attr('current','zToA') : activeColJQ.html(sortIcons.aToZ).attr('current', 'aToZ')
	} 
	else if (activeColJQ.parent().parent().hasClass('border-bottom') && numeric ){ // element has border and is numerical sort
		activeColJQ.attr('current') === '1To9' ? activeColJQ.html(sortIcons.nineToOne).attr('current','9To1') : activeColJQ.html(sortIcons.oneToNine).attr('current','1To9')	
	}
};
function yearExtractor (){
	const year = $('#cpiDropdown').text(); 
	let newList = [];
	cpi.forEach(i => {
		if (i.year == year) newList.push(i);
	});
	let newerList = newList.filter(a => a.rank > 0)
	newerList.sort((a,b) => a.rank < b.rank ? -1 : null)
	return newerList
};

$('[year]').on('click', i => {
	let	yearClicked = i.currentTarget.childNodes[0].nodeValue;
	$('#cpiDropdown').html(yearClicked);
	$('[year]').removeAttr('hidden');
	$(i.target).attr('hidden','true');
	iconChanger('rankIcon',true);
	printCpiResults(yearExtractor());
	$('#cpiTextInput')[0].value = '';
});

$('#cpiTextInput').on('keyup', i => {
	let array = yearExtractor()
	let curVal = i.currentTarget.value
	curVal = curVal.replace(" ","")
	if (curVal.length >= 1){
		let newArr =  array.filter(data => JSON.stringify(data).toLowerCase().indexOf(curVal.toLowerCase()) !== -1);
		printCpiResults(newArr)
	};
});
