jQuery(document).ready(function(){
	$('input, textarea').placeholder();
	
	$.mask.definitions['~'] = "[+-]";
	$(".iphone").mask("8 (999) 999-99-99");

	$("#slider-top").bxSlider({
		pager: false,
		mode: 'fade',
		captions: true,
		speed: 1000
	});
	
	$( "a.lp-link, a.lp-logo" ).hover(
		function() { $( "a.lp-link, a.lp-logo" ).toggleClass( "selected" ); }, 
		function() { $( "a.lp-link, a.lp-logo" ).toggleClass( "selected" ); }
	);

	$(".fancybox").fancybox({ 
		padding: 0, 
		openEffect : 'elastic', 
		openSpeed : 250, 
		closeEffect : 'elastic', 
		closeSpeed : 250, 
		closeClick : true
	});
	
	$(document).on("scroll", function() {
		if ( $(document).scrollTop() > $(".clear").offset().top + $(".clear").outerHeight() )
			$("#menu").addClass("menu-fixed");
		else
			$("#menu").removeClass("menu-fixed");
	});
	
	$('a.smooth').bind('click.smoothscroll',function (e) {
		e.preventDefault();
 
		var target = this.hash,
		$target = $(target);
 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
	
	jQuery(".callBackLink").click(function(){
		jQuery(".wrOverlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 0.2*$(window).height());	
		jQuery(".callBackBox_PopUp").fadeIn();	
		$('input, textarea').placeholder();		
	});
	
	jQuery(".callBackBtn").click(function(){
		jQuery(".wrOverlay").fadeIn();	
		var Top_modal_window = (jQuery(document).scrollTop() + 0.2*$(window).height());	
		jQuery(".orderBox_PopUp").fadeIn();	
		$('input, textarea').placeholder();		
	});
	
	jQuery(".closePopUpLink").click(function(){
		jQuery(this).parent().fadeOut();
		jQuery(".wrOverlay").fadeOut();
	});

	jQuery(".wrOverlay").click(function(){
		jQuery(".callBackBox_PopUp, .wrOverlay, .okSendBox, .orderBox_PopUp").fadeOut();
	});

	$( "form" ).on("submit", function(event){
		event.preventDefault();

		var form = this;
		$( form ).find( "input[type=submit]" ).attr( "disabled", true );

		$.post(
			$( form ).attr("action"),
			$( form ).serialize(),
			function( data ){
				jQuery( "input.error, textarea.error" ).removeClass( "error" );

				var json = $.parseJSON( data )
				var key = false;

				for ( key in json )
					jQuery( form ).find( "input[name=" + key + "], textarea[name=" + key + "]" ).addClass( "error" );

				if ( !key )
				{
					var Top_modal_window = ( jQuery( document ).scrollTop() + 0.2*$(window).height() );	
					jQuery(".callBackBox_PopUp, .orderBox_PopUp").hide();
					jQuery("input.error, textarea.error").removeClass("error");
					jQuery(".wrOverlay").fadeIn();
					jQuery(".okSendBox").fadeIn().css("top",Top_modal_window+"px");
					setTimeout(function(){
						jQuery(".okSendBox").hide();
						jQuery(".wrOverlay").click();
					}, 2500);
					//yaCounter21803593.reachGoal($(form).attr("goal"));
				}
				
				jQuery( form ).find( "input[type=submit]" ).removeAttr( "disabled" );
			}
		);
	});
});