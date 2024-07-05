// mobile menu switch
const menuToggle = document.querySelector(".navbar__toggler");
const menu = document.querySelector(".collapse");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// sliders
new Swiper(".image__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  loopedSlides: 3,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1000,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: "auto",
    },
  },
});

new Swiper(".inspiration___slider", {
  navigation: {
    nextEl: ".swiper-button-next",
  },
  slidesPerView: "2",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  speed: 1000,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

new Swiper(".tips__slider", {
  slidesPerView: "3",
  spaceBetween: 30,
  loop: true,
  speed: 1000,

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
