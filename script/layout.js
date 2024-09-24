// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

// animations

ScrollReveal().reveal("body", {
  origin: "bottom",
  opacity: 0
});

ScrollReveal().reveal(".nav", {
  origin: "bottom",
  delay: 100,
  opacity: 0
});

ScrollReveal().reveal(".section", {
  origin: "bottom",
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal(".footer", {
  origin: "bottom",
  delay: 500,
  opacity: 0
});
