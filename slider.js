  const slider = document.querySelector('.swiper-container');

  let mySwiper = new Swiper (slider, {
     
    slidesPerView: 'auto',     
    spaceBetween: 16,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },

  });
