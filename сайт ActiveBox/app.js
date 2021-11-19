$(function () {
    let header = $("#header");
    let intro = $("#intro");

    let scrollPos = $(window).scrollTop();

   $(window).on("scroll load resize", function () {
       introH = intro.innerHeight();
       scrollPos = $(this).scrollTop();

        if( scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
   })


    header.addClass("fixed");
});

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700)

    })


let slider = $("#reviewsSlider");


slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
});