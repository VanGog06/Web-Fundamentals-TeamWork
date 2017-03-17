$(document).ready(function () {
    clientsCarousel();
    hamburgerMenu();
    smoothScroll();
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
        $('.menu ul').toggleClass('hidden');
    });
}