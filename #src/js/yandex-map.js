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
