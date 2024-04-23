$(".slider-3").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow:
    '<button type="button" class="btn btn-dark prev-btn"><i class="fa fa-arrow-left"></i></button>',
  nextArrow:
    '<button type="button" class="btn btn-dark next-btn"><i class="fa fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".testimonial-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow:
    '<button type="button" class="btn btn-dark prev-btn"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="btn btn-dark next-btn"><i class="fa fa-chevron-right"></i></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
