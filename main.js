const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
     isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 500, 
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1000, 
});

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500, 
});

ScrollReveal().reveal(".about_content > div ", {
    ...scrollRevealOption,
    delay: 1000, 
});

