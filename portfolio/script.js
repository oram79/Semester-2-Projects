// Function that will allow the webpage to create a hamburger style drop down menu in screen sizes less then 1200px

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}