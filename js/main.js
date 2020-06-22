var buttonMenu = document.querySelector('.m-menu-button');
var menu = document.querySelector('.m-menu');
var body = document.querySelector('body');
var tab = document.querySelector('.tab');

buttonMenu.onclick = function(){
    
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
}

var tab = $('.tab');

tab.on('click', function(){
    tab.removeClass('active');
    $(this).toggleClass('active')
    var activeTabContent = $(this).attr('data-target')
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass('visible')
    
    


})


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
      breakpoints: {

        1270: {
            slidesPerView: 4
        },
          900: {
              slidesPerView: 2
          },

          520: {
            slidesPerView: 2
          },

          375: {
              slidesPerView: 1,
              slidesOffsetAfter: 50,
              navigation: {
                  nextEl: '.button-next',
              },
              320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: '.button-next',
                }
          }
      }
    })
  });