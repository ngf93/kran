var swiper = Swiper;
var init = false;
function swiperMode() {
  let mobile = window.matchMedia("(max-width: 991px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        loop: false,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  } else {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});