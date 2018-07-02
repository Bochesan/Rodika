$(document).ready(function(){

	$('#slider_1').slick({
		dots: true
	});

	$('#slider_2').owlCarousel({
		center: true,
	    items:3,
	    loop:true,
	    nav: true
	});

	$('#rp_carousel').owlCarousel({
	    items:1,
	    nav: true,
	    responsive : {
		    1180 : {
		        items:6
		    },
		    1000 : {
		    	items: 4
		    }
		}
	});

	$('.btn_menu').click(function(){
		$('nav').toggle();
		$('li.podmenu').removeClass('active');
		return false;
	});

	$('li.podmenu').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');	
		}
		else {
			$('li.podmenu').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.close_menu').click(function(){
		$('nav').toggle();
		$('li.podmenu').removeClass('active');
		return false;
	});

	$('.sab').click(function(){
		$('.equip').css({'display':'block'});
		$(this).hide();
		return false;
	});

	$('.mobile_lm_btn').click(function(){
		$('.left_menu').toggleClass('active');
		return false;
	});

});