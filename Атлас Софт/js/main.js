$(function(){
	$(".afisha-img").hover(
		function(){
			$(this).children('.buy-ticket').addClass('show');
		},
		function() {
			$(this).children('.buy-ticket').removeClass('show');
		});
	$('.auth_link').on("click",function(e){
		e.preventDefault();
		$('.modal-windows').addClass("show");
	})
	$('.close-window_auth').on("click",function(){
		$('.modal-windows').removeClass("show");
	});

var swiper = new Swiper('.swiper-container', {
	loop:true,
	autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

	
	var swiper = new Swiper('.min_swiper-container', {
	slidesPerView: 5,
      spaceBetween: 20,
       navigation: {
        nextEl: '.min-slider-next',
        prevEl: '.min-slider-prev',
      },
    });

	
	
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};
})

