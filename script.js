(function ( $ ) {
	var slider = $( '#slider' ).unslider({
		arrows: false
	});
	
	var images = [
		'a-cruise-ship-high-res-wallpaper.jpg',
		'cargo-vessel.jpg'
	];
	
	var counter = 0;
	
	changeSliderBackground();
	
	$( '#slider-prev' ).click(function () {
		slider.unslider( 'prev' );
		
		counter = ( counter === 0 ? images.length - 1 : --counter );
		changeSliderBackground();
	});
	
	$( '#slider-next' ).click(function () {
		slider.unslider( 'next' );
		
		counter = ( counter === images.length - 1 ? 0 : ++counter );
		changeSliderBackground();
	});
	
	function changeSliderBackground() {
		$( '#slider-area' ).css( 'backgroundImage', 'url("' + images[counter] + '")' );
	}
})( jQuery );