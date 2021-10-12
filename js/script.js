var swiper = new Swiper('.main-swiper .swiper', {
    slidesPerView: 5,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  };


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