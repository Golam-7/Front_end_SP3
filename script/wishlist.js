// fatch api

var api = "https://fakestoreapi.com/products";
var wishlist = document.getElementById("whishlist");
var forYou = document.getElementById("forYou");

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
      wishlist.innerHTML += `
        <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="${data[i].image}" alt="slide1" class="card-img">
              <div class="card-tag">${Math.round(
                data[i].rating.count / 10
              )}%</div>
              <div class="card-icons">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\\basket.png" x="0" y="0" height="24" width="24" />
                </svg>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${truncate(data[i].title, 30)}</h3>
              <p class="card-price">$${data[i].price} <span>$${
        data[i].price * 2
      }</span></p>
            </div>
          </div>
        </div>
        `;
    }
  });

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 9; i < 17; i++) {
      if (Math.round(data[i].rating.rate) == 1) {
        forYou.innerHTML += `
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
        forYou.innerHTML += `
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
        forYou.innerHTML += `
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
        forYou.innerHTML += `
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
        forYou.innerHTML += `
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
