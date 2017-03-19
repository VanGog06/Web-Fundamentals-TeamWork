$(document).ready(function () {
    clientsCarousel();
    hamburgerMenu();
    smoothScroll();
    showHideTellersDescription();
    scrollAnimation();
    changeNakovsOpacity();
});

function smoothScroll() {
    $("nav.menu li a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
}

function clientsCarousel() {
    let $clientsCarousel = $(".clients-carousel");
    let $clientUnit = $(".client-unit");

    $clientUnit.first().addClass("active-client");

    $('.client-controls-next,.client-controls-prev').on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let $currentUnit = $clientsCarousel.find(".active-client");
        let position = $clientsCarousel.children().index($currentUnit);
        let length = $clientUnit.length;

        if ($this.hasClass("client-controls-next")) {
            if (position < length - 1) {
                $currentUnit.removeClass("active-client").next().addClass("active-client");
            } else {
                $currentUnit.removeClass("active-client");
                $clientUnit.first().addClass("active-client");
            }

        } else {
            if (position === 0) {
                $currentUnit.removeClass("active-client");
                $clientUnit.last().addClass("active-client");
            } else {
                $currentUnit.removeClass("active-client").prev().addClass("active-client");
            }
        }
    });
}

function hamburgerMenu() {
    $('.hamburger-menu i').click(function () {
        $('.menu ul').toggle('slow');
    });
}

function showHideTellersDescription() {
    $(".tellers section article").hover(function () {
        let window_width = $(window).width();

        if (window_width > 1024) {
            $(this).find('h2').toggle('slow');
            $(this).find('p').toggle('slow');
            $(this).find('img').toggleClass('toggle-opacity');
        }
    });
}

function changeNakovsOpacity() {
    $('.mag-nakov').hover(function() {
        $(this).find('img').toggleClass('toggle-opacity');
    });
}

function scrollAnimation() {
    let $animation_elements = $('.animation-element');
    let $window = $(window);

    function check_if_in_view() {
        let window_height = $window.height();
        let window_top_position = $window.scrollTop();
        let window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            let $element = $(this);
            let element_height = $element.outerHeight();
            let element_top_position = $element.offset().top;
            let element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
}