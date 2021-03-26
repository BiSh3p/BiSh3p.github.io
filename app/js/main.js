$(function () {
    $('.burger-img').on('click', function () {
        $('.burger__menu').slideToggle();
    })
    $('.close-menu').on('click', function () {
        $('.burger__menu').slideToggle();
    })
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 250,
            depth: 300,
            modifier: 2,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.previous',
        },
    })
})