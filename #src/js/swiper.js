var swiperMain = new Swiper('.main-swiper .swiper', {
    slidesPerView: 5,
    /* direction: getDirection(), */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
/*     on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    }, */

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 5,
      }
    },
    /* autoHeight: true, */

  });

  var swiperDocuments =  new Swiper('.documents .swiper', {
    slidesPerView: 4,
    /* direction: getDirection(), */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
/*     on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    }, */
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

