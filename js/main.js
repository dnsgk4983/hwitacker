 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {
	$('.dropdown-toggle').click(function(){
		$('.dropdown-menu').stop().slideToggle();
	});
	var swiper1 = new Swiper('.swiper1', {
		slidesPerView: 5,
		spaceBetween: 0,
		pagination: false,
		breakpoints: {
			1200: {
				slidesPerView: 4,
				loop: true,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2
			}

		}
	});

	var swiper2 = new Swiper('.taker-tab', {
		slidesPerView: 7,
		pagination: false,
		navigation: {
			nextEl: '.taker-tab .swiper-button-next',
			prevEl: '.taker-tab .swiper-button-prev',
		  },
  });

	$('.search-item li').first().addClass("activeClass");
  	$(".tab-contents").not(':first').hide();
  
    $('.search-item li').on('click',function(){
      $(this).addClass("activeClass").siblings().removeClass("activeClass");
      var link = $(this).find("a").attr("href");
      var link_num = link.substr(link.length-1);
      $("select#tabmenu option").eq(link_num-1).prop("selected", "selected");
      $(".tab-contents").hide();
      $(link).show();
    });
    
    $("select#tabmenu").on("change",function(){
      var select_link = $("select#tabmenu").val();
      var select_num = $(this).prop('selectedIndex');
      $('.search-item li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
      $(".tab-contents").hide();
      $(select_link).show();
      console.log(select_link);
    });

	// 인트로 페이지 로그인 팝업 jQuery
	$('.cta a').on('click', function(){
		$('.login-popup').css('display','block');
	});
	$('.login-close a').on('click',function(){
		$('.login-popup').css('display', 'none');
	});

	// 메인페이지 마이페이지 팝업 jQuery

	$('.toggle-mp').on('click',function(){
		$('.mp-popup').css('display','block');
	});
	$('.mp-close').on('click',function(){
		$('.mp-popup').css('display','none');
	});

	try{Typekit.load({ async: true });}catch(e){}
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	$("#profile-img").click(function() {
		$("#status-options").toggleClass("active");
	});
	$(".expand-button").click(function() {
	$("#profile").toggleClass("expanded");
		$("#contacts").toggleClass("expanded");
	});
	$("#status-options ul li").click(function() {
		$("#profile-img").removeClass();
		$("#status-online").removeClass("active");
		$("#status-away").removeClass("active");
		$("#status-busy").removeClass("active");
		$("#status-offline").removeClass("active");
		$(this).addClass("active");
		if($("#status-online").hasClass("active"))
			$("#profile-img").addClass("online");
		else if ($("#status-away").hasClass("active"))
			$("#profile-img").addClass("away");
		else if ($("#status-busy").hasClass("active"))
			$("#profile-img").addClass("busy");
		else if ($("#status-offline").hasClass("active"))
			$("#profile-img").addClass("offline");
		else
			$("#profile-img").removeClass();
		$("#status-options").removeClass("active");
	});
	function newMessage() {
		message = $(".message-input input").val();
		if($.trim(message) === '')
			return false;
		$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
		$('.message-input input').val(null);
		$('.contact.active .preview').html('<span>You: </span>' + message);
		$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	}
	$('.submit').click(function() {
	newMessage();
	});
	$(window).on('keydown', function(e) {
	if (e.which == 13) {
		newMessage();
		return false;
	}
	});


	// 차트
	
	$('.vertical .progress-fill span').each(function(){
		var percent = $(this).html();
		var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
		$(this).parent().css({
		  'height' : percent,
		  'top' : pTop
		});
	  });
	  
	  $('.progress-fill').on('mousemove', displayTooltip);
	  $('.progress-fill').on('mouseleave', hideTooltip);
	  
	  function displayTooltip(e) {
		var x = e.pageX; 
		var y = e.pageY;
		$('.info-card').css('display', 'inline-flex');
		$('.info-card').css('position', 'absolute');
		$('.info-card').css('left', x - 55);
		$('.info-card').css('top', y - 70);
		$('.info-card').children('.card-text').text($(this).text());
	  }
	  
	  function hideTooltip() {
		$('.info-card').css('display', 'none');
	  }

	


	"use strict";

	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	

	var siteMenuClone = function() {


		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});
		


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 800,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          	items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 800,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  $('.slide-one-item-alt').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    onDragged: function(event) {
	    	console.log('event : ',event.relatedTarget['_drag']['direction'])
	    	if ( event.relatedTarget['_drag']['direction'] == 'left') {
	    		$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	    	} else {
	    		$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	    	}
	    }
	  });
	  $('.slide-one-item-alt-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    onDragged: function(event) {
	    	console.log('event : ',event.relatedTarget['_drag']['direction'])
	    	if ( event.relatedTarget['_drag']['direction'] == 'left') {
	    		$('.slide-one-item-alt').trigger('next.owl.carousel');
	    	} else {
	    		$('.slide-one-item-alt').trigger('prev.owl.carousel');
	    	}
	    }
	  });

	  


	  $('.custom-next').click(function(e) {
	  	e.preventDefault();
			$('.slide-one-item-alt').trigger('next.owl.carousel');
			$('.slide-one-item-alt-text').trigger('next.owl.carousel');
		});
		$('.custom-prev').click(function(e) {
			e.preventDefault();
		  $('.slide-one-item-alt').trigger('prev.owl.carousel');
		  $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
		});

		


	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 800, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  var counter = function() {
		
		$('.section-counter, .pricing-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	// 메인 슬라이드 slick



});

function getThumbnailPrivew(html, $target) {
    if (html.files && html.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $target.css('display', '');
            //$target.css('background-image', 'url(\"' + e.target.result + '\")'); // 배경으로 지정시
            $target.html('<img src="' + e.target.result + '" border="0" alt="" />');
        }
        reader.readAsDataURL(html.files[0]);
    }
}





var ctx = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["여자", "남자"],
        datasets: [{
            backgroundColor: [
                "#ff6d6d", "#3868e8"
            ],
            data: [39, 61],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: true,
        },
		tooltips: {
			callbacks: {
			  label: function(tooltipItem, data) {
				//get the concerned dataset
				var dataset = data.datasets[tooltipItem.datasetIndex];
				//calculate the total of this data set
				var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
				  return previousValue + currentValue;
				});
				//get the current items value
				var currentValue = dataset.data[tooltipItem.index];
				//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
				var percentage = Math.floor(((currentValue/total) * 100)+0.5);
		  
				return percentage + "%";
				}
			}
		} 
	
	}
});







