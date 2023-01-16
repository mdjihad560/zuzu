(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]

zuzu STICKY MENU JS INIT
zuzu COUNTER JS INIT
zuzu TEXT SLIDER
zuzu TEXT SLIDER 2
zuzu CLIENT SLIDER
zuzu CLIENT SLIDER 2
zuzu TESTIMONIAL SLIDER
zuzu TESTIMONIAL SLIDER 2
zuzu PRICING TABLE JS INIT
zuzu SCROLL EFFECT TWO JS INIT 01
zuzu SCROLL EFFECT TWO JS INIT 02
zuzu MAGNIFIC POPUP JS INIT
zuzu GALLERY MASONAY FILTER JS 01
zuzu GALLERY MASONAY FILTER JS 02
zuzu GALLERY MASONAY FILTER JS 03
zuzu MAP JS
  
  -------------------------------------------------------------------*/
  
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){



/*--------------------------------------------------------------
zuzu PRELOADER JS INIT
--------------------------------------------------------------*/

  $(".zuzu-preloader").fadeOut(500);

/*--------------------------------------------------------------
zuzu SCROLL TOP JS INIT
--------------------------------------------------------------*/
      //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.zuzu-go-top').fadeIn('slow');
    if (scrolled < 200) $('.zuzu-go-top').fadeOut('slow');
  });
  
  //Click event
  $('.zuzu-go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

    
/*--------------------------------------------------------------
zuzu STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

/*--------------------------------------------------------------
zuzu COUNTER JS INIT
--------------------------------------------------------------*/
var zuzu_counter = $('#zuzu-counter');
  if(zuzu_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(zuzu_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.zuzu-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}


/*--------------------------------------------------------------
zuzu TEXT SLIDER
--------------------------------------------------------------*/
  var zuzu_text_slider = $('.zuzu-text-slider1');
  if(zuzu_text_slider.is_exist()){
    zuzu_text_slider.slick({
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true , 
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnHover:true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

    ]
  });

}

/*--------------------------------------------------------------
zuzu TEXT SLIDER 2
--------------------------------------------------------------*/
var zuzu_text_slider2 = $('.zuzu-text-slider2');
if(zuzu_text_slider2.is_exist()){
  zuzu_text_slider2.slick({
  rtl: true,
  infinite: true,
  slidesToShow: 2, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }

  ]
});

}

/*--------------------------------------------------------------
zuzu CLIENT SLIDER
--------------------------------------------------------------*/
var zuzu_client_slider = $('.zuzu-client-slider');
if(zuzu_client_slider.is_exist()){
  zuzu_client_slider.slick({
  infinite: true,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
zuzu CLIENT SLIDER 2
--------------------------------------------------------------*/
var zuzu_client_slider2 = $('.zuzu-client-slider2');
if(zuzu_client_slider2.is_exist()){
  zuzu_client_slider2.slick({
  rows: 2,
  infinite: true,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
zuzu TESTIMONIAL SLIDER
--------------------------------------------------------------*/
var zuzu_testimonial_slider = $('.zuzu-testimonial-slider');
if(zuzu_testimonial_slider.is_exist()){
  zuzu_testimonial_slider.slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerPadding: '180px',
    arrows: false,
    dots: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 2000,
    
    responsive: [
    {
      breakpoint: 1499,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        centerPadding: '70px',
      }
      
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerPadding: '70px',
      }
      
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: '0',
      }
      
    },

    ]
  });

}

/*--------------------------------------------------------------
zuzu PRICING TABLE JS INIT
------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target)
          .parent()
          .parent()
          .removeClass("monthly-active")
          .addClass("yearly-active");
      } else {
        $(e.target)
          .parent()
          .parent()
          .removeClass("yearly-active")
          .addClass("monthly-active");
      }
    });

    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });


/*--------------------------------------------------------------
zuzu SCROLL EFFECT TWO JS INIT 01
------------------------------------------------------------*/
var $rotateTwo = $('#rotatetwo');
var $win = $(window);
$win.on('scroll', function () {
  var right = 16-$win.scrollTop()*0.01;
  $rotateTwo.css('transform', 'rotate(' + right + 'deg)');
});

/*--------------------------------------------------------------
zuzu SCROLL EFFECT TWO JS INIT 02
------------------------------------------------------------*/
var $rotateThree = $('#rotatethree');
var $win = $(window);
$win.on('scroll', function () {
  var right = 41-$win.scrollTop()*0.01;
  $rotateThree.css('transform', 'rotate(' + right + 'deg)');
});

/*--------------------------------------------------------------
zuzu MAGNIFIC POPUP JS INIT
------------------------------------------------------------*/
var popup_youtube = $('.zuzu-popup');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}

// fugo old versions

/*--------------------------------------------------------------
NEXTO SLIDER ONE
--------------------------------------------------------------*/
// var nexto_slider_one = $('.zuzu--slider-one');
//   if(nexto_slider_one.is_exist()){
//     nexto_slider_one.slick({
//       infinite: true,
//       slidesToShow: 4, 
//       slidesToScroll: 1,
//       arrows: true,
//       autoplay: false,
//       autoplay: true,
// 	    autoplaySpeed: 2000,
//       prevArrow: '<button class="slide-arrow prev-arrow"></button>',
// 			nextArrow: '<button class="slide-arrow zuzu--arrow"></button>',
//       responsive: [
//         {
//           breakpoint: 1400,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false
//           }
//         }
    
//       ]
//     });
//   }

/*--------------------------------------------------------------
NEXTO SLIDER TWO
--------------------------------------------------------------*/
var zuzu_card_slider = $('.zuzu-card-slider');
if( zuzu_card_slider.is_exist()){
    zuzu_card_slider.slick({
    infinite: true,
    slidesToShow: 6, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true, 
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnHover:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
  
    ]
  });
}


/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var nexto_text_slider = $('.zuzu-text-slider');
if(nexto_text_slider.is_exist()){
  nexto_text_slider.slick({
  infinite: true,
  slidesToShow: 2, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }

  ]
});

}

/*--------------------------------------------------------------
SCROLL EFFECT ONE JS INIT
------------------------------------------------------------*/
var $rotateOne = $('#rotateOne');
var $win = $(window);
$win.on('scroll', function () {
  var right = 3-$win.scrollTop()*0.01;
  $rotateOne.css('transform', 'rotate(' + right + 'deg)');
});

/*--------------------------------------------------------------
NEXTO SWIPER SLIDER JS INIT
------------------------------------------------------------*/
var swiper_slider = $('.zuzu--swiper-slider');
if (swiper_slider.is_exist()){
  swiper_slider = new Swiper(".zuzu--swiper-slider", {
  loop: true,
  effect: "cards",
  grabCursor: true,
  autoplay: true,
});
}

/*--------------------------------------------------------------
CARD LIKE JS INIT
------------------------------------------------------------*/
const nextoBtnTigger = document.querySelectorAll('.zuzu--tigger');
  nextoBtnTigger.forEach(linkbtn => {
    linkbtn.addEventListener('click', () => {
      linkbtn.classList.toggle("dark-btn");
    });
  })


/*--------------------------------------------------------------
zuzu MAGNIFIC POPUP JS INIT  new add
------------------------------------------------------------*/
var popup_youtube = $('.zuzu-popup');
if (popup_youtube.is_exist()){
    popup_youtube.magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade'
});

}



/*--------------------------------------------------------------
zuzu THUMB MOVE JS INIT_EVENT
--------------------------------------------------------------*/
// const image = document.querySelector(".zuzu-tilt");

// image.addEventListener("mousemove", event => {
//   const { top, bottom, left, right } = event.target.getBoundingClientRect();

//   const middleX = (right - left) / 2;
//   const middleY = (bottom - top) / 2;

//   const clientX = event.clientX;
//   const clientY = event.clientY;

//   const offsetX = (clientX - middleX) / middleX;
//   const offsetY = (middleY - clientY) / middleY;

//   event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
//     5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
// });



 
  });/*End document ready*/
  
  
  $(window).on("resize", function(){
    
  
  }); // end window resize
  
  
  $(window).on("load" ,function(){
 /*--------------------------------------------------------------
zuzu GALLERY MASONAY FILTER JS 01
------------------------------------------------------------*/
var zuzu_gallery_masonay1 = $('#zuzu-gallery-masonay1');
if(zuzu_gallery_masonay1.is_exist()){
  var $container = $(zuzu_gallery_masonay1),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 4;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 2;
      } else if (w > 450) {
        columnNum  = 2;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.zuzu-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/zuzu-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/zuzu-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          // height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.zuzu-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.zuzu-gallery-menu .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


/*--------------------------------------------------------------
zuzu GALLERY MASONAY FILTER JS 02
------------------------------------------------------------*/
var zuzu_gallery_masonay2 = $('#zuzu-gallery-masonay2');
if(zuzu_gallery_masonay2.is_exist()){
  var $container = $(zuzu_gallery_masonay2),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 2;
      } else if (w > 900) {
        columnNum  = 2;
      } else if (w > 600) {
        columnNum  = 1;
      } else if (w > 450) {
        columnNum  = 1;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.zuzu-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/zuzu-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/zuzu-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          // height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.zuzu-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.zuzu-gallery-menu .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


/*--------------------------------------------------------------
zuzu GALLERY MASONAY FILTER JS 03
------------------------------------------------------------*/
var zuzu_gallery_masonay3 = $('#zuzu-gallery-masonay3');
if(zuzu_gallery_masonay3.is_exist()){
  var $container = $(zuzu_gallery_masonay3),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 1;
      } else if (w > 900) {
        columnNum  = 1;
      } else if (w > 600) {
        columnNum  = 1;
      } else if (w > 450) {
        columnNum  = 1;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.zuzu-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/zuzu-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/zuzu-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          // height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.zuzu-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.zuzu-gallery-menu .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


// zuzu old 

  /*--------------------------------------------------------------
  FOUR COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var nexto_filter = $('#zuzu--four-column');
  if(nexto_filter.is_exist()){
    var $container = $(nexto_filter),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 4;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.zuzu--portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }

    /*--------------------------------------------------------------
  TWO COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var nexto_filter = $('#zuzu--two-column');
  if(nexto_filter.is_exist()){
    var $container = $(nexto_filter),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 2;
        } else if (w > 900) {
          columnNum  = 2;
        } else if (w > 600) {
          columnNum  = 1;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.zuzu--portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }
  
  

  
  }); // End window LODE

/*--------------------------------------------------------------
zuzu MAP JS
------------------------------------------------------------*/
var google_map = $('#map');
if(google_map.is_exist()){
  google.maps.event.addDomListener(window, 'load', init);
  function init() {
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400), 
         styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
                };
      var mapElement = document.getElementById('map');

      var map = new google.maps.Map(mapElement, mapOptions);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        icon: 'assets/images/all-img/contact/map.png',
        title: 'zuzu'
      });
      var contentString = '<div id="content">' +
          '<div id="tpw">' +
          '<h3>zuzu' +
          '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 280
      });

      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
      });

    }

}

// wow js
var wow = new WOW({
  mobile: false,       // default
  tablet:false
});
wow.init();
  


  })(jQuery);
  
  
  
  
  
  
  