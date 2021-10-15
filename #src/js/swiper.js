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

