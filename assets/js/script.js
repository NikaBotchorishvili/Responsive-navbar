const menuBar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", function () {
	menu.classList.toggle("hide-navbar");
});
