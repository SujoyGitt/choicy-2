document.querySelector(".bargar-menu").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.add("side-menu-active");
});
document.querySelector(".close").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.remove("side-menu-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.querySelector(".scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".scroll-top").style.opacity = "0";
  }
});
// banner carousel start here
var swiper = new Swiper(".banner .mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// buisness trend start here
var swiper = new Swiper(".buisness-trend .mySwiper", {
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
  }
});
// testimonial trend start here
var swiper = new Swiper(".testimonial-carousel .mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//  project carousel start here
var swiper = new Swiper(".portfolio .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
// pricng carousel
var swiper = new Swiper(".pricing-carousel .mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// circular percent tage
// scroll trigger start here
if (window.innerWidth > 992) {
  let reveal = document.querySelectorAll("section");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll("section");
    let btn = el.querySelectorAll("h1,h2,h5, a,i");

    let tl = gsap
      .timeline()
      .from(headings, {
        yx: 80,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        btn,
        { x: 80, opacity: 0, duration: 1.3, ease: "power3.out" },
        "-=0.6"
      );

    ScrollTrigger.create({
      trigger: el,
      start: "center 130%",
      end: "top 50%",
      markers: false,
      toggleActions: "play none none reverse ",
      animation: tl,
    });


  });
} else {
  console.log("stopped scroll trigger");
}