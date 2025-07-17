(() => {
  if (
    !document.querySelector(
      "#es-rc #es-rc-content #esColorsSwiper.swiper-initialized"
    )
  ) {
    const swiper = new Swiper("#es-rc #es-rc-content #esColorsSwiper", {
      enabled: false, // start disabled for mobile
      slidesPerView: 1,
      loop: true,
      autoHeight: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: "#es-swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#es-button-next",
        prevEl: "#es-button-prev",
      },
      breakpoints: {
        756: {
          enabled: true,
        },
      },
    });
  }
})();
