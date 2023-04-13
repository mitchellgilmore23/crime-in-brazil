const $ = require('jquery');

export function loader(page) {
	if (page == 'home') {
		//
	} else {
		//
	}
}

export function darkModeHandler(onLoad, loadDarkMode, onClick, clickDarkMode) {
	if (onLoad) {
		const cachedBool = loadDarkMode === 'true';
		if (cachedBool) {
			console.log(`browswerStorage.darkMode=${cachedBool}`);
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
			$('#navbarButton').attr('fill', 'white');
		} else if (!clickDarkMode) {
			$('[darkMode=bg]').removeClass('bg-dark');
			$('[darkMode=text]').removeClass('text-light');
			$('#navbarButton').attr('fill', 'black');

			localStorage.setItem('darkMode', false);
		} else {
			console.error('ERROR: DarkModeHandler ELSE ON CLICK if statement.');
		}
	}
}

export function navbar(dark) {
	if (dark) {
		return `
			<nav class="navbar navbar-expand-lg pb-0" darkMode='bg'>
			<div class="container-fluid border-2 border-bottom pb-2">
				<button class="navbar-toggler w-100 border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list" viewBox="0 0 16 16" id='navbarButton'>
						<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
					</svg>
				</button>
				<div class="navbar-collapse collapse" id="navbarText">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">

						<li class="nav-item">
							<a class="nav-link active text-light" darkMode='text' href="./Home.html">Home</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Violence In Brazil.html">Violence</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Income Inequality.html">Income Inequality</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Political Corruption.html">Political Corruption</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

						<li class="nav-item">
							<a class="nav-link text-light" darkMode='text' href="./Human Trafficking.html">Human Trafficking</a>
						</li>
						<div class="vr d-none d-lg-block" darkMode='text'></div>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

						<li class="nav-item">
							<a class="nav-link  text-light" darkMode='text' href="./Racism.html">Racism</a>
						</li>
						<hr class='d-block d-lg-none m-0' darkMode='text'>

					</ul>
					<div class="hstack gap-3 justify-content-center mt-2 pt-2 mt-lg-0 pt-lg-0">
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
		<nav class="navbar navbar-expand-lg pb-0" darkMode='bg'>
		<div class="container-fluid border-2 border-bottom pb-2">
			<button class="navbar-toggler w-100 border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-list" viewBox="0 0 16 16" id='navbarButton'>
			<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
		</svg>			
		</button>
			<div class="navbar-collapse collapse" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
					<li class="nav-item">
						<a class="nav-link active" darkMode='text' href="./Home.html">Home</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<hr class='d-block d-lg-none m-0' darkMode='text'>

					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Violence In Brazil.html">Violence</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<hr class='d-block d-lg-none m-0' darkMode='text'>

					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Income Inequality.html">Income Inequality</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<hr class='d-block d-lg-none m-0' darkMode='text'>


					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Political Corruption.html">Political Corruption</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<hr class='d-block d-lg-none m-0' darkMode='text'>


					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Human Trafficking.html">Human Trafficking</a>
					</li>
					<div class="vr d-none d-lg-block" darkMode='text'></div>
					<hr class='d-block d-lg-none m-0' darkMode='text'>


					<li class="nav-item">
						<a class="nav-link" darkMode='text' href="./Racism.html">Racism</a>
					</li>
					<hr class='d-block d-lg-none m-0' darkMode='text'>

				</ul>
				<div class="hstack gap-3 justify-content-center mt-2 pt-2 mt-lg-0 pt-lg-0">
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
		return `	
		<div class="container-fluid border-bottom d-flex" darkMode='bg' style='--bs-gutter-x:100px'>
			<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
				<ol class="breadcrumb" style='margin-top:9px;margin-bottom:8px'>
					<li class="breadcrumb-item"><a href="./Home.html">Home</a></li>
					<li class="breadcrumb-item active text-light" darkMode='text'>${activePage}</li>
				</ol>
			</nav>
	</div>`;
	} else {
		return `
	<div class="container-fluid border-bottom d-flex" darkMode='bg' style='background-color:#ededed;--bs-gutter-x:100px'>
		<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
		<ol class="breadcrumb" style='margin-top:9px;margin-bottom:8px'>
				<li class="breadcrumb-item"><a href="./Home.html">Home</a></li>
				<li class="breadcrumb-item active" darkMode='text'>${activePage}</li>
			</ol>
		</nav>
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
	agFlag = false,
	agPosY = 0;
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
