// jQuery code
// Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function (e) {
	e.stopPropagation();
});


$(window).on('load', function () {
	window.onscroll = function () {
		myFunction()
	};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
		// console.log(window.pageYOffset)
		if (window.pageYOffset > sticky) {
			navbar.classList.add("navSizing")
		} else {
			navbar.classList.remove("navSizing");
		}
	}


	// var viewMode = getCookie("view-mode");
	// if (viewMode == "desktop") {
	// 	viewport.setAttribute('content', 'width=1024');
	// } else if (viewMode == "mobile") {
	// 	viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
	// }


	$(function () {
		var availableTags = [
			"ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++",
			"Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran",
			"Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl",
			"PHP", "Python", "Ruby", "Scala", "Scheme"
		];

		$(".autocomplete").autocomplete({
			source: availableTags
		});
	});
	var partnerSwiper = new Swiper('.partners-container', {
		// cssWidthAndHeight: true,
		// slidesPerView: 'auto',
		slidesPerView: 5,
		visibilityFullFit: true,
		autoResize: false,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.partners-button-next',
			prevEl: '.partners-button-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	dynamicBullets: true,

		// },
	});

	$('.quick-header').on('click', '.search-toggle', function (e) {
		var selector = $(this).data('selector');

		$(selector).toggleClass('show').find('.search-input').focus();
		$(this).toggleClass('active');
		$('.dimmed').toggleClass('active');
		$('.related-keyward ').removeClass('active');
		e.preventDefault();
	});
	$('.quick-header').on('click', '.dimmed', function (e) {
		$('#navbar').toggleClass('show')
		$(this).toggleClass('active');
		$('.search-toggle').toggleClass('active');
		$('.related-keyward ').removeClass('active');
		e.preventDefault();
	});
	// 테스트용
	$(document).on('keydown', '.search-input', function () {
		$('.related-keyward ').addClass('active');
	});
})