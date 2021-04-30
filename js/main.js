// Navegación Pegada
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});

// Efecto Scroll

$('.cf a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

// Lettering 

$(function() {
    $('.animada').lettering();
});



