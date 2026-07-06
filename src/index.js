import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";


const content = document.getElementById("content");

function clearContent() {
    content.textContent = "";
}

document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
});

document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
});

document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
});

// Load the Home page when the website first opens
loadHome();