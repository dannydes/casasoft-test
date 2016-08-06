(function ( $ ) {
	var slider = $( '#slider' ).unslider({
		arrows: false
	});
	
	$( '#slider-prev' ).click(function () {
		slider.unslider( 'prev' );
	});
	
	$( '#slider-next' ).click(function () {
		slider.unslider( 'next' );
	});
})( jQuery );