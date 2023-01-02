function removeLoader() {
    loaderDiv = document.getElementById("loaderDiv");
    loaderDiv.remove();
}
function onDivLoad() {
    setTimeout(removeLoader, 1500);
}
function afterLoading() {
	
}