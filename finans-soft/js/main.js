new Swiper('.slider-box',{

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function(){
    $('.tabs__triggers-item').click(function(e){
        e.preventDefault();
        $('.tabs__triggers-item').removeClass('tabs__triggers-item-active');
        $('.tabs__content-item').removeClass('tabs__content-item-active');
        $(this).addClass('tabs__triggers-item-active');
        $($(this).attr('href')).addClass('tabs__content-item-active')
    });
    $('.tabs__triggers-item:first').click();
});
var galleryThumbs = new Swiper('.mini-slide', {
    spaceBetween: 10,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.project-slider', {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs,
    },
  });

var swiper = new Swiper('.contact-slider', {
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    scrollbar: { el: '.swiper-scrollbar' },
  });


$(function () {

    $('.rightside-menu').on('click', function(){
        $('.menu__list').addClass('menu-active');
    });
    $('.rightside-close').on('click', function(){
        $('.menu__list').removeClass('menu-active');
    });
});

new Swiper('.diplome__inner',{
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    }
  },
});