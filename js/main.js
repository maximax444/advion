$('.use__more').on('click', function (e) {
    e.preventDefault();
    $(this).hide();
    $('.use__block').css('display', 'block');
});
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
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
if ($(window).width() < 576) {
    $('.features__cloud1 img').attr('src', $('.features__cloud1 img').attr('data-desk'));
}
$(document).ready(function () {
    setTimeout(function () {
        $('.main__bottom').addClass('active');
    }, 3500);
});
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
$(".popup-prod__slider").each(function () {
    $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        dots: true
    });
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
    let bg2 = $('.features__cloud1 img');
    let bg3 = $('.features__cloud2 img');
    let bg4 = $('.main__human img');
    let bg5 = $('.main__animal img');
    let bg6 = $('.main__circle');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px,' + y * 30 + 'px)');
        bg2.css('transform', 'translate(-' + x * 30 + 'px,' + y * 30 + 'px)');
        bg3.css('transform', 'translate(' + x * 30 + 'px,' + y * 30 + 'px)');
        bg4.css('transform', 'translate(-' + x * 30 + 'px,' + y * 0 + 'px)');
        bg5.css('transform', 'translate(' + x * 30 + 'px,' + y * 0 + 'px)');
        bg6.css('transform', 'translate(' + x * 0 + 'px,' + y * 30 + 'px)');
    });
}
$(window).scroll(function () {

    var target = $(this).scrollTop();
    if (target <= 400) {

        $('.header__scroll').removeClass('scrolled');
    } else {

        $('.header__scroll').addClass('scrolled');

    }

});
$('.header__call').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    var now = $(this);
    $(this).closest('.popup').addClass('fade');

    setTimeout(function () {
        now.closest('.overlay').removeClass('overlay-active');
        now.closest('.popup').removeClass('fade');
    }, 500);
});
$('.overlay-call').on('mousedown', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').find('.popup').addClass('fade');

        setTimeout(function () {
            $('.overlay-call').removeClass('overlay-active');
            $('.overlay-call').find('.popup').removeClass('fade');
        }, 500);
    }
});
$('.overlay-click').on('mousedown', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-click.overlay-active').find('.popup').addClass('fade');

        setTimeout(function () {
            $('.overlay-click.overlay-active').removeClass('overlay-active');
            $('.overlay-click.overlay-active').find('.popup').removeClass('fade');
        }, 500);
    }
});
$('.overlay-prod').on('mousedown', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-prod.overlay-active').find('.popup').addClass('fade');

        setTimeout(function () {
            $('.overlay-prod.overlay-active').removeClass('overlay-active');
            $('.overlay-prod.overlay-active').find('.popup').removeClass('fade');
        }, 500);
    }
});
$('.products__block').on('click', function (e) {
    let prodId = $(this).attr('data-id');
    if ($(e.target).hasClass('products__btn')) {
        e.preventDefault();
        $('.overlay-click').each(function () {
            if ($(this).attr('data-id') == prodId) {
                $(this).addClass('overlay-active');
            }
        });
        $('body').css("overflow", "hidden");
    } else {
        e.preventDefault();
        $('.overlay-prod').each(function () {
            if ($(this).attr('data-id') == prodId) {
                $(this).addClass('overlay-active');
                $(this).find(".popup-prod__slider").slick('reinit');
            }
        });
        $('body').css("overflow", "hidden");

    }
});
$('.popup-prod__vert a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.popup-prod').find('.popup-prod__img').find('img').attr('src', $(this).find('img').attr('src'));
    $(this).closest('.popup-prod').find('.popup-prod__vert a').each(function () {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
    let prodId = $(this).attr('data-id');
    if ($(e.target).hasClass('products__btn')) {
        e.preventDefault();
    } else { }
});
$('.popup-prod__click').on('click', function (e) {
    e.preventDefault();
    let prodModal = $(this).closest('.overlay-prod');
    let prodId = $(this).closest('.overlay-prod').attr('data-id');
    $('.overlay-click').each(function () {
        if ($(this).attr('data-id') == prodId) {

            $(this).addClass('overlay-active');
            prodModal.removeClass('overlay-active');
        }
    });
    $('body').css("overflow", "hidden");
});
function moveTo(animNow, num) {
    $('.menu__animal').addClass('menu__animal' + (Number(animNow) + 1));
    $('.menu__animal').attr('data-now', Number(animNow) + 1);
}
function moveFrom(animNow, num) {
    $('.menu__animal').removeClass('menu__animal' + (Number(animNow)));
    $('.menu__animal').attr('data-now', Number(animNow) - 1);
}
$('.menu__wrap a').on('mouseenter', function () {
    let num = $(this).attr('data-el');
    let animNow = $('.menu__animal').attr('data-now');
    console.log(num);
    console.log(animNow);
    while (num != animNow) {
        if (num > animNow) {
            moveTo(animNow, num);
            animNow++;
        } else {
            moveFrom(animNow, num);
            animNow--;
        }
    }

});
$('.menu__wrap a').on('click', function () {
    $('.menu').addClass('fade');

    setTimeout(function () {
        $('.menu').removeClass('active');
        $('.menu').removeClass('fade');
    }, 500);
    $('body').css("overflow", "visible");
});
$('.header__mob').on('click', function (e) {
    e.preventDefault();
    $('.menu').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.menu__close').on('click', function (e) {
    e.preventDefault();
    $('.menu').addClass('fade');

    setTimeout(function () {
        $('.menu').removeClass('active');
        $('.menu').removeClass('fade');
    }, 500);
    $('body').css("overflow", "visible");
});
$('.menu').on('click', function (e) {
    if (!(($(e.target).parents('.menu__wrap').length) || ($(e.target).hasClass('menu__wrap')))) {
        $('body').css("overflow", "visible");
        $('.menu').addClass('fade');

        setTimeout(function () {
            $('.menu').removeClass('active');
            $('.menu').removeClass('fade');
        }, 500);
    }
    e.preventDefault();
});