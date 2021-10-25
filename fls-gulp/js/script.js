/* Свайпер */
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
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      960: {
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

;

/* Яндекс карты */
ymaps.ready(init);

const adressPharmacies = [
  {
    iconContent: "1",
    coordinates: [61.238666, 73.43687],
    adress: "ХМАО-Югры, Сургут, ул. Комсомольский 14/1",
    extension: "604",
  },
  {
    iconContent: "2",
    coordinates: [61.256821, 73.404809],
    adress: "ХМАО-Югры, Сургут, ул. Студенческая 21",
    extension: "66",
  },
  {
    iconContent: "3",
    coordinates: [61.244007, 73.398099],
    adress: "ХМАО-Югры, Сургут, ул. Энергетиков 14",
    extension: "68",
  },
  {
    iconContent: "4",
    coordinates: [61.264175, 73.400165],
    adress: "ХМАО-Югры, Сургут, ул. Островского 15",
    extension: "69",
  },
  {
    iconContent: "5",
    coordinates: [61.258954, 73.254683],
    adress: "ХМАО-Югры, Сургутский район, пгт Белый Яр, ул. Есенина 13",
    extension: "60",
  },
  {
    iconContent: "6",
    coordinates: [61.100698, 72.589489],
    adress: "ХМАО-Югры, Пыть-Ях, ул. 2 мкр Нефтяников 28а",
    extension: "71",
  },
  {
    iconContent: "7",
    coordinates: [60.754334, 72.85522],
    adress: "ХМАО-Югры, Пыть-Ях, ул. 2 мкр Сибирская 2а",
    extension: "72",
  },

  {
    iconContent: "8",
    coordinates: [61.238666, 73.43687],
    adress: "ХМАО-Югры, Сургутский район, село Сытомино, ул. Лесная 2В",
    extension: "62",
  },
  {
    iconContent: "9",
    coordinates: [63.935767, 65.04992],
    adress: "ХМАО-Югры, Сургутский район, пгт Березово, ул. Чкалова 47/3",
    extension: "73",
  },
  {
    iconContent: "10",
    coordinates: [63.936763, 65.032646],
    adress: "ХМАО-Югры, Сургутский район, пгт Березово, ул. Ленина 56",
    extension: "75",
  },
  {
    iconContent: "11",
    coordinates: [63.19209, 64.424603],
    adress: "ХМАО-Югры, Сургутский район, пгт Игрим, ул. Транспортная 26",
    extension: "77",
  },
  {
    iconContent: "12",
    coordinates: [62.865917, 61.63926],
    adress: "ХМАО-Югры, Березовский район, село Хулимсунт, 4 мкр дом 46",
    extension: "80",
  },
  {
    iconContent: "13",
    coordinates: [63.204697, 59.726666],
    adress: "ХМАО-Югры, Березовский район, с. Приполярный, 2 мкр дом 5А",
    extension: "79",
  },
  {
    iconContent: "14",
    coordinates: [64.255985, 60.913133],
    adress: "ХМАО-Югры, Березовский район, с. Саранпауль, ул. Н. Вокуева 3",
    extension: "78",
  },
];

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
    </div>`
    );

  adressPharmacies.forEach(
    ({ adress, extension, iconContent, coordinates }) => {
      myPlacemarkWithContent = new ymaps.Placemark(
        coordinates,
        {
          adress,
          phoneText: `8 (3462) 58 93 60 добавочный ${extension}`,
          phoneNumber: "+73462589360",
          iconContent,
        },
        {
          iconImageHref: "img/icons/icon-map.svg",
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

      myPlacemarkWithContent.events.add(["balloonopen"], function (e) {
        e.get("target").options.set({
          iconImageHref: "img/icons/icon-map_active.svg",
        });
      });

      myPlacemarkWithContent.events.add(["balloonclose"], function (e) {
        e.get("target").options.set({
          iconImageHref: "img/icons/icon-map.svg",
        });
      });
    }
  );

  var contactsMap = new ymaps.Map(
    "contacts-map",
    {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [61.260758, 73.252958],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17,
      controls: []
    },
    {
      searchControlProvider: "yandex#search",
    }
  )
    
  contactsMap.controls.add('zoomControl', {position: {
    left: 7, top: 10
  }})
  
        
      
}
;

/* Селект */
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

/* Календарь */
const calendars = document.querySelectorAll(".calendar");
if (calendars.length > 0) {
  calendars.forEach((calendarCurrent) => {
    const calendarBtn = calendarCurrent.querySelector(".calendar__btn");
    const calendarExpand = calendarCurrent.querySelector(".calendar__expand");
    calendarBtn.addEventListener("click", () =>
      calendarExpand.classList.toggle("open")
    );

    document.addEventListener('click', ({target}) => !target.closest('.calendar') ? calendarExpand.classList.remove("open") : '')

    function Calendar2(id, year, month) {
      var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<tr>",
        month = [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ];
      if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += "<td>";
      } else {
        for (var i = 0; i < 6; i++) calendar += "<td>";
      }
      for (var i = 1; i <= Dlast; i++) {
        if (
          i == new Date().getDate() &&
          D.getFullYear() == new Date().getFullYear() &&
          D.getMonth() == new Date().getMonth()
        ) {
          calendar += `<td class="calendar__day active">` + i;
        } else {
          calendar += '<td class="calendar__day">' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "<tr>";
        }
      }
      for (var i = DNlast; i < 7; i++) calendar += "<td>&nbsp;";
      calendarCurrent.querySelector("#" + id + " tbody").innerHTML = calendar;
      calendarCurrent.querySelector("#" + id + " thead td:nth-child(2)").innerHTML =
        month[D.getMonth()] + ", " + D.getFullYear() + " г.";
      calendarCurrent.querySelector(
        "#" + id + " thead td:nth-child(2)"
      ).dataset.month = D.getMonth();
      calendarCurrent.querySelector(
        "#" + id + " thead td:nth-child(2)"
      ).dataset.year = D.getFullYear();
      calendarCurrent.querySelector(
        "#" + id + " thead td:nth-child(2)"
      ).dataset.fulldate = `${D.getMonth() + 1}` + "." + D.getFullYear();
      calendarCurrent
        .querySelector("#" + id + " thead td:nth-child(2)")
        .classList.add("fulldate");

      if (calendarCurrent.querySelectorAll("#" + id + " tbody tr").length < 6) {
        // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        calendarCurrent.querySelector("#" + id + " tbody").innerHTML +=
          "<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;";
      }
    }
    Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    calendarCurrent.querySelector(
      "#calendar2 thead tr:nth-child(1) td:nth-child(1)"
    ).onclick = function ({ target }) {
      Calendar2(
        "calendar2",
        calendarCurrent.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
        parseFloat(
          calendarCurrent.querySelector("#calendar2 thead td:nth-child(2)").dataset
            .month
        ) - 1
      );
      calendarBtn.querySelector(
        ".calendar__now"
      ).textContent = calendarCurrent.querySelector(".fulldate").textContent;
      abc();
    };
    // переключатель плюс месяц
    calendarCurrent.querySelector(
      "#calendar2 thead tr:nth-child(1) td:nth-child(3)"
    ).onclick = function () {
      Calendar2(
        "calendar2",
        calendarCurrent.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
        parseFloat(
          calendarCurrent.querySelector("#calendar2 thead td:nth-child(2)").dataset
            .month
        ) + 1
      );
      calendarBtn.querySelector(
        ".calendar__now"
      ).textContent = calendarCurrent.querySelector(".fulldate").textContent;
      abc();
    };

    function abc() {
      const days = calendarCurrent.querySelectorAll(".calendar__day");
      const calendarInput = calendarCurrent.querySelector(".calendar input");

      days.forEach((day, ind, arr) => {
        day.addEventListener("click", (evt) => {
          let currentData =
            evt.target.textContent +
            `.` +
            calendarCurrent.querySelector(".fulldate").dataset.fulldate;
          calendarInput.value = currentData;
          arr.forEach((el) => {
            el.classList.remove("active");
            if (evt.target === el) el.classList.add("active");
          });
        });
      });
    }

    abc();

    //Сюда свою функцию
    const calendarForm = calendarCurrent.querySelector(".calendar form");
    calendarForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    //
  });

  


}
;

/* Табы */
//tabs
var tabs = document.querySelectorAll(".tabs");

var showTab = function showTab(self) {
    var pointer = self.value;
    var parentTabs = self.closest(".tabs");
    var tabsContent = parentTabs.querySelectorAll(".tabs__tab");
    const calendarNews = document.querySelector('.calendar')
    tabsContent.forEach(function (tab) {
        tab.classList.remove("tabs__tab--active");
        if (tab.dataset.pointer === pointer) {
            tab.classList.add("tabs__tab--active");
        }

        /* if(calendarNews && tab.classList.contains('tabs__tab--active') && window.innerWidth <= 768) tab.querySelector('.news').prepend(calendarNews) */
    });
};

if (tabs.length > 0) {
    tabs.forEach(function (tabsContainer) {
        var tabsControls = tabsContainer.querySelector(".tabs__controls");
        var labels = tabsControls.querySelectorAll('label')
        labels.forEach((label, ind, arr) => {
            label.addEventListener('click', (evt) => {
                arr.forEach(item => {
                    item.classList.remove('label--active')
                    if(evt.target === item) evt.target.classList.add('label--active')
                })
                
            })
        })
        tabsControls.addEventListener("change", function (evt) {
            showTab(evt.target);
        });
        showTab(tabsControls.querySelector("input:checked"));
        tabsContainer.dataset.loaded = "true";
    });
};

/* Попапы */
const popups = document.querySelectorAll('.popup')


if(popups.length > 0) {
    popups.forEach(popup => {
        const id = popup.id;
        const closeBtn = popup.querySelector('.close-btn')
        const popupContainer = popup.querySelector('.popup__container');

        const links = document.querySelectorAll(`[data-pointer="${id}"]`)
        links.forEach(link => {
            link.addEventListener('click', ({target}) => {
                open(link.dataset.pointer, target)
            })
        })


        closeBtn.addEventListener('click', () => close())

        function open(pointer, target) {
            if(pointer === id) popup.classList.add('popup_opened')
            if(pointer === 'photo') {
                popup.querySelector('.popup__image').src = target.src
                popup.querySelector('source').srcset = target.src
            }

            document.addEventListener('keydown', handleEscClose)
        }

        function close () {
            popup.classList.remove('popup_opened')
            document.removeEventListener('keydown', handleEscClose)
        }

        function handleEscClose (evt) {
            if (evt.keyCode === 27) {
                close()
            }
        }

        function handleOverlayClick(evt) {
            if (evt.target === evt.currentTarget) {
                close();
            }
        }

        popupContainer.addEventListener('click', (evt) => handleOverlayClick(evt))
    })

};

/* Загрузить все фото */
// Если загрузка фото через бэк, тогда удалить
const photos = document.querySelectorAll('.media__photo')

if(photos.length > 0) {
    photos.forEach(block => {
        const btnMore = block.querySelector('#more')

        const gallery = block.querySelectorAll('.media__photo-current')


        const hide = () => {
            gallery.forEach((item, index, arr) => {
                if(index > 5) item.style.display = 'none'
            })
        }

        const show = () => {
            gallery.forEach(item => {
                if(item.style.display === 'none') item.style.display = 'block';
            })
        }

        hide()

        if(btnMore) {
            const btnMoreText = btnMore.querySelector('span')
            btnMore.addEventListener('click', () => {
                if(btnMore.value === "yes") {
                    show()
                    btnMore.value = 'no'
                    btnMoreText.textContent = 'Свернуть'
                } else {
                    hide()
                    btnMore.value = 'yes'
                    btnMoreText.textContent = 'Показать все'
                }
            })
        }
        
    })
}

// -----------------------------------------------


// Двухуровневое меню

const twoLevelMenus = document.querySelectorAll('.menu__item-dropdown')

function openMenuMaxWidth1200 () {
    twoLevelMenus.forEach((item, ind, arr) => {

        const linkMain = item.querySelector('.menu__link')

        linkMain.addEventListener('click', (e) => e.preventDefault())

        item.querySelector('.menu__link').addEventListener('click', () => {
            item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open')
            arr.forEach(el => el !== item ? el.classList.remove('open') : "")
        })
    })
}

function openMenuMinWidth1200 () {
    twoLevelMenus.forEach((item, ind, arr) => {

        const linkMain = item.querySelector('.menu__link')

        linkMain.removeEventListener('click', (e) => e.preventDefault())

        item.querySelector('.menu__link').removeEventListener('click', () => {
            item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open')
            arr.forEach(el => el !== item ? el.classList.remove('open') : "")
        })
    })
}

window.innerWidth <= 1200 ? openMenuMaxWidth1200() : openMenuMinWidth1200()
$(window).resize(function () {
    window.innerWidth <= 1200 ? openMenuMaxWidth1200() : openMenuMinWidth1200()
})



/* document.addEventListener('click', ({target}) => !target.closest('.menu__item-dropdown') ? twoLevelMenus.forEach(item => item.classList.remove('open')) : '') */
// Меню модалка
const menuBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const banner = document.querySelector('.banner')

const main = document.querySelector('main')
const footer = document.querySelector('footer')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('burger_open')
    menu.classList.toggle('menu_open')

    menu.classList.contains('menu_open') ? [main, footer].forEach(item => item.style.display = 'none') : [main, footer].forEach(item => item.style.display = 'block')
    if(document.querySelector('.background-blue')) document.querySelector('.background-blue').classList.toggle('bcwhite')
})


// Поиск

const inputSearch = document.querySelector('.header__search.search input')
const searchClose = document.querySelector('.header__search .search__close')
const formSearch = document.querySelector('.header__search.search')

inputSearch.addEventListener('input', (evt) => {
    const headerDown = document.querySelector('.header .header__down')
    evt.target.value ? evt.target.parentNode.classList.add('input-value') : evt.target.parentNode.classList.remove('input-value')
    /* evt.target.value && evt.target.closest('.header__down') ? headerDown.classList.add('input-value') : headerDown.classList.remove('input-value') */
})

searchClose.addEventListener('click', () => {
    formSearch.classList.remove('open')
    formSearch.reset();
})

const appendSearch = () => $('.search-and-phone').append($('.header__search.search'))
const searchInHeader = () => $('.header__search.search').insertAfter($('.logo_header'))
const logicSearch = () => {
        $('.header__search .search-img').click(function() {
            $('.header__search.search').addClass('open')
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

document.addEventListener('click', ({target}) => !target.closest('.header__down') ? formSearch.classList.remove('open') : '')

if(window.innerWidth <= 768) {
    $('.footer__down-right').append($('.copyright'))
} 

$(window).resize(function () {
    window.innerWidth <= 768 ? $('.footer__down-right').append($('.copyright')) : $('.footer__down-left').append($('.copyright'))
})

// скролл

$(function(){

$('.target__info-bb').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#map').offset().top }, 1000);
    e.preventDefault();
});

});