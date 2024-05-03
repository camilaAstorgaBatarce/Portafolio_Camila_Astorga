jQuery(document).ready(function(){
	jQuery('.slider-prototipo-wireframe').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		infinite: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
});