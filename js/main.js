$(function () {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 0,
    },
  });

  $(".heroes__slider-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".heroes__slider-text",
    prevArrow: '<button class="slick-prev slick-btn"><img src="images/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button class="slick-next slick-btn"><img src="images/arrow-right.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".heroes__slider-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".heroes__slider-img",
    arrows: false,
  });
  console.log("11");
});
