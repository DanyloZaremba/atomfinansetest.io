
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    disableOnInteraction: false,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});