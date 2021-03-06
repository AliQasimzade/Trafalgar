
let hamburgerButton = document.querySelector(".hamburger-button");
let headerEl = document.querySelector("body header");
let nav = document.querySelector("body nav");
let findDoctor = document.querySelector(".find-doctor");
let apps = document.querySelector(".apps");
let testimonials = document.querySelector(".testimonials");
let aboutUs = document.querySelector(".about-us");
let searchDoctor = document.querySelector(".services-cards");
let sectionThreeWrapper = document.querySelector(".section-three-wrapper");
let carousel = document.querySelector(".carousel-container");
let footer = document.querySelector(".footer-wrapper");
let links = document.querySelectorAll(".link");

links.forEach(item =>{
  item.addEventListener("click",() =>{
   links.forEach(item => item.classList.remove("active"));
   item.classList.add("active");
  })
})

window.addEventListener("scroll", () => {
  headerAnimation();
});

const headerAnimation = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
};

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  nav.classList.toggle("active");
});

findDoctor.addEventListener("click", (event) => {
  event.preventDefault();
  searchDoctor.scrollIntoView({ behavior: "smooth", block: "nearest" });
  hamburgerButton.classList.remove("active");
  nav.classList.remove("active");
});

apps.addEventListener("click", (event) => {
  event.preventDefault();
  sectionThreeWrapper.scrollIntoView({ behavior: "smooth", block: "center" });
  hamburgerButton.classList.remove("active");
  nav.classList.remove("active");
});

testimonials.addEventListener("click", (event) => {
  event.preventDefault();
  carousel.scrollIntoView({ behavior: "smooth", block: "start" });
  hamburgerButton.classList.remove("active");
  nav.classList.remove("active");
});

aboutUs.addEventListener("click", (event) => {
  event.preventDefault();
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
  hamburgerButton.classList.remove("active");
  nav.classList.remove("active");
});
