const allVer = [1,2];
const checkboxId = `sortByEvents`;
const localStorageKey = `spoilersSortByEvents`;

function correctSortByEventsCheckbox() {
	const ver = Number(localStorage.getItem(localStorageKey) ?? 1);
	const ele = document.getElementById(checkboxId);
	if (ele) ele.checked = ver === 2;
}

function setIndexVersionVisibility() {
	const ver = Number(localStorage.getItem(localStorageKey) ?? 1);
	for (let v of allVer) {
		const ele = document.getElementById(`events_v${v}`);
		ele.hidden = v !== ver;
	}
}

function changeIndexVersion() {
	const ele = document.getElementById(checkboxId);
	if (ele.checked) localStorage.setItem(localStorageKey, 2);
	else localStorage.removeItem(localStorageKey);
	setIndexVersionVisibility();
}

window.addEventListener('load', function() {correctSortByEventsCheckbox();setIndexVersionVisibility();});