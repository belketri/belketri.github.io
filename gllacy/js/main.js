// ВЫПАДАЮЩЕЕ МЕНЮ

$(".active-main-menu").click(function () {
    $("#main-menu").slideToggle("slow");
});

// СЛАЙДЕР

$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });
});

// МОДАЛКИ

// ПОИСК

$(document).ready(function () {
    $('#active-user-search').click(function (event) {
        event.preventDefault();
        $('#user-search')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, 200);
    });
});
$(document).mouseup(function (e) {
    var container = $("#user-search");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

// ЛОГИН

$(document).ready(function () {
    $('#active-user-login').click(function (event) {
        event.preventDefault();
        $('#user-login')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, 200);
    });
});
$(document).mouseup(function (e) {
    var container = $("#user-login");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

// ОБРАТНАЯ СВЯЗЬ

$(document).ready(function () {
    $('#active-feedback').click(function (event) {
        event.preventDefault();
        $('#open-feedback')
            .css('display', 'block')
            .animate({
                opacity: 1,
                top: '5%'
            }, 200);
    });
});

$('#feedback-close').click(function () {
    $('#open-feedback')
        .animate({
                opacity: 0,
                top: '45%'
            }, 200,
            function () {
                $(this).css('display', 'none');

            })
})

// СМЕНА ФОНА BODY

$( function() {
    
var xColors =['#849d8f','#8996a6','#9d8b84'];
    
$('.owl-dot').click( function() {
    
 $('body').css('backgroundColor', xColors[$(this).index()] );    
    
});
    
});