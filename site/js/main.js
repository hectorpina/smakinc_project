$(function() {
	$( '#ri-grid' ).gridrotator( {
					w320 : {
						rows : 3,
						columns : 4
					},
					w240 : {
						rows : 3,
						columns : 3
					}
				} );

			});

$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:true,
			dots:false,
			autoplay:true,
			autoplayHoverPause:true,
			center:true,
			responsiveClass:true,
			lazyLoad:true,
			mouseDrag:true

	})
	// collagePlus-ify it!
  $('.Collage').collagePlus({
	'allowPartialLastRow' : false,
	'direction': 'horizontal',
	'targetHeight'    : 800
}

	);


$("#mygallery").justifiedGallery();
