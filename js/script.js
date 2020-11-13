$(document).ready(function() {
	new WOW().init();

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("header .btn-menu").click(function(){
		$(".header-menu").css("display", "block");
	});

	$(".header-menu li").click(function(){
		$(".header-menu").css("display", "none");
	});

	$(".header-menu .close").click(function(){
		$(".header-menu").css("display", "none");
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
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
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.circle').height($('.circle').width());

	var rellax = new Rellax('.rellax');

});




/*Header scrolling styling*/

if(window.matchMedia('(max-width: 1200px)').matches){

	$(window).scroll(function (){
	    $('h1').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+150) {
	            $('header').addClass('scroll');
	        }else{$('header').removeClass('scroll');}
	    });
	});

}else {

	$(window).scroll(function (){
	    $('h1').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+150) {
	            $('header').addClass('scroll');;
	        }else{$('header').removeClass('scroll');}
	    });
	});
};

