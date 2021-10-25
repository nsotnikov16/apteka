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

  if(contactsMap) {
    contactsMap.controls.add('zoomControl', {position: {
      left: 7, top: 10
    }})
  }
    
}
