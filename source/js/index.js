const swiper = new Swiper('.clinic-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView:4,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,

    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,

    },
     // when window width is >= 800px
     800: {
      slidesPerView: 4,

    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:1
  },


});

//articles-swiper
const swiper2 = new Swiper('.articles-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView:4,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,

    },
    // when window width is >= 640px

    980: {
      slidesPerView: 2,

    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,

    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:1
  },


});


const swiper3 = new Swiper('.swiper-package', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView:2,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:1
  },


});

//

const swiper4 = new Swiper('.swiper-package-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView:2,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,

    },
     // when window width is >= 750px
     790: {
      slidesPerView: 2,

    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:1
  },


});
