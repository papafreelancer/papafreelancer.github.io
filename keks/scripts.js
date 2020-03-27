$(document).ready(function(){
    $('.cards__slider').slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  autoplay: false
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
  });