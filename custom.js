
  function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  jQuery(document).ready(function() {
    AOS.init({
    once: true,
    duration:1200,
    });
  });

  $(document).ready(function () {

    // $(".services-carousel").owlCarousel({
    //     loop: false,
    //     margin: 15,
    //     autoplay: false,
    //     autoplayTimeout: 2500,
    //     smartSpeed: 800,
    //     dots: false,
    //     nav: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 2
    //         },
    //         768: {
    //             items: 2
    //         },
    //         1024: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }
    // });

    $(".projects-carousel").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 800,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    $(".skills-carousel").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 800,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });

    animateProgress();

    $('.skills-carousel').on('translated.owl.carousel', function () {
        animateProgress();
    });

});

function animateProgress() {

    $('.skill-card').each(function () {

        let percent = $(this).data('percent');

        $(this).find('.progress-bar')
            .stop()
            .css('width', '0')
            .animate({
                width: percent + '%'
            }, 1500);

    });

}