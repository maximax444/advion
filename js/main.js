$('.use__more').on('click', function (e) {
    e.preventDefault();
    $(this).hide();
    $('.use__block').css('display', 'block');
});
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
$('.delivery__name').on('click', function () {
    $(this).closest('.delivery__block').toggleClass('active');
    if ($(this).closest('.delivery__block').hasClass('active')) {
        $(this).closest('.delivery__block').find('.delivery__cont').slideDown();
    } else {
        $(this).closest('.delivery__block').find('.delivery__cont').slideUp();
    }

});
if ($(window).width() >= 768) {
    console.log($('.term__img img').attr('data-desk'));
    $('.term__img img').attr('src', $('.term__img img').attr('data-desk'));
    console.log($('.term__img img').attr('src'));
}
$(".reviews__slider").slick({
    slide: ".reviews__slide",
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    adaptiveHeight: false,
    prevArrow: ".prev-rev",
    nextArrow: ".next-rev",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slide: ".reviews__block",
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});
$(".warn__slider").slick({
    slide: ".warn__block",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    prevArrow: ".prev-warn",
    nextArrow: ".next-warn"
});
$(".props__slider").slick({
    slide: ".props__block",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: ".props__prev",
    nextArrow: ".props__next",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                adaptiveHeight: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
});
$(".props__slider").on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.props__curr').html("0" + (currentSlide + 1));
});
if (screen.width >= 992) {
    let bg = $('.props__circle img');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px,' + y * 30 + 'px)');
    });
}