var root = document.documentElement;
root.className += ' js';

$(document).ready(function () {
	animeScroll();

	$(document).scroll(function () {

		setTimeout(function () {
			animeScroll()
			animeTextScroll()
			animeScroll2()
			animeText2Scroll()
			animeScroll3()
			animeText3Scroll()
			animeScroll4()
			animeText4Scroll()
			animeScroll5()
			animeText5Scroll()
			animeScroll6()
			animeText6Scroll()
			animeScroll7()
			animeText7Scroll()
			animeScroll8()
			animeText8Scroll()
		}, 500);
	});
});

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

// ANIMAÇÃO COMPOSIÇÃO 1
function animeScroll() {
	
	var comp1 = $('.comp-animacao')
	var comp1AnimationClass = 'comp-animacao-init'
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

}

function animeTextScroll() {
	
	var comp1Text = $('.comp-text-animacao')
	var comp1TextAnimationClass = 'comp-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp1Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp1TextAnimationClass);
		} else {
			$(this).removeClass(comp1TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 2
function animeScroll2() {
	
	
	var comp2 = $('.comp2-animacao')
	var comp22 = $('.comp22-animacao')
	var comp2AnimationClass = 'comp2-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp2.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp2AnimationClass);
		} else {
			$(this).removeClass(comp2AnimationClass);
		}
	});
	comp22.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp2AnimationClass);
		} else {
			$(this).removeClass(comp2AnimationClass);
		}
	});

}

function animeText2Scroll() {
	
	var comp2Text = $('.comp2-text-animacao')
	var comp2TextAnimationClass = 'comp2-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp2Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp2TextAnimationClass);
		} else {
			$(this).removeClass(comp2TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 3
function animeScroll3() {
	
	
	var comp3 = $('.comp3-animacao')
	var comp32 = $('.comp32-animacao')
	var comp33 = $('.comp33-animacao')
	var comp3AnimationClass = 'comp3-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp3.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp3AnimationClass);
		} else {
			$(this).removeClass(comp3AnimationClass);
		}
	});
	comp32.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp3AnimationClass);
		} else {
			$(this).removeClass(comp3AnimationClass);
		}
	});
	comp33.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp3AnimationClass);
		} else {
			$(this).removeClass(comp3AnimationClass);
		}
	});

}

function animeText3Scroll() {
	
	var comp3Text = $('.comp3-text-animacao')
	var comp3TextAnimationClass = 'comp3-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp3Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp3TextAnimationClass);
		} else {
			$(this).removeClass(comp3TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 4
function animeScroll4() {
	
	
	var comp4 = $('.comp4-animacao')
	var comp42 = $('.comp42-animacao')
	var comp43 = $('.comp43-animacao')
	var comp44 = $('.comp44-animacao')
	var comp4AnimationClass = 'comp4-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp4.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp4AnimationClass);
		} else {
			$(this).removeClass(comp4AnimationClass);
		}
	});
	comp42.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp4AnimationClass);
		} else {
			$(this).removeClass(comp4AnimationClass);
		}
	});
	comp43.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp4AnimationClass);
		} else {
			$(this).removeClass(comp4AnimationClass);
		}
	});
	comp44.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp4AnimationClass);
		} else {
			$(this).removeClass(comp4AnimationClass);
		}
	});

}

function animeText4Scroll() {
	
	var comp4Text = $('.comp4-text-animacao')
	var comp4TextAnimationClass = 'comp4-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp4Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp4TextAnimationClass);
		} else {
			$(this).removeClass(comp4TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 5
function animeScroll5() {
	
	
	var comp5 = $('.comp5-animacao')
	var comp52 = $('.comp52-animacao')
	var comp53 = $('.comp53-animacao')
	var comp54 = $('.comp54-animacao')
	var comp5AnimationClass = 'comp5-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp5.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp5AnimationClass);
		} else {
			$(this).removeClass(comp5AnimationClass);
		}
	});
	comp52.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp5AnimationClass);
		} else {
			$(this).removeClass(comp5AnimationClass);
		}
	});
	comp53.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp5AnimationClass);
		} else {
			$(this).removeClass(comp5AnimationClass);
		}
	});
	comp54.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp5AnimationClass);
		} else {
			$(this).removeClass(comp5AnimationClass);
		}
	});

}

function animeText5Scroll() {
	
	var comp5Text = $('.comp5-text-animacao')
	var comp5TextAnimationClass = 'comp5-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp5Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp5TextAnimationClass);
		} else {
			$(this).removeClass(comp5TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 6
function animeScroll6() {
	
	
	var comp6 = $('.comp6-animacao')
	var comp62 = $('.comp62-animacao')
	var comp63 = $('.comp63-animacao')
	var comp64 = $('.comp64-animacao')
	var comp6AnimationClass = 'comp6-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp6.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp6AnimationClass);
		} else {
			$(this).removeClass(comp6AnimationClass);
		}
	});
	comp62.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp6AnimationClass);
		} else {
			$(this).removeClass(comp6AnimationClass);
		}
	});
	comp63.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp6AnimationClass);
		} else {
			$(this).removeClass(comp6AnimationClass);
		}
	});
	comp64.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp6AnimationClass);
		} else {
			$(this).removeClass(comp6AnimationClass);
		}
	});

}

function animeText6Scroll() {
	
	var comp6Text = $('.comp6-text-animacao')
	var comp6TextAnimationClass = 'comp6-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp6Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp6TextAnimationClass);
		} else {
			$(this).removeClass(comp6TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 7
function animeScroll7() {
	
	
	var comp7 = $('.comp7-animacao')
	var comp72 = $('.comp72-animacao')
	var comp73 = $('.comp73-animacao')
	var comp7AnimationClass = 'comp7-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp7.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp7AnimationClass);
		} else {
			$(this).removeClass(comp7AnimationClass);
		}
	});
	comp72.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp7AnimationClass);
		} else {
			$(this).removeClass(comp7AnimationClass);
		}
	});
	comp73.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp7AnimationClass);
		} else {
			$(this).removeClass(comp7AnimationClass);
		}
	});

}

function animeText7Scroll() {
	
	var comp7Text = $('.comp7-text-animacao')
	var comp7TextAnimationClass = 'comp7-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp7Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp7TextAnimationClass);
		} else {
			$(this).removeClass(comp7TextAnimationClass);
		}
	});

}

// ANIMAÇÃO COMPOSIÇÃO 8
function animeScroll8() {
	
	
	var comp8 = $('.comp8-animacao')
	var comp8AnimationClass = 'comp8-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 4);
	var documentTop = $(document).scrollTop();

	comp8.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp8AnimationClass);
		} else {
			$(this).removeClass(comp8AnimationClass);
		}
	});

}

function animeText8Scroll() {
	
	var comp8Text = $('.comp8-text-animacao')
	var comp8TextAnimationClass = 'comp8-text-animacao-init'
	var windowHeight = $(window).height()
	var offset = windowHeight - (windowHeight / 6);
	var documentTop = $(document).scrollTop();

	comp8Text.each(function () {
		if (documentTop > boxTop(this) - offset) {
			$(this).addClass(comp8TextAnimationClass);
		} else {
			$(this).removeClass(comp8TextAnimationClass);
		}
	});

}