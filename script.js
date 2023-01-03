audioLink = document.getElementById("audioLink");
musicButton = document.getElementById("musicButton");

loaderDiv = document.createElement("div");

loaderDiv.style.opacity = "1";
loaderDiv.style.width = "120px";
loaderDiv.style.height = "120px";
loaderDiv.style.position = "fixed";
loaderDiv.style.border = "16px solid lightgray";
loaderDiv.style.borderTop = "16px solid blue";
loaderDiv.style.animation = "spin 2s linear infinite";
loaderDiv.style.top = "50%";
loaderDiv.style.left = "50%";
loaderDiv.style.borderRadius = "50%";

css = window.document.styleSheets[0];

css.insertRule(`@keyframes spin {
    to {
        transform: rotate(360deg);
    }}`);

document.body.appendChild(loaderDiv);

document.onload(setTimeout(function() {
	loaderDiv.style.opacity = "0";
}, 1500))

// function afterLoad() {
//     setTimeout(function () {
//         let body = document.body
//         body.style.opacity = "1";
//     }, 1500);
// }
function toggleMusic() {

	if (audioLink.paused) {
		audioLink.play();
		audioLink.paused = false;
		musicButton.innerHTML = "Pause: Coffee Shop Music";
	}
	else {
		audioLink.pause();
		audioLink.paused = true;
		musicButton.innerHTML = "Play: Coffee Shop Music";
	}
}