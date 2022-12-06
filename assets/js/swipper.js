import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper('.swiper', {
// direction: 'vertical',
loop: true,

// auto chuyển slide 
autoplay: {
    delay: 5000,
},

// Nút chám pagination
pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true, //cho nút dot khi ko active sẽ bé lại
    clickable : true //click chuyển
},

// nút icon left - right
// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
// },

// scrollbar: {
//     el: '.swiper-scrollbar',
// },
});