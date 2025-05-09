  // Get all top-level nav links
AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

jQuery(document).ready(function ($) {

	"use strict";


	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		// $('body').on('click', '.js-menu-toggle', function(e) {
		// 	var $this = $(this);
		// 	e.preventDefault(); // Prevents the link default behavior (e.g., jumping to top)

		// 	if ($('body').hasClass('offcanvas-menu')) {
		// 	  // Menu is open, so close it
		// 	  $('body').removeClass('offcanvas-menu');
		// 	  $this.removeClass('active');
		// 	} else {
		// 	  // Menu is closed, so open it
		// 	  $('body').addClass('offcanvas-menu');
		// 	  $this.addClass('active');
		// 	}
		//   });
		  

		$(document).ready(function () {
			let isHoveringToggle = false;
			let isHoveringMenu = false;

			function updateMenuState() {
				if (!isHoveringToggle && !isHoveringMenu) {
					$('body').removeClass('offcanvas-menu');
				}
			}

			$('.js-menu-toggle').on('mouseenter', function () {
				isHoveringToggle = true;
				$('body').addClass('offcanvas-menu');
			}).on('mouseleave', function () {
				isHoveringToggle = false;
				setTimeout(updateMenuState, 100); // slight delay to allow smooth move
			});

			$('.site-navigation').on('mouseenter', function () {
				isHoveringMenu = true;
			}).on('mouseleave', function () {
				isHoveringMenu = false;
				setTimeout(updateMenuState, 100); // allow time to return
			});
		});

		$(document).ready(function () {
			$('.js-menu-toggle').on('click', function (e) {
				e.preventDefault();
				$('body').toggleClass('offcanvas-menu');
			});

			$('.dropdown-toggle').on('click', function (e) {
				e.preventDefault();
				$(this).next('.submenu').slideToggle(200);
			});

		});

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});

		/* Enable pointer cursor and smoother touch response for submenu links */
		$(document).ready(function () {
			$('.has-submenu > a').on('touchstart click', function (e) {
				e.preventDefault();
				const $submenu = $(this).next('.submenu');
				$('.submenu').not($submenu).slideUp(); // Close others
				$submenu.slideToggle();
			});
		});

	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();

	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 20,
				smartSpeed: 1000,
				autoplay: true,
				nav: true,
				responsive: {
					600: {
						margin: 20,
						nav: true,
						items: 2
					},
					1000: {
						margin: 20,
						stagePadding: 0,
						nav: true,
						items: 3
					}
				}
			});
			$('.custom-next').click(function (e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function (e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})


		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1500,
			autoplay: true,
			pauseOnHover: false,
			dots: true,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});

		if ($('.owl-all').length > 0) {
			$('.owl-all').owlCarousel({
				center: false,
				items: 1,
				loop: false,
				stagePadding: 0,
				margin: 0,
				autoplay: false,
				nav: false,
				dots: true,
				touchDrag: true,
				mouseDrag: true,
				smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					768: {
						margin: 30,
						nav: false,
						responsiveRefreshRate: 10,
						items: 1
					},
					992: {
						margin: 30,
						stagePadding: 0,
						nav: false,
						responsiveRefreshRate: 10,
						touchDrag: false,
						mouseDrag: false,
						items: 3
					},
					1200: {
						margin: 30,
						stagePadding: 0,
						nav: false,
						responsiveRefreshRate: 10,
						touchDrag: false,
						mouseDrag: false,
						items: 3
					}
				}
			});
		}

	};
	siteCarousel();



	var siteCountDown = function () {

		$('#date-countdown').countdown('2020/10/10', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	// siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');

		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top - 50
			}, 600, 'easeInOutExpo', function () {
				// window.location.hash = hash;

			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

	// Stellar
	$(window).stellar({
		horizontalScrolling: false,
		responsive: true,
	});


	var counter = function () {

		$('#about-section').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function () {
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var siteIstotope = function () {
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });

		// filter items on button click
		$('#filters').on('click', 'button', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			$('#filters button').removeClass('active');
			$(this).addClass('active');
		});
	}

	siteIstotope();

});

// filepath: c:\Users\DELL\Desktop\trips-master\js\main.js
$('.gallery-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false, // Disable navigation arrows
	dots: true, // Enable dots
	items: 4, // Display 4 items at a time
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1 // 1 item for small screens
		},
		768: {
			items: 2 // 2 items for medium screens
		},
		992: {
			items: 3 // 3 items for large screens
		}
	}
});

// $(document).ready(function () {
// 	$('.flexslider').flexslider({
// 		animation: "slide",
// 		controlNav: true,
// 		directionNav: true,
// 		slideshow: true,
// 		slideshowSpeed: 4000,
// 		animationSpeed: 600
// 	});

// 	//Back to Top event handler
// 	const backToTopButton = document.querySelector('.back-to-top');

// 	window.addEventListener('scroll', () => {
// 		if (window.pageYOffset > 300) {
// 			backToTopButton.classList.add('active');
// 		} else {
// 			backToTopButton.classList.remove('active');
// 		}
// 	});

// 	backToTopButton.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		window.scrollTo({
// 			top: 0,
// 			behavior: 'smooth'
// 		});
// 	});
// });


// $(document).ready(function () {
// 	// Get the button
// 	var mybutton = $("#btn-back-to-top");
  
// 	// When the user scrolls down 20px from the top of the document, show the button
// 	$(window).on("scroll", function () {
// 	  if ($(this).scrollTop() > 20) {
// 		mybutton.fadeIn();
// 	  } else {
// 		mybutton.fadeOut();
// 	  }
// 	});
  
// 	// When the user clicks on the button, scroll to the top of the document
// 	mybutton.on("click", function () {
// 	  $("html, body").animate({ scrollTop: 0 }, "slow");
// 	});
//   });
  

// // Get the state from the current page
// const currentState = window.location.pathname.includes("ipoh") ? "ipoh" : 
//                      window.location.pathname.includes("penang") ? "penang" : 
//                      window.location.pathname.includes("Sabah") ? "Sabah" : null;

// // Get the form elements
// const commentForm = document.getElementById('comment-form');
// const usernameInput = document.getElementById('username');
// const commentInput = document.getElementById('comment');
// const commentList = document.getElementById('comment-list');

// // Load saved comments from localStorage based on the current state
// let comments = JSON.parse(localStorage.getItem(`${currentState}_comments`)) || [];

// // Function to save comments for the specific state
// function saveComments() {
//   localStorage.setItem(`${currentState}_comments`, JSON.stringify(comments));
// }

// // Function to render the comments
// function renderComments() {
//   commentList.innerHTML = '';  // Clear previous comments
//   comments.forEach((c, index) => {
//     const li = document.createElement('li');
//     li.className = 'list-group-item d-flex justify-content-between align-items-center flex-wrap';
    
//     li.innerHTML = `
//       <div style="flex: 1;">
//         <strong>${c.name}</strong>: <span class="comment-text">${c.text}</span>
//       </div>
//       <div>
//         <button class="btn btn-sm btn-warning mr-2 edit-btn" data-index="${index}">Edit</button>
//         <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
//       </div>
//     `;
//     commentList.appendChild(li);
//   });
// }

// // Initial render of comments
// renderComments();

// // Add new comment
// commentForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const name = usernameInput.value.trim();
//   const text = commentInput.value.trim();

//   if (!name || !text) return;

//   comments.push({ name, text });
//   saveComments();
//   renderComments();

//   // Clear form
//   usernameInput.value = '';
//   commentInput.value = '';
// });

// // Handle edit & delete actions
// commentList.addEventListener('click', function(e) {
//   if (e.target.classList.contains('delete-btn')) {
//     const i = e.target.dataset.index;
//     comments.splice(i, 1);  // Remove the comment
//     saveComments();
//     renderComments();
//   } else if (e.target.classList.contains('edit-btn')) {
//     const i = e.target.dataset.index;
//     const newText = prompt('Edit comment:', comments[i].text);
//     if (newText !== null) {
//       comments[i].text = newText;  // Update the comment text
//       saveComments();
//       renderComments();
//     }
//   }
// });
