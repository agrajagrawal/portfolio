// theme change implementation
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};
  
const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0],localStorage.setItem('theme', tmp),tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
  
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}
  
$("#themeButton").click(function(e){
    e.preventDefault();
    toggleTheme();
});

// navbar handling
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}