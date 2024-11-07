const v=2.002

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

function arachnophobe(id) {
	let ele = document.getElementById(id);
	if (ele.style.visibility == 'visible')
		ele.style.visibility = 'hidden';
	else
		ele.style.visibility = 'visible';
}