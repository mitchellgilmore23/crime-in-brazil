const $ = require('jquery');

export const navbar = `
<nav class="navbar navbar-expand-lg border border-2" darkMode='bg'>
<div class="container-fluid">
	<button class="navbar-toggler w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarText">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link active" darkMode='text' href="index.html">Home</a>
			</li>
			<div class="vr d-none d-lg-block"></div>
			<li class="nav-item">
				<a class="nav-link" darkMode='text' href="./Violence In Brazil.html">Violence</a>
			</li>
			<div class="vr d-none d-lg-block"></div>
			<li class="nav-item">
				<a class="nav-link" darkMode='text' href="./Income Inequality.html">Income Inequality</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" darkMode='text' href="./Political Corruption.html">Political Corruption</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" darkMode='text' href="./Human Trafficking.html">Human Trafficking</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" darkMode='text' href="./Racism.html">Racism</a>
			</li>
		</ul>
		<div class="hstack gap-3">
			<a class="nav-link" darkMode='text'>Light</a>
			<div class="form-switch">
				<input type="checkbox" class="form-check-input" id="darkMode" onclick="darkMode" />
			</div>
			<a class="nav-link me-2" darkMode='text'>Dark</a>
		</div>
	</div>
</div>
</nav>
`;

export function breadcrumb(activePage) {
	return `
	<div class="container-fluid border border-1 pt-3">
	<div class="container">
		<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
			<ol class="breadcrumb p-2">
				<li class="breadcrumb-item"><a href="index.html">Home</a></li>
				<li class="breadcrumb-item active">${activePage}</li>
			</ol>
		</nav>
	</div>
</div>
`;
}

export function darkMode() {
	$('[darkMode=bg]').addClass('bg-dark');
	console.error('hahahahahah loser');
}

/////////////////////// TIMELINE ON LANDING PAGE

var agTimeline = $('.js-timeline'),
	agTimelineLine = $('.js-timeline_line'),
	agTimelineLineProgress = $('.js-timeline_line-progress'),
	agTimelinePoint = $('.js-timeline-card_point-box'),
	agTimelineItem = $('.js-timeline_item'),
	agOuterHeight = $(window).outerHeight(),
	agHeight = $(window).height(),
	f = -1,
	agFlag = false;
var agPosY = 0;
export function fnOnScroll() {
	agPosY = $(window).scrollTop();

	fnUpdateFrame();
}

export function fnOnResize() {
	agPosY = $(window).scrollTop();
	agHeight = $(window).height();

	fnUpdateFrame();
}

export function fnUpdateWindow() {
	agFlag = false;

	agTimelineLine.css({
		top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
		bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top,
	});

	f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
}

export function fnUpdateProgress() {
	var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
	var i = agTop + agPosY - $(window).scrollTop();
	var a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
	var n = agPosY - a + agOuterHeight / 2;
	i <= agPosY + agOuterHeight / 2 && (n = i - a);
	agTimelineLineProgress.css({ height: n + 'px' });
	agTimelineItem.each(function () {
		var agTop = $(this).find(agTimelinePoint).offset().top;
		agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
	});
}

export function fnUpdateFrame() {
	agFlag || requestAnimationFrame(fnUpdateWindow);
	agFlag = true;
}
