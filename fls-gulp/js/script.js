var swiper = new Swiper('.main-swiper .swiper', {
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

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  };
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
      "map",
      {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [61.238666, 73.43687],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 9,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map-info">
        <p class="map-info__title">Аптечный пункт</p>   
        <div class="map-info__row">
            <img src="img/icons/adress-map.svg" alt="adress">
            <p>{{properties.adress}}</p>
        </div>
        <div class="map-info__row">
            <img src="img/icons/phone-map.svg" alt="adress">
            <a href="tel:{{properties.phoneNumber}}">{{properties.phoneText}}</a>
        </div>
    </div>`), 

    myPlacemarkWithContent = new ymaps.Placemark(
      [61.238666, 73.43687],
      {
        adress: 'ХМАО-Югры, Сургутский район, село Сытомино, ул. Лесная 2В',
        phoneText: '8 (3462) 58 93 60 добавочный 62',
        phoneNumber: '+73462589360',
        iconContent: "1",
      },
      {
        iconImageHref:
          "img/icons/icon-map.svg",
        iconImageSize: [36, 36],
        iconLayout: "default#imageWithContent",
        iconContentOffset: [12.5, 10],
        iconImageOffset: [-15, 0],
        iconContentLayout: MyIconContentLayout,
        balloonContentLayout: BalloonContentLayout,
        balloonPanelMaxMapArea: 0,
        hideIconOnBalloonOpen: false,
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
  myPlacemarkWithContent.events.add('click', function (e) {
    e.get('target').options.set({iconImageHref: 'img/icons/icon-map_active.svg'});
});
}
;
const selectBtn = document.querySelector('.select__btn');
const selectExpand = document.querySelector('.select__expand');

if(selectBtn) {

    const inputsSelect = document.querySelectorAll('.select input')
    inputsSelect.forEach(input => {
        input.addEventListener('click', ({target}) => {
            const label = document.querySelector(`[for="${target.id}"]`);

            selectBtn.textContent = label.textContent;
        })
    })

    selectBtn.addEventListener('click', () => {
        selectBtn.classList.toggle('select__btn_open');
        selectExpand.classList.toggle('select__expand_open')
        

        if(selectExpand.classList.contains('select__expand_open')) {
            setTimeout(() => {
                document.addEventListener('click', (evt) => {
                    if(evt.target !== selectExpand) selectExpand.classList.remove('select__expand_open')
                    document.removeEventListener('click', (evt) => {
                        if(evt.target !== selectExpand) selectExpand.classList.remove('select__expand_open')
                    })
                }, {once: true})
            }, 100)
            
        }
    })

    
}
;

// Двухуровневое меню
const twoLevelMenus = document.querySelectorAll('.menu__item-dropdown')
twoLevelMenus.forEach((item, ind, arr) => {
    item.querySelector('.menu__link').addEventListener('click', () => {
        item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open')
        arr.forEach(el => el !== item ? el.classList.remove('open') : "")
    })
})


// Меню модалка
const menuBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const banner = document.querySelector('.banner')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('burger_open')
    menu.classList.toggle('menu_open')
    if(banner) banner.classList.toggle('bc-white');
})


// Поиск

const inputSearch = document.querySelector('.search input')
const searchClose = document.querySelector('.search__close')
const formSearch = document.querySelector('.search')

inputSearch.addEventListener('input', (evt) => evt.target.value ? evt.target.parentNode.classList.add('input-value') : evt.target.parentNode.classList.remove('input-value'))
searchClose.addEventListener('click', () => {
    formSearch.classList.remove('open')
    formSearch.reset();
})

const appendSearch = () => $('.search-and-phone').append($('.search'))
const searchInHeader = () => $('.search').insertAfter($('.logo_header'))
const logicSearch = () => {
        $('.search-img').click(function() {
            $('.search').addClass('open')
        })
}
const functional = () => {
    $(window).resize(function () {
        window.innerWidth <= 1200 ? appendSearch() : searchInHeader()
        if(window.innerWidth < 1200) logicSearch()
    })
} 

const searchMin = () => {appendSearch(); logicSearch(); functional()}

window.innerWidth <= 1200 ? searchMin() : functional()

//document.addEventListener('click', (evt) => (evt.target !== formSearch) && (!formSearch.classList.contains('open')) ? formSearch.classList.remove('open') : '')