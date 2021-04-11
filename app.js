AOS.init();

const header = document.querySelector("header");
const lis = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 0);
});
lis.forEach((li) => {
  li.addEventListener("mouseout", () => {
    li.classList.add("stopTransition");
  });
});
// navigation code
const nav = document.querySelector("nav ul");
const menu = document.querySelector(".toggle");
const toggle = () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  lis.forEach((li) => {
    li.classList.toggle("active");
  });
};

// accordion code
const btns = document.querySelectorAll(".accordion-header");
const contents = document.querySelectorAll(".accordion-body");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    contents.forEach((content) => {
      if (
        e.target.nextElementSibling !== content &&
        content.classList.contains("active")
      ) {
        content.classList.remove("active");
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});
