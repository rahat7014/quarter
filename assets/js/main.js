$(document)
    .ready(function () {

        $('.dropdown-menu a.dropdown-toggle')
            .on('click', function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this)
                        .parents('.dropdown-menu')
                        .first()
                        .find('.show')
                        .removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show'); // appliqué au ul
                $(this)
                    .parent()
                    .toggleClass('show'); // appliqué au li parent

                $(this)
                    .parents('li.nav-item.dropdown.show')
                    .on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass('show'); // appliqué au ul
                        $('.dropdown-submenu.show').removeClass('show'); // appliqué au li parent
                    });
                return false;
            });

        $(window).scroll(function () {
            $scrollamount = $(window).scrollTop();

            if ($scrollamount > 150) {
                $(".navbar").addClass("fixed_nav");

            } else {
                $(".navbar").removeClass("fixed_nav");

            }
        });

        $(document).click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        $('select').niceSelect();

        $('.video-btn').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-i' +
                        'frame" frameborder="0" allowfullscreen></iframe></div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                    // you may add here more sources

                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }

        });

        $(window).scroll(function () {
            $scrollamount = $(window).scrollTop();

            if ($scrollamount > 200) {
                $(".scrollUp").addClass("active");

            } else {
                $(".scrollUp").removeClass("active");

            }
        });

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })

        $('#single-slide').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })

        /* --------------------------------------------------------
            ## Image Slide - 5
        --------------------------------------------------------- */
        $('.ltn__image-slider-5-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '450px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '250px'
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '200px'
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '150px'
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px'
                    }
                }, {
                    breakpoint: 580,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px'
                    }
                }
            ]
        });

        $(".carousel-inner").swipe({
            //Generic swipe handler for all directions
            swipeRight: function (event, direction, distance, duration, fingerCount) {
                $(this)
                    .parent()
                    .carousel('prev');
            },
            swipeLeft: function () {
                $(this)
                    .parent()
                    .carousel('next');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });

    });

const showSearch = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav
                .classList
                .toggle('show')
            toggle
                .classList
                .toggle('bx-x')
        })
    }
}
showSearch('search-toggle', 'search-area');

const showUser = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav
                .classList
                .toggle('show')
            toggle
                .classList
                .toggle('bx-x')
        })
    }
}
showUser('user-toggle', 'user-area');

$(document).ready(function () {
    $('#user-toggle')
        .click(function () {
            $('.search-bar').removeClass('show');
            $('#search-toggle').removeClass('bx-x');
        })
    $('#search-toggle').click(function () {
        $('.user-dropdown').removeClass('show');
        $('#user-toggle').removeClass('bx-x');
    })

    $('.nav-link').click(function () {
        $('.user-dropdown').removeClass('show');
        $('#user-toggle').removeClass('bx-x');
        $('.search-bar').removeClass('show');
        $('#search-toggle').removeClass('bx-x');
    })
})