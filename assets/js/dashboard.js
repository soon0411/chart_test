$(function () {
  //
  // Carousel
  //
  $(".counter-carousel").owlCarousel({
    rtl: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        }
    }
})
});
