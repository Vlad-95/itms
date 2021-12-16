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
        
    }
    
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

    //открытие всплывашки
    let timer;
    $('.js-popup-open').click(function() {
        let target = $(this).data("target");
        $('.popup__item').removeClass('active');
        $('.popup__item[data-name="'+ target +'"]').addClass('active');
        $('.popup').fadeIn();
        
        if($('.popup__item.active').find('.popup__close_wait')) {
            
            $('.popup__close_wait').addClass('animate');

            function activeClose() {
                $('.popup__close_wait').addClass('active');

                $('.popup__close_wait').bind('click', closeModal)
            }
              
            timer = setTimeout(activeClose, 5000);
            
        }        
        
    })
    //закрытие всплывашки
    let closeModal = function () {
        $('.popup__item').removeClass('active');
        $(this).closest('.popup').fadeOut();

        if($(this).hasClass('popup__close_wait')) {
            $('.popup__close_wait').removeClass('animate active');
            $('.popup__close_wait').unbind('click', closeModal);
            clearTimeout(timer);
        }
        
    }

    $('.js-popup-close').click(closeModal);

    //клик по кнопке подробнее на странице Компании
    if ($('.intro_company').length) {
        $('.intro_company .toggle').on('click', function() {
            $('.intro').next('.descr').slideDown();
        })

        $('.descr .toggle').on('click', function() {
            $('.intro').next('.descr').slideUp();
        })
    }

    //подгрузка лицензций
    if ($('.license').length) {
        
        let showElems = 1;

        if ($(window).width() > 992) {
            showElems = 4    
        } else if ($(window).width() > 768) {
            showElems = 3
        } else if ($(window).width() > 576) {
            showElems = 2
        }

        //Скрывавем элементы
        $('.license__item').each(function() {
            let index = $(this).index() + 1;
            
            if (index > showElems) {
                $(this).hide();
            } else {
                $(this).attr('data-fancybox', 'license')//подставляем атрибуты fancybox только видимым элементам
            }
        });

        $('.license .more span').text($('.license__item[style="display: none;"]').length)
        if(!$('.license__item[style="display: none;"]').length) {
            $('.license .more').fadeOut();
        }
        
        //Клик по кнопке
        $('.license .more').on('click', function() {
            let visibleElemsCount = $('.license__item').not('[style="display: none;"]').length;

            visibleElemsCount += showElems;
           
            $('.license__item[style="display: none;"]').each(function() {
                let index = $(this).index() + 1;

                if (index > visibleElemsCount) {
                    $(this).hide();
                } else {
                    $(this).show();
                    $(this).attr('data-fancybox', 'license')//подставляем атрибуты fancybox только видимым элементам
                }
            });

            $('.license .more span').text($('.license__item[style="display: none;"]').length);

            if(!$('.license__item[style="display: none;"]').length) {
                $('.license .more').fadeOut();
            }
        })
    }

    //подгрузка фото
    if ($('.photos').length) {
        
        let showElems = 1;

        if ($(window).width() > 992) {
            showElems = 3    
        } else if ($(window).width() > 768) {
            showElems = 3
        } else if ($(window).width() > 576) {
            showElems = 2
        }

        //Скрывавем элементы
        $('.photos__item').each(function() {
            let index = $(this).index() + 1;
            
            if (index > showElems) {
                $(this).hide();
            } else {
                //$(this).attr('data-fancybox', 'gallery')//подставляем атрибуты fancybox только видимым элементам
            }
        });

        $('.photos .more span').text($('.photos__item[style="display: none;"]').length)
        if(!$('.photos__item[style="display: none;"]').length) {
            $('.photos .more').fadeOut();
        }
        
        //Клик по кнопке
        $('.photos .more').on('click', function() {
            let visibleElemsCount = $('.photos__item').not('[style="display: none;"]').length;

            visibleElemsCount += showElems;
           
            $('.photos__item[style="display: none;"]').each(function() {
                let index = $(this).index() + 1;

                if (index > visibleElemsCount) {
                    $(this).hide();
                } else {
                    $(this).show();
                    //$(this).attr('data-fancybox', 'gallery')//подставляем атрибуты fancybox только видимым элементам
                }
            });

            $('.photos .more span').text($('.photos__item[style="display: none;"]').length);

            if(!$('.photos__item[style="display: none;"]').length) {
                $('.photos .more').fadeOut();
            }
        })
    }

    //подгрузка документов
    if ($('.docs').length) {
        
        let showElems = 1;

        if ($(window).width() > 992) {
            showElems = 4    
        } else if ($(window).width() > 768) {
            showElems = 3
        } else if ($(window).width() > 576) {
            showElems = 2
        }

        //Скрывавем элементы
        $('.docs__item').each(function() {
            let index = $(this).index() + 1;
            
            if (index > showElems) {
                $(this).hide();
            } else {
                $(this).attr('data-fancybox', 'docs')//подставляем атрибуты fancybox только видимым элементам
            }
        });

        $('.docs .more span').text($('.docs__item[style="display: none;"]').length)
        if(!$('.docs__item[style="display: none;"]').length) {
            $('.docs .more').fadeOut();
        }
        
        //Клик по кнопке
        $('.docs .more').on('click', function() {
            let visibleElemsCount = $('.docs__item').not('[style="display: none;"]').length;

            visibleElemsCount += showElems;
           
            $('.docs__item[style="display: none;"]').each(function() {
                let index = $(this).index() + 1;

                if (index > visibleElemsCount) {
                    $(this).hide();
                } else {
                    $(this).show();
                    $(this).attr('data-fancybox', 'docs')//подставляем атрибуты fancybox только видимым элементам
                }
            });

            $('.docs .more span').text($('.docs__item[style="display: none;"]').length);

            if(!$('.docs__item[style="display: none;"]').length) {
                $('.docs .more').fadeOut();
            }
        })
    }
});