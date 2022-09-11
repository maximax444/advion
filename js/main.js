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
