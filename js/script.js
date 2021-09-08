$(document).ready(function(burger) {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(burger) {
	$('.header__menu').click(function(event){
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

$(document).ready(function(){
	var controls = {
		video: $(".video__clip"),
		playpause: $(".video__playpause")
	};

	var video = controls.video[0];

	controls.playpause.click(function(){
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}

		$(this).toggleClass("paused");
	});
});

$(document).ready(function() {
	$('.item-footer__title').click(function(event) {
		/*при добавлении к блоку one добавляем следующие три строки*/
		if($('.footer__row').hasClass('one')){
			$('.item-footer__title').not($(this)).removeClass('active');
			$('.item-footer__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});