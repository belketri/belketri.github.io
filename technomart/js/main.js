// ЛОГИН

$(document).ready(function () {
    $('#write-us').click(function (event) {
        event.preventDefault();
        $('#feedback')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, 200);
    });
});
$('#feedback-close').click(function () {
    $('#feedback')
        .animate({
                opacity: 0
            }, 200,
            function () {
                $(this).css('display', 'none');

            })
})

// MAP

$(document).ready(function () {
    $('#open-map').click(function (event) {
        $('#map')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, 200);
    });
});
$('#map-close').click(function () {
    $('#map')
        .animate({
                opacity: 0
            }, 200,
            function () {
                $(this).css('display', 'none');

            })
})

// PRICE RANGE

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 40000,
        values: [0, 30000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + "                     " + ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
        "                        " + $("#slider-range").slider("values", 1));
});
