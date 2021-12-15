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
    $('input[name="tel"]').mask('+7 (999) 999-99-99');

    //карты
    
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });

        myMap.behaviors.disable('scrollZoom')
    }

    //слайдер отзывов
    if($('.reviews .slider').length) {
        $('.reviews .slider').slick({
            slidesToShow: 4,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })

        $('.reviews .arrow__item.prev').on('click', function () {
            $('.reviews .slider').slick('slickPrev');
        });

        $('.reviews .arrow__item.next').on('click', function () {
            $('.reviews .slider').slick('slickNext');
        })
    }

    //слайдер партнеров
    if ($('.partners .slider').length) {
        $('.partners .slider').slick({
            slidesToShow: 6,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        $('.partners .arrow__item.prev').on('click', function () {
            $('.partners .slider').slick('slickPrev');
        });

        $('.partners .arrow__item.next').on('click', function () {
            $('.partners .slider').slick('slickNext');
        })
    }

});