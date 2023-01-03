tr = document.getElementById("menuRow")

about = document.createElement("td");
aboutText = document.createTextNode("About")
about.appendChild(aboutText);
about.style.left = "30%";

tr.appendChild(about);

menu = document.createElement("td");
menuText = document.createTextNode("Menu")
menu.appendChild(menuText);
menu.style.left = "45%";

tr.appendChild(menu);

shop = document.createElement("td");
shopText = document.createTextNode("Shop")
shop.appendChild(shopText);
shop.style.left = "60%";

tr.appendChild(shop);

contact = document.createElement("td");
contactText = document.createTextNode("Contact")
contact.appendChild(contactText);
contact.style.left = "75%";

tr.appendChild(contact);

function onLoad() {
    setTimeout(function () {
        let loaderDiv = document.getElementById("loaderDiv")
        loaderDiv.remove();
    }, 3000);
}

// function afterLoad() {
//     setTimeout(function () {
//         let body = document.body
//         body.style.opacity = "1";
//     }, 1500);
// }
function toggleMusic() {
    let audioLink = document.getElementById("audioLink");
    console.log("audioLink.paused = " + audioLink.paused);

    if (audioLink.paused) {
        audioLink.play();
        audioLink.paused = false;
    } else {
        audioLink.pause();
        audioLink.paused = true;
    }
}