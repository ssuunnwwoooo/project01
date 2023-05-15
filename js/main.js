$(function () {
    $('.topBanner .inner i').on('click', function () {
        $('.topBanner').addlass('on')
    });

    $('.mainSlide').slick({
        arrows: false,
        dots: true,
    });
})