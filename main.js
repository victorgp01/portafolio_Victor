const iconMenu = document.querySelector(".icon_menu");

const navMenu = document.querySelector(".nav_Menu");

iconMenu.addEventListener("click", function () {
  navMenu.classList.toggle("menu_show");
});
