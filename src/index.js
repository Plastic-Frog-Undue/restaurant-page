import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contacts.js";

// first load default tab
loadHomePage();

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

function clearContent() {
  content.textContent = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContactPage();
});
