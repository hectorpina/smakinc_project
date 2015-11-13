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
