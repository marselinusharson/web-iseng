let nav_icon = document.querySelector(".barisan-icon");
let line = document.querySelector(".line");
let nav_menu = document.querySelector(".barisan_menu");
let nav_links = document.querySelectorAll(".barisan-list");
let nav_length = nav_links.length;
nav_icon.addEventListener("click", () => {
  line.classList.toggle("active");
  nav_menu.classList.toggle("active");
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${index / nav_length + 0.2}s`;
    }
  });
});
