new Swiper('.slider-box',{
    autoplay:true,
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
$('.menu__list-link').hover(function(){
	$('.header').addClass('sticky');
});
$('.menu__sab-list').hover(function(){
	$('.header').addClass('sticky');
}, function() {
	$('.header').removeClass('sticky');
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
    slidesPerView: 1,
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


new Swiper('.team-wrap',{
  slidesPerView: 1,
  autoplay: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
});
new Swiper('.review-slide',{
  slidesPerView: 1,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev2'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

});
$('.card-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
  
});
$('.card-wrapper2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true
  
});
new Swiper('.new-slide-top',{
  slidesToShow: 1,
  slidesPerView: 1,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    710: {
      slidesPerView: 2,
    }
  },
});

var mixer = mixitup('.gallery__inner', {
  load: {
      filter: '.new'
  }
});
