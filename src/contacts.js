import './style.css';
export function loadContactPage()  {
    const content = document.querySelector("#content");
    const contacts = document.createElement("div")
    contacts.classList.add("contacts");

    const h1 = document.createElement("h1");
    h1.textContent = "Sam's contacts";

    const phone = document.createElement("p");
    phone.textContent = "010-9805-2504";

    const email = document.createElement("p");
    email.textContent = "smndr00abd@gmail.com";

    
    contacts.append(h1, phone, email);
    content.appendChild(contacts);
}