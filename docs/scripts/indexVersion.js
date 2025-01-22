const iv=1.0;
const allVer = [1,2];
const checkboxId = `sortByEvents`;
const localStorageKey = `spoilersSortByEvents`;

function correctSortByEventsCheckbox() {
	let ver = localStorage[localStorageKey];
	ver = checkUndefinedVersion(ver);
	let ele = document.getElementById(checkboxId);
	if (ver == 2)
		ele.checked = true;
	else
		ele.checked = false;
}

function setIndexVersionVisibility() {
	let ver = localStorage[localStorageKey];
	ver = checkUndefinedVersion(ver);
	
	for (let v of allVer) {
		let ele = document.getElementById(`events_v${v}`);
		if (v == ver)
			ele.hidden = false;
		else
			ele.hidden = true;
	}
}

function changeIndexVersion() {
	let ele = document.getElementById(checkboxId);
	if (ele.checked)
		localStorage[localStorageKey] = 2;
	else
		localStorage[localStorageKey] = 1;
	setIndexVersionVisibility();
}

function checkUndefinedVersion(ver) {
	if (ver == undefined) {
		ver = 1;
		localStorage[localStorageKey] = ver;
	}
	return ver;
}

window.addEventListener('load', function() {correctSortByEventsCheckbox();setIndexVersionVisibility();});