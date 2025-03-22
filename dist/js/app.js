$(function() {
    // if($('.navbar-toggle-sticky').length > 0) {
        var header = document.getElementsByClassName("navbar")[0];
        // if($(window).width() >= 992) {
            var sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                header.classList.add("navbar-scrolled");
            } else {
                header.classList.remove("navbar-scrolled");
            }
            window.onscroll = function() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("navbar-scrolled");
                } else {
                    header.classList.remove("navbar-scrolled");
                }
            }
        // } else {
        //     header.classList.add("navbar-scrolled");
        // }

        $('.navbar-toggler').click(function(e) {
            // e.preventDefault();
            $('body, html').toggleClass('overflow-hide');
            $(this).find('.navbar-toggler-icon').toggleClass('_close');
        });
    // }

    // scrolling nav
    if (location.hash) {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        setTimeout(function(){
            // console.log($(location.hash + '_hash').offset().top);
            $('html, body').animate({
                scrollTop: $(location.hash).offset().top - 80
            }, 1000);
            $('.scroll-landing li').removeClass('active');
            $('.scroll-landing li').find("a[href='"+location.hash+"']").addClass('active');
        }, 100);
    }
    $(".scroll-landing a").click(function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        // $(".scroll-landing a").removeClass('active');
        // $(this).addClass('active');
        if( window.location.pathname == '/hy/' || window.location.pathname == '/en/' || window.location.pathname == '/ru/' ){
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 1000);
        } else {
            document.location.href="/"+hash;
            setTimeout(function(){
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 80
                }, 1000);
            }, 4000);
        }
    });

    // Close Menu On Mobile
    $('.nav-link').on('click', function(){
        // if( $(window).widkth() < 1024 ){
            $('.navbar-collapse').collapse('hide');
        // }
    });
    // Close Menu On Mobile
    // Cache selectors
    var topMenu = $(".scroll-landing"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = $('.scroll-landing a').map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top - 80 < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems.removeClass("active");
        menuItems.parent().end().filter("[href='#"+id+"']").addClass("active");
    });


    if($('.home-slider').length) {
        var $slickElement = $('.home-slider');
        $slickElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $(".carousel-control.home-left"),
            nextArrow: $(".carousel-control.home-right"),
            slide: ".item",
            fade: true,
            rows: 0
        });
    }
    if($('.team-slider').length) {
        var $slickElement = $('.team-slider');
        $slickElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $(".carousel-control.team-left"),
            nextArrow: $(".carousel-control.team-right"),
            slide: ".item",
            fade: true,
            rows: 0
        });
        $slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
			var curr = $(slick.$slides[currentSlide]);
			var image = curr.find('img').attr('src');
			var alt = curr.find('img').attr('alt');
			var title = curr.find('img').attr('title');
			$('._desktop-image-image').attr('src', image);
			$('._desktop-image-image').attr('alt', alt);
			$('._desktop-image-image').attr('title', title);
		});
    }
    if($('.blog-slider').length) {
        var $slickElement = $('.blog-slider');
        $slickElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $(".carousel-control.blog-left"),
            nextArrow: $(".carousel-control.blog-right"),
            slide: ".blog-item",
            fade: true,
            rows: 0
        });
    }
});