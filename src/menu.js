import './style.css';
export function loadMenuPage()  {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // heading
    const heading = document.createElement("h1");
    heading.textContent = "Sam's Menu";
    heading.style.textAlign = "center"; // optional
    menuContainer.appendChild(heading);

    const menu = document.createElement("div")
    menu.classList.add("menu");

    const foods = [
        {
          name: "Dolma",
          img: "https://nutrivore.com/wp-content/uploads/2024/11/dolmas-800x600.jpg",
          info: "Traditional Õzbek stuffed vegetables with rice and herbs."
        },
        {
          name: "Oš",
          img: "https://novotours.uz/wp-content/uploads/2017/11/sam.plov_.jpg",
          info: "Rice pilaf with meat, carrots, and spices."
        },
        {
          name: "Shashlik",
          img: "https://dolorestravel.com/uploads/images/shashlik.jpg",
          info: "Grilled meat skewers, perfect for sharing."
        },
        {
          name: "Mastava",
          img: "https://uzplov.com/sites/default/files/mastava.jpg",
          info: "Hearty Õzbek soup with meat, rice, and vegetables."
        },
        {
          name: "Somsa",
          img: "https://avatars.mds.yandex.net/get-altay/5098734/2a0000018fd902be14284079f6a126e33b2a/XL",
          info: "Delicious pastry stuffed with meat or vegetables."
        },
        {
          name: "Mastava",
          img: "https://thumbs.dreamstime.com/b/uzbek-central-asia-cuisine-concept-assorted-uzbek-food-pilaf-samsa-manti-manty-uzbek-central-asia-cuisine-concept-314347907.jpg",
          info: "Õzbek style steamed dumplings with pumpkin filled."
        }
      ];
      
      foods.forEach(food => {
        const foodDiv = document.createElement("div"); // grid item
        foodDiv.classList.add("food-item");
      
        const img = document.createElement("img");
        img.src = food.img;
      
        const p = document.createElement("p");
        p.textContent = food.info;
      
        foodDiv.append(img, p);
        menu.appendChild(foodDiv);
      });      

      menuContainer.appendChild(menu);

      // append everything to #content
      content.appendChild(menuContainer);
}