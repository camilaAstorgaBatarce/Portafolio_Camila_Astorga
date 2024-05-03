jQuery(document).ready(function(){
	jQuery('.slider-prototipo').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});