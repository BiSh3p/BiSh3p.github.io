
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
$('.menu__item-link').hover(function(){
	$('.header').addClass('sticky-2');
}, function() {
	$('.header').removeClass('sticky-2');
});
$('.drop').hover(function(){
	$('.header').addClass('sticky-2');
}, function() {
	$('.header').removeClass('sticky-2');
});


$(function () {

  $('.bot-bottom').on('click', function(){
      $('.bot-img').addClass('bot-close');
  });
  $('.bot-bottom').on('click', function(){
      $('.bot-inner').removeClass('bot-close');
  });
  $('.bot-close1').on('click', function(){
    $('.bot-img').removeClass('bot-close');
});
  $('.bot-close1').on('click', function(){
    $('.bot-inner').addClass('bot-close');
});

$('.message-btn__link-btn').on('click', function(){
  $('.message-btn__form').toggleClass('message-bottom__script');
});

$('.message-btn__link-btn').on('click', function(){
  $('.message-form__content').toggleClass('message-none');
});
$('.message-btn__link-btn').on('click', function(){
$('.message-btn').toggleClass('message-btn__top');
});
});
$(function () {

  $('.message-bottom').on('click', function(){
      $('.message-form').toggleClass('bot-close');
  });
});

var swiper = new Swiper('.main-swiper', {
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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

    // $('.earth-btn').on('click', function(){
    //     $('.earth-inner').toggleClass('earth-active');
    // });
});

// $(function () {
//   $('.message-btn__link-btn').on('click', function(){
//       $('.message-btn__form').toggle('message-none');
//   });
//   $('.message-btn__link-btn').on('click', function(){
//       $('.message-form__content').addClass('message-none');
//   });
//   $('.message-btn__link-btn').on('click', function(){
//     $('.message-btn').toggleClass('message-btn__top');
// });
// });
$(function () {

    $('.menu-close').on('click', function(){
        $('.menu').addClass('none');
    });
    $('.menu-burger').on('click', function(){
        $('.menu').removeClass('none');
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
  autoplay: true,
 
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

