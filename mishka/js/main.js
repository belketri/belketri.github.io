//АДАПТИВНОЕ МЕНЮ -- ПОКАЗАТЬ

var navMain = document.querySelector('.main-nav');
var navToogle = document.querySelector('.main-nav__toogle');
navToogle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

//АДАПТИВНОЕ МЕНЮ -- СКРЫТЬ

var userMain = document.querySelector('.user-nav');
var navToogle = document.querySelector('.main-nav__toogle');
navToogle.addEventListener('click', function() {
    if (userMain.classList.contains('main-nav--closed')) {
        userMain.classList.remove('main-nav--closed');
        userMain.classList.add('main-nav--opened');
    } else {
        userMain.classList.add('main-nav--closed');
        userMain.classList.remove('main-nav--opened');
    }
});

//СЛАЙДЕР

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});
