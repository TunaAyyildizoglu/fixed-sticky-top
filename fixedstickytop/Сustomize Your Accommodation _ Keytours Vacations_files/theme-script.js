jQuery(document).ready(function ($) {

    $(window).scroll(); 

	/** =============================================================== **/
    /** Menu toogler on mobile hamburger class change **/
    /** =============================================================== **/

    $('.hamburger').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('header .navigation .search-box').removeClass('opened');
        $('.top-header').removeClass('sticky');
        $('.main-content').removeClass('search-fix');
        $('.close-list-float-filter').trigger('click');
        $('.close-list-float-filter').removeClass('active');
    });

    /** =============================================================== **/
    /** Trip tabs inline class change on click **/
    /** =============================================================== **/

    $('.trip-tabs-list .nav-link').on("click", function (e) {
        $('.trip-tabs-list .nav-link').removeClass('active');
        $(this).addClass('active');
    });
    

    /** =============================================================== **/
    /** Trigger serach box on mobile **/
    /** =============================================================== **/

    $('.trigger-mobile-search').on("click", function (e) {
        e.preventDefault();
        
        if ($(".hamburger").hasClass("is-active")) {
            
            $('.hamburger').trigger( "click");
            $('.hamburger').removeClass('is-active'); 
            $('header .navigation .search-box').toggleClass('opened');
            $('.top-header').toggleClass('sticky');
            $('.main-content').toggleClass('search-fix');
            $('.close-list-float-filter').trigger('click');
        $('.close-list-float-filter').removeClass('active');
        }
        else {
            $('header .navigation .search-box').toggleClass('opened');
            $('.top-header').toggleClass('sticky');
            $('.main-content').toggleClass('search-fix');
            $('.close-list-float-filter').trigger('click');
            $('.close-list-float-filter').removeClass('active');
        }
    });

    /** =============================================================== **/
    /** Price range slider **/
    /** =============================================================== **/

    if ($(".price-range-slider").length) {
        $( ".price-range-slider" ).slider({
            range: true,
        });

        $(".price-range-slider").on("slideStart", function(slideEvt) {
            $(".min-slider-value").text(slideEvt.value[0]);
            $(".max-slider-value").text(slideEvt.value[1]);

            if(slideEvt.value[0] == "0") {
                $('.min-slider-value').addClass('zero');
            }
            else  {
                $('.min-slider-value').removeClass('zero');
            };

            if(slideEvt.value[1] == "0") {
                $('.max-slider-value').addClass('zero');
            }
            else  {
                $('.max-slider-value').removeClass('zero');
            };
        });

        $(".price-range-slider").on("slideStop", function(slideEvt) {
            $(".min-slider-value").text(slideEvt.value[0]);
            $(".max-slider-value").text(slideEvt.value[1]);

            if(slideEvt.value[0] == "0") {
                $('.min-slider-value').addClass('zero');
            }
            else  {
                $('.min-slider-value').removeClass('zero');
            };

            if(slideEvt.value[1] == "0") {
                $('.max-slider-value').addClass('zero');
            }
            else  {
                $('.max-slider-value').removeClass('zero');
            };
        });

        $(".price-range-slider").on("slide", function(slideEvt) {
            $(".min-slider-value").text(slideEvt.value[0]);
            $(".max-slider-value").text(slideEvt.value[1]);

            if(slideEvt.value[0] == "0") {
                $('.min-slider-value').addClass('zero');
            }
            else  {
                $('.min-slider-value').removeClass('zero');
            };

            if(slideEvt.value[1] == "0") {
                $('.max-slider-value').addClass('zero');
            }
            else  {
                $('.max-slider-value').removeClass('zero');
            };
        });
    };

    /** =============================================================== **/
    /** Select2 **/
    /** =============================================================== **/
    
    if ($(".custom-select").length) {
        $('.custom-select').select2({
            minimumResultsForSearch: Infinity,
            selectionCssClass: "custom-select-style",
        })
    };

    if ($(".custom-select-search").length) {
        $('.custom-select-search').select2({
            selectionCssClass: "custom-select-style",
        })
    };

    if ($(".custom-select.light").length) {
        $('.custom-select.light').select2({
            minimumResultsForSearch: Infinity,
            selectionCssClass: "custom-select-style-light",
        })
    };

    if ($(".custom-select.place").length) {
        $('.custom-select.place').select2({
            minimumResultsForSearch: Infinity,
            selectionCssClass: "custom-select-style-place",
        })
    };

    if ($(".custom-select-dark").length) {
        $('.custom-select-dark').select2({
            minimumResultsForSearch: Infinity,
            selectionCssClass: "custom-select-style-dark",
        })
    };

    if ($(".custom-select-dark.search").length) {
        $('.custom-select-dark.search').select2({
            selectionCssClass: "custom-select-style-dark",
        })
    };


    /*.data('select2').$dropdown.addClass('my-container');*/

    /** =============================================================== **/
    /** Active class for checkbox **/
    /** =============================================================== **/

    $('.checkbox-new input').change(function(){
        if($(this).is(":checked")) {
            $(this).closest('.checkbox-new').addClass("active");
        } else {
            $(this).closest('.checkbox-new').removeClass("active");
        }
    });

    $('.radio-new input').change(function(){
        var name = $(this).attr("name");
        $('.radio-new input[name="' + name +'"]').each(function(){
            if($(this).is(":checked")) {
                $('.radio-new input[name="' + name +'"]').closest('.radio-new').removeClass("active");
                $(this).closest('.radio-new').addClass("active");
            };
        });
    });


    /** =============================================================== **/
    /** Trigger float list filter for trabled/mobile **/
    /** =============================================================== **/


    $('.trigger-list-float-filter').on("click", function (e) { 
        e.preventDefault();
        if($(window).scrollTop() === 0) {
             
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, "fast");
            $('body').addClass('overflow-hidden ios-fix');
            $('.list-filter-float').addClass('opened regular-filter');
            $('.list-filter-float-overlay').addClass('active');
            $('.close-list-float-filter').addClass('active');
            $('header .navigation .search-box').removeClass('opened');

        }
        else {

            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, "fast");
            var delayInMilliseconds = 500; //1 second
            setTimeout(function() {
                $('body').addClass('overflow-hidden ios-fix');
                $('.list-filter-float').addClass('opened regular-filter');
                $('.list-filter-float-overlay').addClass('active');
                $('.close-list-float-filter').addClass('active');
                $('header .navigation .search-box').removeClass('opened');
            }, delayInMilliseconds); 

        }
    });

    $('.trigger-list-dropdowns-float-filter').on("click", function (e) { 
        e.preventDefault();
        if($(window).scrollTop() === 0) {
             
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, "fast");
            $('body').addClass('overflow-hidden ios-fix');
            $('.list-filter-float').addClass('opened dropdown-filter');
            $('.list-filter-float-overlay').addClass('active');
            $('.close-list-float-filter').addClass('active');
            $('header .navigation .search-box').removeClass('opened');

        }
        else {

            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, "fast");
            var delayInMilliseconds = 500; //1 second
            setTimeout(function() {
                $('body').addClass('overflow-hidden ios-fix');
                $('.list-filter-float').addClass('opened dropdown-filter');
                $('.list-filter-float-overlay').addClass('active');
                $('.close-list-float-filter').addClass('active');
                $('header .navigation .search-box').removeClass('opened');
            }, delayInMilliseconds); 

        }
    });



    $('.close-list-float-filter, .close-filter-with-button').on("click", function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden ios-fix');
        $('.list-filter-float').removeClass('opened dropdown-filter regular-filter');
        $('.list-filter-float-overlay').removeClass('active');
        $('.close-list-float-filter').removeClass('active');
    });

    /** =============================================================== **/
    /** Datapicker http://www.daterangepicker.com/  **/
    /** =============================================================== **/

    $('.datepicker').daterangepicker({
        "singleDatePicker": true,
        "autoApply": true,
    });

    $('.datepickertime').daterangepicker({
        "singleDatePicker": true,
        "autoApply": true,
        "timePicker": true,
        "locale": {
          "format": 'YYYY-MM-DD hh:mm A'
        }
    });

    /** =============================================================== **/
    /** Slick sliders script  **/
    /** =============================================================== **/

    if ($(".five-small-image-text-slider").length) {
        $('.five-small-image-text-slider').slick({
            slidesToShow: 5,
            dots: false,
            arrows: true,
            centerMode: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1199.98,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                }
            ]
        });
    };

    if ($(".six-small-image-text-slider").length) {
        $('.six-small-image-text-slider').slick({
            slidesToShow: 6,
            dots: false,
            arrows: true,
            centerMode: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 5,
                    arrows: true
                  }
                },
                {
                  breakpoint: 1199.98,
                  settings: {
                    slidesToShow: 4,
                    arrows: true
                  }
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                }
            ]
        });
    };

    

    if ($(".home-journeys .big-box-slider").length) {
        $('.home-journeys .big-box-slider').slick({
            slidesToShow: 3,
            dots: false,
            arrows: true,
            centerMode: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1199.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                }

            ]
        });
    };

    if ($(".suggested-tours-slider").length) {
        $('.suggested-tours-slider').slick({
            slidesToShow: 4,
            dots: false,
            arrows: false,
            centerMode: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 575.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                }

            ]
        });
    };

    if ($(".features-home-slider").length) {
        $('.features-home-slider').slick({
            slidesToShow: 5,
            dots: false,
            arrows: true,
            centerMode: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1199.98,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    arrows: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                    slidesToShow: 2
                  }
                }
            ]
        });
    };

    // Custom carousel nav
    $('.carousel-prev').click(function(e){ 
        e.preventDefault(); 
        $(this).parent().find('.suggested-tours-slider').slick('slickPrev');
    } );
    
    $('.carousel-next').click(function(e){
        e.preventDefault(); 
        $(this).parent().find('.suggested-tours-slider').slick('slickNext');
    } );


    /* slick fix if slider is inside tab */
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.suggested-tours-slider').slick('refresh');
    })

    if ($(".custom-big-slider .slider-for").length) {
        $('.custom-big-slider .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav'
        });
    };
    if ($(".custom-big-slider .slider-nav").length) {
        $('.custom-big-slider .slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [

                {
                  breakpoint: 349,
                  settings: {
                    slidesToShow: 4
                  }
                }

            ]
        });
    };




});


    /** =============================================================== **/
    /** Dont close dropdown on inside click **/
    /** =============================================================== **/

    $(document).on('click', '.dontcloseonclick', function (e) {
        e.stopPropagation();
    });


    /** =============================================================== **/
    /** Prevent unwanted zooming on mobile devices **/
    /** =============================================================== **/

    var $objHead = $( 'head' );

    // define a function to disable zooming
    var zoomDisable = function() {
        $objHead.find( 'meta[name=viewport]' ).remove();
        $objHead.prepend( '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />' );
    };

    // ... and another to re-enable it
    var zoomEnable = function() {
        $objHead.find( 'meta[name=viewport]' ).remove();
        $objHead.prepend( '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />');
    };

    // if the device is an iProduct, apply the fix whenever the users touches an input
    if( navigator.userAgent.length && /iPhone|iPad|iPod/i.test( navigator.userAgent ) ) {
        // define as many target fields as your like 
        $( "header .navigation .search-box input" )
            .on( { 'touchstart' : function() { zoomDisable() } } )
            .on( { 'touchend' : function() { setTimeout( zoomEnable , 500 ) } } );
    }


    /** =============================================================== **/
    /** For mobile only **/
    /** =============================================================== **/

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $( "summary-preview-div .standard-collapse-div .link" ).removeClass('collapsed');
        $( "summary-preview-div .standard-collapse-div .collapse" ).removeClass('show');
    }

   
   
function selectCardFunc(element) {
    var cardHeader = document.getElementById("selectedCardHeader");
    var cardContent = document.getElementById("selectedCardContent");
    var cardPrice = document.getElementById("selectedCardPrice");
    cardHeader.innerHTML = $(element).parent().parent().parent()[0].getElementsByClassName("h5")[0].innerHTML;
    cardContent.innerHTML = "b";
    cardPrice.innerHTML = parseFloat($(element).parent().parent().parent()[0].getAttribute("data-price"));

    
} 
    
function calculatePrice(element)
{
    var cardPrice = document.getElementById("selectedCardPrice");
    
    if(element.checked == true)
    {
        cardPrice.innerHTML = parseFloat(cardPrice.innerHTML) + parseFloat(element.getAttribute("data-price"));
    }
    else
    {
        cardPrice.innerHTML = parseFloat(cardPrice.innerHTML) - parseFloat(element.getAttribute("data-price"));
    }
  
}

