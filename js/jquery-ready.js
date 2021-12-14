$(document).ready(function() {
    //мобильное меню
    let body = $('body');
    let burger = $('.burger');

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    
    //одинаковая высота блоков
    // if ($('.transition').length) {
    //     $('.transition .items__item').matchHeight({
    //         byRow: false,
    //     })
    // }

    
    if($('.intro .slider').length) {
        $('.intro .slider').slick({
            arrows: false,
            dots: true,
            appendDots: $('.slider-bottom .navigation__dots')
        });

        $('.slider-bottom .navigation__arrow.prev').on('click', function () {
            $('.intro .slider').slick('slickPrev');
        });

        $('.slider-bottom .navigation__arrow.next').on('click', function () {
            $('.intro .slider').slick('slickNext');
        })
    }

    
    //Маска телефона
    $('input[name="tel"]').mask('+7 (999) 999-99-99')
});