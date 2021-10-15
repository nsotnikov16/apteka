/* Свайпер */
@@include('swiper.js');

/* Яндекс карты */
@@include('yandex-map.js');

/* Селект */
@@include('chooseCity.js');

/* Календарь */
@@include('calendar.js');

/* Табы */
@@include('tabs.js');

/* Попапы */
@@include('popups.js');

/* Загрузить все фото */
@@include('more-photo.js')

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

const inputSearch = document.querySelector('.header__search.search input')
const searchClose = document.querySelector('.header__search .search__close')
const formSearch = document.querySelector('.header__search.search')

inputSearch.addEventListener('input', (evt) => evt.target.value ? evt.target.parentNode.classList.add('input-value') : evt.target.parentNode.classList.remove('input-value'))
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

//document.addEventListener('click', (evt) => (evt.target !== formSearch) && (!formSearch.classList.contains('open')) ? formSearch.classList.remove('open') : '')

//Календарь
/* let date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate()) */


