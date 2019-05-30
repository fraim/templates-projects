$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	});
	$('.burg').click(function(){
		$('.header-menu').toggleClass('show');
		$('.burg').toggleClass('burg-active');
		return false;
	});
	$('.slide-next').click(function () {
		var currentImage = $('.img.img-active');
		var currentImageIndex = $('.img.img-active').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(50);
		currentImage.removeClass('img-active');
		if (nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(50);
			$('.img').eq(0).addClass('img-active');
		}
		else{
			nextImage.fadeIn(50);
			nextImage.addClass('img-active');
		}
	});
	$('.slide-prev').click(function () {
		var currentImage = $('.img.img-active');
		var currentImageIndex = $('.img.img-active').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);
		currentImage.fadeOut(50);
		currentImage.removeClass('img-active');
		if (prevImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(50);
			$('.img').eq(0).addClass('img-active');
		}
		else{
			prevImage.fadeIn(50);
			prevImage.addClass('img-active');
		}
	});

	var count = $('.img').length;
    $("#total").text(count);
    var $slides_next = $('.next');
    var $slides_prev = $('.prev');
    $slides_next.click(function () {
        var $current = $('.img-active');
        if ($current.is($('.img').last())) {
            $("#current").text("1");
            $current.hide();
            $slides_next.first().show();
        }
        else {
            $("#current").text($current.next().index()+1);
            $current.hide().next().fadeIn(50);
        }
    });
     $slides_prev.click(function () {
        var $current = $('.img-active');
        if ($current.is($('.img').last())) {
            $("#current").text($current.prev().index()+1);
            $current.hide();
           $slides_prev.last().show();
        }
        else {
            $("#current").text($current.next().index()+1);
            $current.hide().prev().fadeIn(50);
        }
    });


	$('.slide-next-news').click(function () {
		var currentImage = $('.lastnews-box.lastnews-box-active');
		var currentImageIndex = $('.lastnews-box.lastnews-box-active').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.lastnews-box').eq(nextImageIndex);
		currentImage.fadeOut(50);
		currentImage.removeClass('lastnews-box-active');
		if (nextImageIndex == ($('.lastnews-box:last').index()+1)){
			$('.lastnews-box').eq(0).fadeIn(50);
			$('.lastnews-box').eq(0).addClass('lastnews-box-active');
		}
		else{
			nextImage.fadeIn(50);
			nextImage.addClass('lastnews-box-active');
		}
	});
	$('.slide-prev-news').click(function () {
		var currentImage = $('.lastnews-box.lastnews-box-active');
		var currentImageIndex = $('.lastnews-box.lastnews-box-active').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.lastnews-box').eq(prevImageIndex);
		currentImage.fadeOut(50);
		currentImage.removeClass('lastnews-box-active');
		if (prevImageIndex == ($('.lastnews-box:last').index()+1)){
			$('.lastnews-box').eq(0).fadeIn(50);
			$('.lastnews-box').eq(0).addClass('lastnews-box-active');
		}
		else{
			prevImage.fadeIn(50);
			prevImage.addClass('lastnews-box-active');
		}
	});

	var count = $('.lastnews-box').length;
    $("#total-news").text(count);
    var $slides_next = $('.next-news');
    var $slides_prev = $('.prev-news');
    $slides_next.click(function () {
        var $current = $('.lastnews-box-active');
        if ($current.is($('.lastnews-box').last())) {
            $("#current-news").text("1");
            $current.hide();
            $slides_next.first().show();
        }
        else {
            $("#current-news").text($current.next().index()+1);
            $current.hide().next().fadeIn(50);
        }
    });
     $slides_prev.click(function () {
        var $current = $('.lastnews-box-active');
        if ($current.is($('.lastnews-box').last())) {
            $("#current-news").text($current.prev().index()+1);
            $current.hide();
           $slides_prev.last().show();
        }
        else {
            $("#current-news").text($current.next().index()+1);
            $current.hide().prev().fadeIn(50);
        }
    });
});