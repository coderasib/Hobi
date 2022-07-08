(function ($) {
	"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992",
		onePage: true
	});




	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})


	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
	// header stiky
	$(".header-area").sticky({ topSpacing: 0 });

	// Menu Nav
	function smoothSctollTop() {
		$('.meinmenu ul > li.smoth-menu > a[href^="#"],.mean-nav ul > li > a[href^="#"]').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 90
				}, 1000);
			}
		});
	}
	smoothSctollTop();

	// menu active class
	// $("#menu-main-menu > li:first-child > a").addclass('active');
	// for menu active class
	$(".meinmenu ul li a").on('click',function () {
		$(".mainmenu-activ li a").removeClass("active");
		$('this').addClass('.active');
	});

	// mainmenu end
	// owlCarousel
	$('.clients-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			992: {
				items: 1
			}
		}
	})


		// One Page Nav
		var top_offset = $('.header-area').height() - 10;
		$('.main-menu nav ul').onePageNav({
			currentClass: 'active',
			scrollOffset: top_offset,
		});
	
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 245) {
				$(".header-sticky").removeClass("sticky");
			} else {
				$(".header-sticky").addClass("sticky");
			}
		});


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});



	// isotop

	$('.grid').imagesLoaded(function () {

		// init Isotope

		var $grid = $('.grid').isotope({

			itemSelector: '.grid-item',

			percentPosition: true,

			masonry: {

				// use outer width of grid-sizer for columnWidth

				columnWidth: '.grid-item',

			}

		});

		// filter items on button click

		$('.portfolio-menu').on('click', 'button', function () {

			var filterValue = $(this).attr('data-filter');

			$grid.isotope({ filter: filterValue });

		});

	});



	//for menu active class

	$('.portfolio-menu button').on('click', function (event) {

		$(this).siblings('.active').removeClass('active');

		$(this).addClass('active');

		event.preventDefault();

	});

	// scrollUp
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// google map

	function basicmap() {

		// Basic options for a simple Google Map

		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

		var mapOptions = {

			// How zoomed in you want the map to start at (always required)

			zoom: 11,

			scrollwheel: false,

			// The latitude and longitude to center the map (always required)

			center: new google.maps.LatLng(23.935169, 89.000893), // New York

			// This is where you would paste any style found on Snazzy Maps.

			styles: [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 13
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#144b53"
						},
						{
							"lightness": 14
						},
						{
							"weight": 1.4
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#08304b"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#0c4152"
						},
						{
							"lightness": 5
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#0b434f"
						},
						{
							"lightness": 25
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#0b3d51"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"color": "#146474"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#021019"
						}
					]
				}
			]

		};

		// Get the HTML DOM element that will contain your map

		// We are using a div with id="map" seen below in the <body>

		var mapElement = document.getElementById('contact-map');



		// Create the Google Map using our element and options defined above

		var map = new google.maps.Map(mapElement, mapOptions);



		// Let's also add a marker while we're at it

		var marker = new google.maps.Marker({

			position: new google.maps.LatLng(23.935169, 89.000893),

			map: map,

			title: 'Cryptox'

		});

	}

	if ($('#contact-map').length != 0) {

		google.maps.event.addDomListener(window, 'load', basicmap);

	}

	// counter
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});



	// WOW active
	new WOW().init();



})(jQuery);