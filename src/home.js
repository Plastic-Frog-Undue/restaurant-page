import './style.css';
export function loadHomePage() {
    const content = document.querySelector("#content");
    const home = document.createElement("div")
    home.classList.add("home");


    const h1 = document.createElement("h1");
    h1.textContent = "Sam's Čayxana";

    const p = document.createElement("p");
    p.textContent = "We serve the most delicious food in Seoul. Come visit!";

    const img = document.createElement("img");
    img.src = "https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?semt=ais_hybrid&w=740&q=80"

    
    home.append(h1, img, p);
    content.appendChild(home);
}