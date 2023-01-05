var root = document.documentElement;
root.className += ' js';

$(document).ready(function () {
	animeScroll();

	$(document).scroll(function () {

		setTimeout(function () {
			animeScroll()
			animeScroll2()
		}, 1000);
	});
});

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

function animeScroll() {
	
	var comp1 = $('.comp-animacao')
	var comp1AnimationClass = 'comp-animacao-init'
	var comp2 = $('.comp2-animacao')
	var comp2AnimationClass = 'comp2-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp1.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp1AnimationClass);
		} else {
			$(this).removeClass(comp1AnimationClass);
		}
	});

	comp2.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp2AnimationClass);
		} else {
			$(this).removeClass(comp2AnimationClass);
		}
	});
}