function removeLoader() {
    let loaderDiv = document.getElementById("loaderDiv");
    loaderDiv.style.display = "none";
    loaderDiv.remove();
}
function onDivLoad() {
    console.log("Div loaded");
    setTimeout(removeLoader, 3000); //wait for page load PLUS two seconds.
}
