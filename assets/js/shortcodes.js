;(function($) {

    'use strict'

    var imagesCube = function() {
        $('.logistix-images-grid').each(function() {
            var
            $this = $(this),
            layout = $this.data("layout"),
            item = $this.data("column"),
            item2 = $this.data("column2"),
            item3 = $this.data("column3"),
            item4 = $this.data("column4"),
            layout = $this.data("layout"),
            gapH = Number($this.data("gaph")),
            gapV = Number($this.data("gapv")),
            auto = $this.data("auto");

            $(this).find('#images-wrap').cubeportfolio({
                layoutMode: layout,
                defaultFilter: '*',
                animationType: 'quicksand',
                gapHorizontal: gapH,
                gapVertical: gapV,
                showNavigation: false,
                showPagination: true,
                gridAdjustment: 'responsive',
                rewindNav: false,
                auto: auto,
                mediaQueries: [{
                    width: 1500,
                    cols: item
                }, {
                    width: 1100,
                    cols: item
                }, {
                    width: 800,
                    cols: item2
                }, {
                    width: 550,
                    cols: item3
                }, {
                    width: 320,
                    cols: item4
                }],
                caption: ' ',
                displayType: 'bottomToTop',
                displayTypeSpeed: 100
            });
        });
    };

    var projectRelatedOwl = function() {
        if ( $().owlCarousel ) {
            $('.project-related').each(function(){
                var
                $this = $(this),
                gap = Number($this.data("gap")),
                column = $this.data("column");

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:column
                        }
                    }
                });
            });
        }
    };

    var accordions = function() {
        var args = {easing:'easeOutExpo', duration:300};

        $('.accordion-item.active').find('.accordion-content').show();
        $('.accordion-heading').on('click', function () {
            if ( !$(this).parent().is('.active') ) {
                $(this).parent().toggleClass('active')
                    .children('.accordion-content').slideToggle(args)
                .parent().siblings('.active').removeClass('active')
                    .children('.accordion-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var popupImages = function() {
        if ( $().magnificPopup ) {
            $('.logistix-project, .project-related, .logistix-project-grid, .logistix-images-grid, #logistix-slider').each(function () {
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        };
    };

    var spacer = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
                mode = 'mobile';

            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches )
                mode = 'smobile';

            $('.logistix-spacer').each(function(){
                if ( mode == 'desktop' ) {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if ( mode == 'mobile' ) {
                    $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobi') + 'px')
                }
            })

        });
    };

    var gridBox = function() {
        $(".logistix-grid-box > div").wrap('<div class="grid-item">');
        var item = $(".logistix-grid-box > .grid-item");

        for(var i = 0; i < item.length; i+=3) {
            item.slice(i, i+3).wrapAll("<div class='grid-row clearfix'></div>");
        }
    };

    var contentBox = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
                mode = 'mobile';

            $('.logistix-content-box').each(function(){
                if ( mode == 'desktop' ) {
                    $(this).css({margin : $(this).data('margin')});
                    $(this).children('.inner').css({padding : $(this).data('padding')});
                } else if ( mode == 'mobile' ) {
                    $(this).css({margin : $(this).data('mobimargin')});
                    $(this).children('.inner').css({padding : $(this).data('mobipadding')});
                }
            })
        });
    };

    var counter = function(){
        function logistixInview(ele) {
            var window_top = $(window).scrollTop(),
                offset_top = $(ele).offset().top;
            if ( $(ele).length > 0 ) {
                if (    offset_top + $(ele).height() - 100 >= window_top &&
                        offset_top <= ( window_top + 0.85 * $(window).height() ) ) {
                        return true;
                } else {
                    return false;
                }
            }
        }

        function run_animations() {
            var did_scroll = false;
            $(window).on('scroll', function(){
                did_scroll = true;
            });
            setInterval(function () {
                if (did_scroll) {
                    did_scroll = false;

                    $('.logistix-counter').each(function() {
                        var $this = $(this);

                        if ( logistixInview($this) && !$this.data('complete') ) {
                            $this.data('complete',true);
                            var delay = parseInt($this.data('delay'));
                            setTimeout(function(){
                                $this.find('.number').countTo();
                            }, delay );
                        }
                    });
                }
            }, 200);
        }
        run_animations();
    };

    var progressBar = function() {
        if ( $().waypoint ) {
            $('.progress-bg').on('on-appear', function() {
                $(this).each(function() {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");

                    $(this).parent('.logistix-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");
                });
            });
        }
    };

    var animation = function() {
        $('.logistix-animation-block').each( function() {
            var el = $(this),
            animate = el.data('animate'),
            duration = el.data('duration'),
            delay = el.data('delay'),
            position = el.data('position');

            el.css({
                '-webkit-animation-delay':      delay,
                'animation-delay':              delay,
                '-webkit-animation-duration':   duration,
                'animation-duration':           duration
            });
        
            el.waypoint(function() {
                el.addClass('animated').addClass(animate);
                },{
                    triggerOnce: true,
                    offset: position
            });
        });
    };

    var popupVideo = function() {
        if ( $().magnificPopup ) {
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        };
    };

    var elmentHover = function() {
        $(".logistix-image-video .icon").hover(function(){
            $(this).css({
                "color": $(this).data('chover'),
                "background-color": $(this).data('ghover'),
                "border-color": $(this).data('bhover'),
                "transition": "all 0.3s"
            });
        },function(){
            $(this).css({
                "color": $(this).data('c'),
                "background-color": $(this).data('g'),
                "border-color": $(this).data('b'),
            });
        });
    };

    var resizeHeading = function() {
        $(window).on('load resize', function() {
            $('.logistix-sheading, .logistix-headings').each(function() {
                var
                $this = $(this),
                font = $this.data("font"),
                fontMobi = $this.data("mfont");

                if ( fontMobi ) {
                    if ( $(window).width() < 960 ) {
                        $this.find('.heading').css('font-size', fontMobi + 'px');
                    } else { 
                        $this.find('.heading').css('font-size', font + 'px');
                    }
                }
            });
        });
    };

    var inViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var hereSection =  function() {
        $(window).on('load resize', function(){
            var
            adminBarHeight = 0,
            topBarHeight = 0,
            contentTopMargin = 0,
            heroHeight = 0,
            customHeight = 0,
            adminBar = $('#wpadminbar'),
            topBar = $('#top-bar'),
            hero = $('.hero-section'),
            windowHeight = $(window).height(),
            headerHeight = $('#site-header').height(),
            heroContent = hero.find('.hero-content'),
            contentHeight = heroContent.height(),
            spacing = hero.data('content');
            customHeight = hero.data('height');

            if (topBar.length) topBarHeight = topBar.height();
            if (adminBar.length) adminBarHeight = adminBar.height();

            heroHeight = windowHeight;
            if ( customHeight )
                heroHeight = customHeight;

            if ( $('body').hasClass('header-style-4') ) {
                hero.css({ height: (heroHeight - adminBarHeight) + "px" });
                contentTopMargin = ((heroHeight - contentHeight) / 2) + topBarHeight + spacing;

                heroContent.css("padding-top", (contentTopMargin) + "px");
            } else {
                if ( ! customHeight )
                    heroHeight = heroHeight - headerHeight - topBarHeight - adminBarHeight;
                hero.css({ height: heroHeight + "px" });
                contentTopMargin = ((heroHeight - contentHeight) / 2) + spacing;
                heroContent.css("padding-top", (contentTopMargin) + "px");
            }
        })

        if ( $().vegas ) {
            $(".hero-section.slideshow").each(function() {
                var
                $this = $(this),
                count = $this.data('count'),
                count = parseInt(count,10),
                effect = $this.data('effect'),
                images = $this.data('image'),
                cOverlay = $this.data('overlay'),
                pOverlay = $this.data('poverlay'),
                i = 0,
                slides = [],
                imgs = images.split('|');

                while ( i < count ) {
                    slides.push( {src:imgs[i]} );
                    i++;
                }

                $this.vegas({
                    slides: slides,
                    overlay: true,
                    transition: effect
                });

                var overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $(this).append(overlay)
                    .find('.vegas-overlay')
                    .addClass(pOverlay);
            });
        }


        $('.scroll-target').on('click',function() {
            var anchor = $(this).attr('href').split('#')[1];

            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                    var headerHeight = 0;

                    if ( $('body').hasClass('header-sticky') )
                        headerHeight = $('#site-header').height();

                    var target = $('#' + anchor).offset().top - headerHeight;

                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
               }
            }
            return false;
        })


        if ( $('.logistix-fancy-text').is('.scroll') ) {
            $('.logistix-fancy-text.scroll').each(function() {
                var
                $this = $(this),
                current = 1,
                height = $this.height(),
                numberDivs = $this.children().length,
                first = $this.children('.heading:nth-child(1)');

                setInterval(function() {
                    var number = current * -height;
                    
                    first.css('margin-top', number + 'px');
                    if ( current === numberDivs ) {
                        first.css('margin-top', '0px');
                        current = 1;
                    } else current++;
                }, 2500);
            });
        }

        if ( $('.logistix-fancy-text').is('.typed') ) {
            if ( $().typed ) {
                $('.logistix-fancy-text.typed').each(function() {
                    var
                    $this = $(this),
                    texts = $this.data('fancy').split(',');

                    $this.find('.text').typed({
                        strings: texts,
                        typeSpeed: 40,
                        loop:true,
                        backDelay: 2000
                    });
                });
            }
        }
    };

    var fitText =  function() {
        if ( $().fitText ) {
            $('.logistix-fancy-text').each(function(){
                var min = $(this).data("min");
                var max = $(this).data("max");

                $(this).children('.heading').fitText(1.8, {
                    minFontSize: min,
                    maxFontSize: max
                });
            });
        }
    };

    var bgVideo =  function() {
        if ( $().YTPlayer ) {
            $(".hero-section.video").each(function() {
                var
                $this = $(this),
                cOverlay = $this.data('overlay'),
                overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $this.YTPlayer().append(overlay);
            });
        }
    };

    var tabs =  function() {
        $('.logistix-tabs').each(function(){
            var 
            list ="",
            title = $(this).find('.item-title').remove(),
            titleWrap = $(this).children('.tab-title') ;

            title.each(function() {
                list = list + "<li class= 'item-title'>" + $(this).html() + "</li>";
            });

            titleWrap.append(list);

            $(this).find('.tab-title li').filter(':first').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':first').show();

            $(this).find('.tab-title li').on('click', function(e) {
                var
                idx = $(this).index(),
                content = $(this).closest('.logistix-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').siblings().hide();

                e.preventDefault();
            });
        });
    };

    var countDown = function() {
        var style = function(data) {
         $(this.el).html(
            "<div class='column days'>" +
                "<div class='numb'>" + this.leadingZeros(data.days, 2) + "</div>" +
                "<div class='text'>Days</div>" +
            "</div>" +
            "<div class='column hours'>" +
                "<div class='numb'>" + this.leadingZeros(data.hours, 2) + "</div>" +
                "<div class='text'>Hours</div>" +
            "</div>" +
            "<div class='column mins'>" +
                "<div class='numb'>" + this.leadingZeros(data.min, 2) + "</div>" +
                "<div class='text'>Minutes</div>" +
            "</div>" +
            "<div class='column secs'>" +
                "<div class='numb'>" + this.leadingZeros(data.sec, 2) + "</div>" +
                "<div class='text'>Seconds</div>" +
            "</div>");
        }

        $('.logistix-countdown').each(function() {
            $(this).countdown({
                date: $(this).attr('data-date'),
                render: style
            });
        });
    };

    var equalizeHeight = function() {
        $(window).on('load resize', function () {
            setTimeout(function () {
                $(document).imagesLoaded(function () {
                    if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.sm-equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                    }
                });
            }, 500);
        });
    };

    var parallax =  function() {
        var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
        /*
         * Please note that background attachment fixed doesn't work on iOS
         */ 
        if (!iOS) {
            $('.parallax').css({backgroundAttachment:'fixed'});
        } else {
            $('.parallax').css({backgroundAttachment:'scroll'});
        }
    };

    var animateWOW =  function() {
        new WOW().init();
    };

    var thumbSlider = function() {
        $('.logistix-thumb-slider').each(function(){
            var
            itemW = $(this).data("width"),
            itemM = $(this).data("margin");

            $(this).children('#logistix-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: itemW,
                itemMargin: itemM,
                asNavFor: $(this).children('#logistix-slider'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });
            $(this).children('#logistix-slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('#logistix-carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });
        });
    };

    var googleMap = function() {
        if ( $().gmap3 ) {
            $('.logistix-gmap').each(function(){
                var
                $this = $(this),
                lat = $this.data('lat'),
                lng = $this.data('lng'),
                marker = $this.data('marker'),
                zoom = $this.data('zoom');

                var center = [lat, lng];
                $this
                .gmap3({
                    center: center,
                    zoom: zoom,
                    mapTypeId : google.maps.MapTypeId.ROADMAP
                })
                .marker({
                    position: center,
                    icon: marker
                });
            });
        }
    };

    var carouselBoxOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                loop = $this.data("loop"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: loop,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var newsOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-news').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var portfolioOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-project').each(function(){
                var
                $this = $(this),
                loop = $this.data("loop"),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: loop,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var teamOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-team').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var partnerOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-partner').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                loop = $this.data("loop"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: loop,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var wooOwl = function() {
        if ( $().owlCarousel ) {
            $('.logistix-products').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    dots : true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var portfolioCube = function() {
        if ( $().cubeportfolio ) {
            $('.logistix-project-grid').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                gapH = Number($this.data("gaph")),
                gapV = Number($this.data("gapv")),
                filter = $this.data("filter");

                if ( !filter ) { filter = '*'; }
                else { filter = '.' + filter; }

                $(this).find('#portfolio').cubeportfolio({
                    filters: '#project-filter',
                    layoutMode: 'grid',
                    defaultFilter: filter,
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: false,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: 'overlayBottomAlong',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        }
    };


    // Dom Ready
    $(function() {
        imagesCube();
        projectRelatedOwl();
        accordions();
        popupImages();
        spacer();
        gridBox();
        contentBox();
        counter();
        progressBar();
        animation();
        popupVideo();
        elmentHover();
        resizeHeading();
        inViewport();
        hereSection();
        fitText();
        bgVideo();
        tabs();
        countDown();
        equalizeHeight();
        parallax();
        animateWOW();
        thumbSlider();
        googleMap();
        $( window ).load(function() {
            carouselBoxOwl();
            newsOwl();
            portfolioOwl();
            teamOwl();
            partnerOwl();
            wooOwl();
            portfolioCube();
        });
    });

})(jQuery);

