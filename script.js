var html = document.getElementById("html");
var body = document.getElementById("body");
var loaderDiv = document.createElement("div");
var table = document.getElementById("table");
var audioLink = document.getElementById("audioLink");
var musicButton = document.getElementById("musicButton");

var css = document.styleSheets[0];

var twoSec = 2000;

var delay = setTimeout(loadingAnimation, twoSec);

function loadingAnimation() {
    "use strict";
    loaderDiv.remove();
    html.style.backgroundColor = "beige";
    table.style.opacity = "1";
}

function toggleMusic() {
    "use strict";
    if (audioLink.paused) {
        audioLink.play();
        audioLink.paused = false;
        musicButton.innerHTML = "Pause: Coffee Shop Music";
    } else {
        audioLink.pause();
        audioLink.paused = true;
        musicButton.innerHTML = "Play: Coffee Shop Music";
    }
}

loaderDiv.style.width = "120px";
loaderDiv.style.height = "120px";
loaderDiv.style.position = "fixed";
loaderDiv.style.border = "16px solid lightgray";
loaderDiv.style.borderTop = "16px solid blue";
loaderDiv.style.animation = "spin 2s linear infinite";
loaderDiv.style.top = "50%";
loaderDiv.style.left = "50%";
loaderDiv.style.borderRadius = "50%";

css.insertRule(`@keyframes spin {
    to {
        transform: rotate(360deg);
    }
   }
`);

body.appendChild(loaderDiv);

document.onload(delay);