// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    clickable: true
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
