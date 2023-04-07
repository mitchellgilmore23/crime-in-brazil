const $ = require('jquery');
function strToBool(str) {
	if (str === 'true') {
		return true;
	} else if (str == 'false') {
		return false;
	} else {
		console.error('Error in strToBool Function. Contact Dev.');
		return null;
	}
}

export function darkModeHandler(onLoad, loadDarkMode, onClick, clickDarkMode) {
	if (onLoad) {
		const cachedBool = strToBool(loadDarkMode);
		if (cachedBool) {
			console.log(`Local Storage/darkMode == ${cachedBool}.`);
			$('#navbarInject').replaceWith(navbar(true));
			$('[darkMode=bg]').addClass('bg-dark');
			$('[darkMode=text]').addClass('text-light');
		} else if (!cachedBool) {
			console.log(`Local Storage/darkMode == ${cachedBool}.`);
			$('#navbarInject').replaceWith(navbar(false));
		} else {
			console.error('ERROR: DarkModeHandler ELSE ON LOAD if statement.');
		}
	}
	if (onClick) {
		if (clickDarkMode) {
			localStorage.setItem('darkMode', true);
			$('[darkMode=bg]').addClass('bg-dark');
			$('[darkMode=text]').addClass('text-light');
		} else if (!clickDarkMode) {
			$('[darkMode=bg]').removeClass('bg-dark');
			$('[darkMode=text]').removeClass('text-light');
			localStorage.setItem('darkMode', false);
		} else {
			console.error('ERROR: DarkModeHandler ELSE ON CLICK if statement.');
		}
	}
}

export function navbar(dark) {
	if (dark) {
		return `
			<nav class="navbar navbar-expand-lg border border-2" darkMode='bg'>
			<div class="container-fluid">
				<button class="navbar-toggler w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active text-light" darkMode='text' href="index.html">Home</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Violence In Brazil.html">Violence</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Income Inequality.html">Income Inequality</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Political Corruption.html">Political Corruption</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Human Trafficking.html">Human Trafficking</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>

						<li class="nav-item">
							<a class="nav-link  text-light" darkMode='text' href="./Racism.html">Racism</a>
						</li>
					</ul>
					<div class="hstack gap-3">
						<a class="nav-link text-light" darkMode='text'>Light</a>
						<div class="form-check form-switch">
							<input type="checkbox" class="form-check-input" role="switch" id="darkMode" checked />
						</div>
						<a class="nav-link me-2 text-light" darkMode='text'>Dark</a>
					</div>
				</div>
			</div>
		</nav>`;
	} else {
		return `
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
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Violence In Brazil.html">Violence</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Income Inequality.html">Income Inequality</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>

					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Political Corruption.html">Political Corruption</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>

					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Human Trafficking.html">Human Trafficking</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>

					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Racism.html">Racism</a>
					</li>
				</ul>
				<div class="hstack gap-3">
					<a class="nav-link" darkMode='text'>Light</a>
					<div class="form-check form-switch">
						<input type="checkbox" class="form-check-input" role="switch" id="darkMode" />
					</div>
					<a class="nav-link me-2" darkMode='text'>Dark</a>
				</div>
			</div>
		</div>
		</nav>`;
	}
}

export function breadcrumb(activePage, dark) {
	if (dark | (dark == 'true')) {
		return `	<div class="container-fluid border border-1 pt-3">
		<div class="container">
			<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
				<ol class="breadcrumb p-2">
					<li class="breadcrumb-item"><a href="index.html">Home</a></li>
					<li class="breadcrumb-item active text-light" darkMode='text'>${activePage}</li>
				</ol>
			</nav>
		</div>
	</div>`;
	} else {
		return `
	<div class="container-fluid border border-1 pt-3">
	<div class="container">
		<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
			<ol class="breadcrumb p-2">
				<li class="breadcrumb-item"><a href="index.html">Home</a></li>
				<li class="breadcrumb-item active" darkMode='text'>${activePage}</li>
			</ol>
		</nav>
	</div>
</div>`;
	}
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
