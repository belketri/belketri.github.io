$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});

$(function() {
 $('.open-modal').click(function(){
 $('#basic-modal').modal();
 return false;
 });
});