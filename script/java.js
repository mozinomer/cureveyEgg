function myFunction(x) {
	x.classList.toggle("change");
	$(".nav-bar").toggleClass("active");
	$(".mobileMenu").toggleClass("active");
	$('body').toggleClass("active");
}


if ($(window).width() < 767) {
	$(window).scroll(function () {
		var $height = $(window).scrollTop();
		if ($height > 100) {
			$('header').addClass('active')
		} else {
			$('header').removeClass('active')
		};

	});
}

function myFunction2(x) {

	$(".login-facebook").toggleClass("active");
	$(".menu-bar.facebook").toggleClass("change");
	
}
function myFunction3(x) {

	$(".login-facebook").toggleClass("active");
	$(".menu-bar.facebook").toggleClass("change");
	
}
