const $ = require('jquery');
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
