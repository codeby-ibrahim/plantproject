const navmenu = document.getElementById("nav-menu");
const toggleIcon = document.getElementById("nave_icon");
const navLinks = document.querySelectorAll(".nav-link");

toggleIcon.addEventListener("click", () => {
  navmenu.classList.toggle("left-0");
  navmenu.classList.toggle("left-[-100%]");
  toggleIcon.classList.toggle("ri-close-fill");
  toggleIcon.classList.toggle("ri-menu-4-line");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navmenu.classList.add("left-[-100%]");
    navmenu.classList.remove("left-0");
    toggleIcon.classList.remove("ri-close-fill");
    toggleIcon.classList.add("ri-menu-4-line");
  });
});