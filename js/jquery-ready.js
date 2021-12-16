$(document).ready(function() {

    //Мобильное меню
    if (window.innerWidth <= 992) {
        let mobileMenu = $('.mobile-menu');
        let mobileMenuWrap = mobileMenu.find('.mobile-menu__wrap')
        let header = $('.header');

        if (header.hasClass('header_terminal')) {
            let userInfo = $('.header .info');
            let icons = $('.header .icons');
            let menu = $('.header .menu');

            userInfo.detach().appendTo(mobileMenuWrap);
            menu.detach().appendTo(mobileMenuWrap);
            icons.clone().appendTo(mobileMenuWrap);

        } else if (header.hasClass('header_login')) {
            let userInfo = $('.header .info');
            let icons = $('.header .icons');

            userInfo.detach().appendTo(mobileMenuWrap);
            icons.clone().appendTo(mobileMenuWrap);

        } else {
            let loginForm = $('.header .login');
            let headerFeedback = $('.header .header__feedback');

            loginForm.detach().appendTo(mobileMenuWrap);
            headerFeedback.clone().appendTo(mobileMenuWrap);
        }


        // let desktopMenu = $('.header__menu');
        // let headerContacts = $('.header__wrap .header__contacts');
        // let mobileMenuClose = document.createElement('div');
        // let mobileMenu = document.createElement('div');
        // let mobileMenuContent = document.createElement('div');
        
        // $(mobileMenu).addClass('mobile-menu').appendTo('.header__wrap');
        // $(mobileMenuContent).addClass('mobile-menu__content').appendTo('.mobile-menu');
        // $(mobileMenuClose).addClass('mobile-menu__close').appendTo('.mobile-menu__content');
        // desktopMenu.detach().appendTo('.mobile-menu__content');
        // headerContacts.detach().appendTo('.mobile-menu__content');

        //Открытие/закрытие мобильного меню
        $('.burger').on('click', function() {
            if ($(this).hasClass('active')) {
                $('.burger').removeClass('active');
                $('body').removeClass('opacity-layer no-scroll');
                mobileMenu.hide("slide", { direction: "right" }, 500);
            } else {
                $('.burger').addClass('active');
                $('body').addClass('opacity-layer no-scroll');
                mobileMenu.show("slide", { direction: "right" }, 500);
            }
            
        });

        // $('.burger.active').on('click', function() {
        //     console.log(1);
        //     
        // });
        
    }

    

    // function showMenu() {
    //     let mobileMenu = $('.mobile-menu');

    //     burger.toggleClass('active');
    //     body.toggleClass('no-scroll');
    //     mobileMenu.toggleClass('active');
    // }

    // burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)
    // //мобильное меню
    // let body = $('body');
    // let burger = $('.burger');

    // function showMenu() {
    //     let mobileMenu = $('.mobile-menu');

    //     burger.toggleClass('active');
    //     body.toggleClass('no-scroll');
    //     mobileMenu.toggleClass('active');
    // }

    // burger.click(showMenu);

    
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

    if($('.js-date').length) {
        $('.js-date').datepicker();
    }

    //карты
    if($('.map').length) {
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
    }

    //аккордион
    if($('.js-accordion-toggle').length) {
        $('.js-accordion-toggle').click(function() {
            $(this).toggleClass('active').closest('.js-accordion-item').find('.js-accordion-drop').slideToggle();
        });
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

    //ширина для таблицы
    if($('.content__table').length) {
        let changeWidthTable = function () {
            let table = $('.content__table');
            let tabelWidth;
            if ($(window).width() > 768) {
                tabelWidth = $(window).width() - table.offset().left;                
            } else {
                tabelWidth = $(window).width() - (table.offset().left * 2);
            }

            table.outerWidth(tabelWidth);
        }
        changeWidthTable();
        $(window).resize(function() {
            changeWidthTable();
        })
    }

});