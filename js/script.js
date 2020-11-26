$(document).ready(function () {
	new WOW().init();

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("header .btn-menu").click(function () {
		$(".header-menu").css("display", "block");
	});

	$(".header-menu li").click(function () {
		$(".header-menu").css("display", "none");
	});

	$(".header-menu .close").click(function () {
		$(".header-menu").css("display", "none");
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		closeOnBgClick: false,

		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.replenish-popup').click(function () {
		$.magnificPopup.open({
			items: {
				src: $('#replenish-popup').html(),
				type: 'inline'
			}
		});
	});


	$('.circle').height($('.circle').width());

	var rellax = new Rellax('.rellax');

	$(".calculator .package").click(function () {
		$(".calculator .package").removeClass('active');
		$(this).addClass('active');
		var tariff = $(".calculator .package.active .package-num .name").text();
		var percent = $(".calculator .package.active .percent .day > span").text();
		$(".calculator .package-calc .tariff .title > span").text(tariff);
		$(".calculator .package-calc .tariff .percent").text(percent);
		$(".calculator .package-calc .list .info.percent").text(percent);
	});

	$(".affiliate-program .copy").click(function () {
		var copyText = $(".affiliate-program .ref");
		copyText.select();
		document.execCommand("copy");
	});


	$('.trading-history .slider').slick({
		infinite: true,
		slidesToShow: 3,
		swipeToSlide: true,

		prevArrow: '<div id="prev"><img src="img/icons/left-arrow.svg"></div>',
		nextArrow: '<div id="next"><img src="img/icons/right-arrow.svg"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]

	});

	$('.select').on('click', '.select__head', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		} else {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		}
	});

	$('.select').on('click', '.select__item', function () {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).text());
	});

	$(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
		}
	});


	$('.program-table .table .table-body.b1-parent .item:first-child').click(function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.program-table .table .table-body.b1-child').css("display", "none")
			$('.program-table .table .table-body.b2-parent .item:first-child').removeClass('open');
			$('.program-table .table .table-body.b2-child').css("display", "none")
		} else {
			$(this).addClass('open');
			$('.program-table .table .table-body.b1-child').css("display", "flex")
		}
	});
	$('.program-table .table .table-body.b2-parent .item:first-child').click(function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.program-table .table .table-body.b2-child').css("display", "none")
		} else {
			$(this).addClass('open');
			$('.program-table .table .table-body.b2-child').css("display", "flex")
		}
	});



	Chart.defaults.global.defaultFontColor = '#6B6EAF';
	Chart.defaults.global.defaultFontFamily = "Montserrat";

	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['7.11.2020', '14.11.2020', '21.11.2020', '28.11.2020', '4.12.2020', '11.12.2020', '12.12.2020', '12.12.2020'],
			datasets: [{
				backgroundColor: 'transparent',
				borderColor: '#793ce8',
				data: [-5500, -2000, -3500, 500, 2000, 0, 5000, 2000],
				pointBackgroundColor: '#793CE8',
				pointRadius: 7,
				pointHoverRadius: 9,
				lineTension: 0, /*плавный или резкий*/
			}]

		},

		// Configuration options go here
		options: {
			legend: {
				display: false
			}
		}
	});

	$(".cabinet .stat .right .select-date .item").click(function () {
		$(".cabinet .stat .right .select-date .item").removeClass('active');
		$(this).addClass('active');
	});

	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('.');
	$(".balance .sum .dollar").each(function () {
		var tcount = $(this).data("count");
		$(this).animateNumber({
			number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step
		},
			500);
	});

	$(".balance .sum .btc").each(function () {
		var tcount = $(this).data("count");
		$(this).animateNumber({
			number: tcount,
			easing: 'easeInQuad'
		},
			500);
	});





});




/*Header scrolling styling*/

if (window.matchMedia('(max-width: 1200px)').matches) {

	$(window).scroll(function () {
		$('.content').each(function () {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 50) {
				$('header').addClass('scroll');
			} else { $('header').removeClass('scroll'); }
		});
	});

} else {

	$(window).scroll(function () {
		$('.content').each(function () {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 50) {
				$('header').addClass('scroll');;
			} else { $('header').removeClass('scroll'); }
		});
	});
};

$(function () {
	function change() {
		this.value.indexOf(this.defaultValue) && (this.value = this.defaultValue);
	}
	$(".affiliate-program .ref").on("input", change);
});
