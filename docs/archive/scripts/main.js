const v=1.4

function init() {
	let path = document.location.pathname;
	if (!path.includes("/archive/"))
		return;
	let items = document.querySelectorAll("img[src*='images/featicons/'], img[src*='images/general/']");
	for (let i = items.length; i--;) {
		let img = items[i];
		img.src=img.src.replaceAll("images/featicons/", "../images/featicons/");
		img.src=img.src.replaceAll("images/general/", "../images/general/");
	}
}