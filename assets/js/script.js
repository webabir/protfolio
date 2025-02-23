$(function () {

    window.onload = function () {
        var $main = document.querySelector("body");
        window.mySparticles = new Sparticles($main, {
            speed: 5,
            shape: "diamond",
            maxSize: 15,
            minSize: 2,
        });
    }

    $(window).ready(function () {

        $('#toggle-nav').click(function () {
            $(this).toggleClass('fa-bars fa-close')
            $('.nav-wrap').slideToggle(200)
        })



        $(document).ready(function () {

            $(window).on('resize load', () => {
                if ($(window).width() < 992) {
                    const $els = $("body").find("[data-aos]");
                    $els.removeClass("aos-animate").removeAttr("data-aos data-aos-easing data-aos-duration");

                } else {
                    AOS.init();
                }
            });

        });


        // tiny slider
        var SkillSlider = tns({
            container: '.skills-wrap',
            loop: true,
            autoplay: true,
            autoplayButtonOutput: false,
            controls: false,
            nav: false,
            speed: 3000,
            autoplayTimeout: 0,
            preventActionWhenRunning: true,
            autoplayHoverPause: false,
            responsive: {
                1100: {
                    items: 6
                },
                992: {
                    items: 5
                },
                768: {
                    items: 4
                },
                570: {
                    items: 3
                },
                0: {
                    items: 2
                }
            }
        });


        var skillButtonClick = 0
        $('#skillViewButtons').click((e) => {
            $(e.currentTarget).toggleClass('fa-grip fa-sliders')
            if (skillButtonClick === 0) {
                SkillSlider.destroy();
                skillButtonClick = 1
                $('.skills-wrap').addClass('slider-destroy')
            } else {
                $('.skills-wrap').removeClass('slider-destroy')
                skillButtonClick = 0
                SkillSlider = tns({
                    container: '.skills-wrap',
                    items: 6,
                    loop: true,
                    autoplay: true,
                    autoplayButtonOutput: false,
                    controls: false,
                    nav: false,
                    speed: 3000,
                    autoplayTimeout: 0,
                    preventActionWhenRunning: true,
                    autoplayHoverPause: false,
                });
            }
            console.log(skillButtonClick)
        })

        // protf-images-slider
        $('.protf-popup').magnificPopup({
            type: 'inline',
            callbacks: {
                open: function () {

                    if (window.sliderInstance) {
                        window.sliderInstance.destroy();
                    }
                    window.sliderInstance = tns({
                        container: '.protf-images-slider',
                        items: 1,
                        slideBy: 'page',
                        autoplay: false,
                        nav: false,
                        loop: false,
                        autoplayButton: false,
                        gutter: 10,
                        controlsText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>']
                    });

                }
            }
        });


        // timeline
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 700,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });

    })


    // filterizr
    var filterizr = new Filterizr('.protfolio-wrap');
    $(".protfoliofilter li").on("click", function () {
        $(".protfoliofilter li").removeClass("active"); // Remove active class from all buttons
        $(this).addClass("active"); // Add active class to clicked button

        var filterValue = $(this).data("filter"); // Get the filter category
        filterizr.filterizr("filter", filterValue); // Apply the filter
    });



    $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    })

    $('#scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

})
