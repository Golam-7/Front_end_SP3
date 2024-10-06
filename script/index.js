//timer

var countDownDate = new Date("oct 7, 2024 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var swiper = new Swiper(".myHeader", {
  scrollbar: {
    el: ".swiper-header-scrollbar",
    hide: true
  }
});

// animation

ScrollReveal().reveal(".header", {
  origin: "bottom",
  delay: 200,
  opacity: 0
});

// fatch api

var api = "https://fakestoreapi.com/products";
var best_products = document.getElementById("best-products");
var flash_sale = document.getElementById("flash-sale");
var products = document.getElementById("products");

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 1; i < 9; i++) {
      if (Math.round(data[i].rating.rate) == 1) {
        flash_sale.innerHTML += `
            <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">-${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 2) {
        flash_sale.innerHTML += `
            <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">-${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 3) {
        flash_sale.innerHTML += `
            <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">-${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 4) {
        flash_sale.innerHTML += `
            <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">-${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 5) {
        flash_sale.innerHTML += `
            <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">-${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      }
    }
  });
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 9; i < 17; i++) {
      if (Math.round(data[i].rating.rate) == 1) {
        best_products.innerHTML += `
          <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${data[i].title}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
        `;
      } else if (Math.round(data[i].rating.rate) == 2) {
        best_products.innerHTML += `
        <div class="swiper-slide">
        <div class="slider">
          <div class="card-top">
            <img src="${data[i].image}" alt="${data[i].title}" class="card-img">
            <div class="card-icons">
              <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
            <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
            <div class="card-rating">
              <div class="card-stars">
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star "></i>
                <i class="fas fa-star "></i>
                <i class="fas fa-star "></i>
              </div>
              <p class="card-rating-number">(${data[i].rating.count})</p>
            </div>
          </div>
        </div>
      </div>
      `;
      } else if (Math.round(data[i].rating.rate) == 3) {
        best_products.innerHTML += `
          <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
        `;
      } else if (Math.round(data[i].rating.rate) == 4) {
        best_products.innerHTML += `
          <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
        `;
      } else if (Math.round(data[i].rating.rate) == 5) {
        best_products.innerHTML += `
          <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
          data[i].price * 2
        }</span></p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    }
  });
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 12; i <= 20; i++) {
      if (Math.round(data[i].rating.rate) == 1) {
        products.innerHTML += `
          <div class="product">
          <div class="box">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-tag new">NEW</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price}</p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 2) {
        products.innerHTML += `
          <div class="product">
          <div class="box">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-tag new">NEW</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price}</p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 3) {
        products.innerHTML += `
          <div class="product">
          <div class="box">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-tag new">NEW</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price}</p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 4) {
        products.innerHTML += `
          <div class="product">
          <div class="box">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-tag new">NEW</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price}</p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star "></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      } else if (Math.round(data[i].rating.rate) == 5) {
        products.innerHTML += `
          <div class="product">
          <div class="box">
            <div class="card-top">
              <img src="${data[i].image}" alt="${
          data[i].title
        }" class="card-img">
              <div class="card-tag new">NEW</div>
              <div class="card-icons">
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price}</p>
              <div class="card-rating">
                <div class="card-stars">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </div>
                <p class="card-rating-number">(${data[i].rating.count})</p>
              </div>
            </div>
          </div>
        </div>
          `;
      }
    }
  });
