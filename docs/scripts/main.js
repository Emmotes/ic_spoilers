const rrm = {
	active: localStorage.getItem(`spoilersRRM`) === `1` ? true : false,
	storage: "spoilersRRM",
	name: "Randramb Mode",
	nick: "rrm",
	map: new Map(),
};
const nnm = {
	active: localStorage.getItem(`spoilersNNM`) === `1` ? true : false,
	storage: "spoilersNNM",
	name: "Nicknames Mode",
	nick: "nnm",
	map: new Map(),
};
const acm = {
	active: localStorage.getItem(`spoilersACM`) === `1` ? true : false,
	storage: "spoilersACM",
	name: "Archive Code Mode",
	nick: "acm",
	map: new Map(),
};
const patronSort = document.getElementById("patronSort");
const TIME_UNITS = {
	long: {y: ["year", "years"], mo: ["month", "months"], d: ["day", "days"], h: ["hour", "hours"], m: ["minute", "minutes"], s: ["second", "seconds"], ms: ["millisecond", "milliseconds"]},
	medium: {y: ["yr", "yrs"], mo: ["mon", "mons"], d: ["day", "days"], h: ["hr", "hrs"], m: ["min", "mins"], s: ["sec", "secs"], ms: ["ms", "ms"]},
	short: {y: ["y", "y"], mo: ["m", "m"], d: ["d", "d"], h: ["h", "h"], m: ["m", "m"], s: ["s", "s"], ms: ["ms", "ms"]},
}; // prettier-ignore
let devInsightsIndex = 0;
let devInsightsTimer = devInsights[devInsightsIndex];
let devInsightsCountdown;
let allExclusivesHidden = true;
let allExclusiveFeatsHidden = false;

rrm.map.set("Exclusivity Dates", "Dates and Crap");
rrm.map.set("Premium Packs and DLC", "Shop Cash Packs");

nnm.map.set("Antrius", "Antivirus");
nnm.map.set("Asharra", "Ash");
nnm.map.set("BBEG", "BB");
nnm.map.set("Beadle", "Half of B&G");
nnm.map.set("Binwin", "Binwho?");
nnm.map.set("Birdsong", "Birdstrong");
nnm.map.set("Black Viper", "BV");
nnm.map.set("Briv", "Skippy");
nnm.map.set("Bruenor", "Tutorial Dwarf");
nnm.map.set("Catti-brie", "Catti");
nnm.map.set("Celeste", "Celery");
nnm.map.set("Certainty", "Certainly");
nnm.map.set("Commodore Krux", "Hippo");
nnm.map.set("Corazón", "Crappiráte");
nnm.map.set("Dark Urge", "Durge");
nnm.map.set("Deekin", "DOOM");
nnm.map.set("Dhadius", "Daddy-O");
nnm.map.set("Duke Ravengard", "Otter");
nnm.map.set("Dungeon Master", "DM");
nnm.map.set("D’hani", ins("Dhani", randInt(0, 5), "’"));
nnm.map.set("Egbert", "Egg...Bert");
nnm.map.set("Ellywick", "Elly");
nnm.map.set("Elminster", ins("El Minster", randInt(0, 10), "’"));
nnm.map.set("Ezmerelda", "Ez");
nnm.map.set("Farideh", "Fari");
nnm.map.set("Grimm", "Half of B&G");
nnm.map.set("Gromma", "Grandma");
nnm.map.set("Hew Maan", "Hew");
nnm.map.set("Jamilah", "JamJam");
nnm.map.set("Karlach", "Mama K");
nnm.map.set("Krond", "Hammerman");
nnm.map.set("Krux", "Hippo");
nnm.map.set("Krydle", "Kroodle");
nnm.map.set("K’thriss", ins("Kthriss", randInt(0, 7), "’"));
nnm.map.set("Lae’zel", ins("Laezel", randInt(0, 6), "’"));
nnm.map.set("Makos", "MacOS");
nnm.map.set("Merilwen", "Meowilwen");
nnm.map.set("Nahara", "Nahahaha");
nnm.map.set("Nixie", "FIREBALL!!!");
nnm.map.set("Orkira", "Shakira");
nnm.map.set("Ravengard", "Otter");
nnm.map.set("Sgt. Knox", "Knox");
nnm.map.set("Shadowheart", "Shart");
nnm.map.set("Sheila", "She-Ra");
nnm.map.set("Spurt", "Splat");
nnm.map.set("Stoki", "Stooki");
nnm.map.set("Tatyana", "Taty");
nnm.map.set("Thellora", "Thermometer");
nnm.map.set("Torogar", "Totoro");
nnm.map.set("Ulder Ravengard", "Otter");
nnm.map.set("Ulder", "Otter");
nnm.map.set("Umberto", "Sir Bearington");
nnm.map.set("Valentine", "Val");
nnm.map.set("Volo", "Vololo");
nnm.map.set("Voronika", "Voro");
nnm.map.set("Warduke", "Warduck");
nnm.map.set("Xerophon", "Cheatophon");
nnm.map.set("Yorven", "Murderbunny");
nnm.map.set("Zorbu", "Murdergnome");
nnm.map.set("Pigment", "Pig Mint");
nnm.map.set("pigment", "pig mint");
nnm.map.set("egendaries", "egos");
nnm.map.set("egendary", "ego");
nnm.map.set("Great Modron March", "Great Modron May");
nnm.map.set("Blacksmithing Contract", "BSC");
nnm.map.set("Blacksmith Contract", "BSC");
nnm.map.set("Bounty Contract", "BC");
nnm.map.set("Potion of Polish", "PoP");
nnm.map.set("Golden Epic", "GE");
nnm.map.set("Potion of Speed", "Speed Pot");
nnm.map.set("Potion of Giant's Strength", "Damage Pot");
nnm.map.set("Potion of Giant’s Strength", "Damage Pot");
nnm.map.set("Potion of Clairvoyance", "Gold Pot");
nnm.map.set("Potion of Fire Breath", "Fire Breath Pot");
nnm.map.set("Potion of Heroism", "Health Pot");
nnm.map.set("Potion", "Pot");
nnm.map.set("potion", "pot");

acm.map.set(
	'<li><a href="/archive.html">Archive of Old Spoilers</a>',
	'<li><a href="/archive.html">Archive of Old Spoilers</a> (<a href="https://github.com/Emmotes/ic_spoilers/tree/main/docs/archive">Archive Code View</a>)',
);
acm.map.set(
	'<li><a href="/ic_spoilers/archive.html">Archive of Old Spoilers</a>',
	'<li><a href="/ic_spoilers/archive.html">Archive of Old Spoilers</a> (<a href="https://github.com/Emmotes/ic_spoilers/tree/main/docs/archive">Archive Code View</a>)',
);

const allModes = [rrm, nnm, acm];

function init() {
	const edit = !document.location.pathname.includes("/modes.html");
	updateModes(edit);

	if (!edit) {
		const list = document.getElementById(`modesList`);
		let contents = ``;
		for (const mode of allModes) {
			contents +=
				`<span class="modesColInner"><span class="modesRow">` +
				`<span class="modesType">` +
				`<input type="checkbox" class="modesCheckbox" id="${mode.nick}" ` +
				`name="${mode.nick}" onClick="toggleMode('${mode.nick}')"` +
				(mode.active ? ` checked` : ``) +
				`><label for="${mode.nick}" class="modesLabel">${mode.name}</label></span>` +
				`<span class="modesDetails" id="${mode.nick}Details">` +
				`<a onClick="modesDetails('${mode.nick}')" id="${mode.nick}Link">[show]</a>` +
				`</span></span><span class="modesContent" id="${mode.nick}Content" ` +
				`style="display:none;">&nbsp;</span></span>`;
		}
		list.innerHTML = contents;
	}

	if (patronSort) patronSort.addEventListener(`change`, sortPatrons);

	fixArchiveImages();

	startDevInsightsCountdown();
}

function updateModes(edit) {
	let modes = `<br><a href="modes.html">Modes</a>`;
	for (const mode of allModes) {
		if (mode.active) {
			modes += `<br>${mode.name} Active`;
			if (mode === acm) {
				const path = document.location.pathname;
				if (
					path !== "/ic_spoilers/" &&
					path !== "/" &&
					!path.includes("index.html")
				)
					continue;
			}
			if (edit)
				for (const [key, value] of mode.map)
					document.body.innerHTML =
						document.body.innerHTML.replaceAll(
							`${key}`,
							`${value}`,
						);
		}
	}
	const ele = document.getElementById("modes");
	if (ele) ele.innerHTML = modes;
}

function modesDetails(type) {
	for (const mode of allModes) {
		if (mode.nick !== type) continue;
		const element = document.getElementById(`${mode.nick}Content`);
		const link = document.getElementById(`${mode.nick}Link`);
		if (link.innerHTML === "[show]") {
			let content =
				`<span class="modesContentRowHeader">` +
				`<span class="modesCol1">Find</span>` +
				`<span class="modesCol2">Replace</span>` +
				`</span>`;
			for (const [key, value] of mode.map) {
				content += `<span class="modesContentRow"><span class="modesCol1">${key}</span><span class="modesCol2">${value}`;
				if (
					key === "D’hani" ||
					key === "K’thriss" ||
					key === "Lae’zel" ||
					key === "Elminster"
				)
					content += ` (random ’ placement)`;
				content += `</span></span>`;
			}
			element.innerHTML = content;
			element.style.display = ``;
			link.innerHTML = `[hide]`;
		} else {
			element.innerHTML = `&nbsp;`;
			element.style.display = `none`;
			link.innerHTML = `[show]`;
		}
	}
}

function toggleMode(type) {
	for (const mode of allModes) {
		if (mode.nick !== type) continue;
		const ele = document.getElementById(`${mode.nick}`);
		if (ele) {
			const checked = ele.checked;
			if (!checked) localStorage.removeItem(mode.storage);
			else localStorage.setItem(mode.storage, checked ? 1 : 0);
			mode.active = checked;
		}
	}
	updateModes();
}

function ins(str, index, value) {
	return str.substr(0, index) + value + str.substr(index);
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function exclusiveToggleContent(id) {
	const ele = document.getElementById(id);
	const elea = document.getElementById(id + `a`);
	if (ele && elea) {
		ele.hidden = !ele.hidden;
		ele.innerHTML = `<span class="postSeasonTableShowContents">${ele.hidden ? "[show contents]" : "[hide contents]"}</span>`;
	}
}

function exclusiveToggleAllContents() {
	allExclusivesHidden = !allExclusivesHidden;

	const elesH = document.getElementsByClassName(`postSeasonTableRowShowHide`);
	for (const eleH of elesH) eleH.hidden = allExclusivesHidden;

	const show = allExclusivesHidden ? `show` : `hide`;
	const hide = allExclusivesHidden ? `hide` : `show`;

	const ele = document.getElementById(`showHideAll`);
	if (ele) ele.innerHTML = `[${show} all contents]`;

	const elesS = document.getElementsByClassName(
		`postSeasonTableShowContents`,
	);
	for (const eleS of elesS)
		if (eleS.innerHTML === `[${hide} contents]`)
			eleS.innerHTML = `[${show} contents]`;
}

function exclusiveToggleAllFeats() {
	allExclusiveFeatsHidden = !allExclusiveFeatsHidden;

	const eles = document.querySelectorAll(
		`span[id="exclusiveFeats"] > .featTableRow`,
	);
	for (const ele of eles)
		ele.style.display = allExclusiveFeatsHidden ? `none` : ``;

	const ele = document.getElementById(`showHideFeats`);
	if (ele)
		ele.innerHTML = `[${allExclusiveFeatsHidden ? `show` : `hide`} all feats]`;
}

function getDisplayTime(startEpoch, endEpoch, options = {}) {
	if (arguments.length === 1 && typeof startEpoch === "number") {
		endEpoch = startEpoch;
		startEpoch = 0;
	}
	const {
		showMs = false,
		showSecs = true,
		style = "medium",
		pad = true,
		useTemporal = true,
	} = options;

	startEpoch = Number(startEpoch || 0);
	endEpoch = Number(endEpoch || 0);

	// Note: Always pad milliseconds.
	const getPad = (t, p) => (pad ? padZeros(t, p) : t);

	const ms = Math.max(0, Number(endEpoch || 0) - Number(startEpoch || 0));
	const totalSeconds = Math.floor(ms / 1000);
	let timeObj = {};

	if (useTemporal && typeof Temporal !== "undefined" && Temporal != null) {
		const start = Temporal.Instant.fromEpochMilliseconds(startEpoch);
		const end = Temporal.Instant.fromEpochMilliseconds(endEpoch);
		const duration = start.until(end);
		timeObj = duration.round({
			smallestUnit:
				showMs ? "millisecond"
				: showSecs ? "second"
				: "minute",
			largestUnit: "years",
			relativeTo: end.toZonedDateTimeISO("UTC"),
		});
	} else
		timeObj = getCalendarDiff(startEpoch, endEpoch);

	if (style === "clock") {
		const totalHours = Math.floor(totalSeconds / 3600);
		const base =
			getPad(totalHours, 2) +
			":" +
			getPad(timeObj.minutes, 2) +
			":" +
			getPad(timeObj.seconds, 2);
		return showMs ? base + "." + padZeros(timeObj.milliseconds, 3) : base;
	}

	const parts = buildDisplayParts(timeObj, getPad, style, showMs, showSecs);
	return parts.join(" ");
}

function getCalendarDiff(startEpoch, endEpoch) {
	const start = new Date(startEpoch);
	const end = new Date(endEpoch);
	const zero = {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0,
	};
	if (endEpoch <= startEpoch) return zero;

	const getMonthLength = (year, monthIndex) =>
		new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();

	const isLastDayOfMonth = (date) => {
		const value = new Date(date.getTime());
		return (
			value.getUTCDate() ===
			getMonthLength(value.getUTCFullYear(), value.getUTCMonth())
		);
	};

	const addYears = (date, years) => {
		const value = new Date(date.getTime());
		const month = value.getUTCMonth();
		const day = value.getUTCDate();
		const targetYear = value.getUTCFullYear() + years;
		const monthLength = getMonthLength(targetYear, month);
		const dayOfMonth =
			isLastDayOfMonth(value) ? monthLength : Math.min(day, monthLength);
		return new Date(
			Date.UTC(
				targetYear,
				month,
				dayOfMonth,
				value.getUTCHours(),
				value.getUTCMinutes(),
				value.getUTCSeconds(),
				value.getUTCMilliseconds(),
			),
		);
	};

	const addMonths = (date, months) => {
		const value = new Date(date.getTime());
		const targetMonth = value.getUTCMonth() + months;
		const targetYear =
			value.getUTCFullYear() + Math.floor(targetMonth / 12);
		const normalizedMonth = ((targetMonth % 12) + 12) % 12;
		const monthLength = getMonthLength(targetYear, normalizedMonth);
		const dayOfMonth =
			isLastDayOfMonth(value) ? monthLength : (
				Math.min(value.getUTCDate(), monthLength)
			);
		return new Date(
			Date.UTC(
				targetYear,
				normalizedMonth,
				dayOfMonth,
				value.getUTCHours(),
				value.getUTCMinutes(),
				value.getUTCSeconds(),
				value.getUTCMilliseconds(),
			),
		);
	};

	const addDays = (date, days) => new Date(date.getTime() + days * 86400000);

	let current = new Date(start.getTime());
	const diff = {...zero};

	while (true) {
		const next = addYears(current, 1);
		if (next.getTime() > end.getTime()) break;
		current = next;
		diff.years++;
	}

	while (true) {
		const next = addMonths(current, 1);
		if (next.getTime() > end.getTime()) break;
		current = next;
		diff.months++;
	}

	while (true) {
		const next = addDays(current, 1);
		if (next.getTime() > end.getTime()) break;
		current = next;
		diff.days++;
	}

	let remaining = end.getTime() - current.getTime();
	diff.hours = Math.floor(remaining / 3600000);
	remaining -= diff.hours * 3600000;
	diff.minutes = Math.floor(remaining / 60000);
	remaining -= diff.minutes * 60000;
	diff.seconds = Math.floor(remaining / 1000);
	remaining -= diff.seconds * 1000;
	diff.milliseconds = remaining;

	return diff;
}

function buildDisplayParts(timeObj, getPad, style, showMs, showSecs) {
	const {years, months, days, hours, minutes, seconds, milliseconds} =
		timeObj;
	const u = TIME_UNITS[style] || TIME_UNITS.medium;
	const parts = [];

	if (years > 0) parts.push(`${years} ${years === 1 ? u.y[0] : u.y[1]}`);
	if (years > 0 || months > 0)
		parts.push(`${months} ${months === 1 ? u.mo[0] : u.mo[1]}`);
	if (years > 0 || months > 0 || days > 0)
		parts.push(`${days} ${days === 1 ? u.d[0] : u.d[1]}`);

	if (years > 0 || months > 0 || days > 0 || hours > 0)
		parts.push(`${hours} ${hours === 1 ? u.h[0] : u.h[1]}`);

	if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0)
		parts.push(`${getPad(minutes, 2)} ${minutes === 1 ? u.m[0] : u.m[1]}`);

	if (
		showSecs &&
		(!showMs ||
			years > 0 ||
			months > 0 ||
			days > 0 ||
			hours > 0 ||
			minutes > 0 ||
			seconds > 0)
	)
		parts.push(`${getPad(seconds, 2)} ${seconds === 1 ? u.s[0] : u.s[1]}`);

	if (showMs) parts.push(`${padZeros(milliseconds, 3)} ${u.ms[0]}`);

	return parts;
}

function padZeros(num, places) {
	return String(num).padStart(places, "0");
}

function startDevInsightsCountdown() {
	const timer = document.getElementById(`ditimer`);
	if (!timer) return;
	const now = new Date().getTime();
	const timeLeft = devInsightsTimer - now;
	timer.innerHTML =
		`<br>Dev Insights in: ` +
		(timeLeft <= 0 ? `Live` : (
			getDisplayTime(now, devInsightsTimer, {
				showMs: false,
				showSecs: true,
			})
		));

	devInsightsCountdown = setInterval(function () {
		const ele = document.getElementById(`ditimer`);
		const now = new Date().getTime();
		const timeLeft = devInsightsTimer - now;
		if (timeLeft > -3600000) {
			ele.innerHTML =
				`<br>Dev Insights in: ` +
				getDisplayTime(now, devInsightsTimer, {
					showMs: false,
					showSecs: true,
				});
		} else {
			devInsightsIndex++;
			devInsightsTimer = devInsights[devInsightsIndex];
		}
	}, 1000);
}

function discord() {
	console.log(`DI <t:${devInsightsTimer / 1000}:R>.`);
}

function arachnophobe(id, modelId) {
	const ele = document.getElementById(id);
	ele.style.visibility =
		ele.style.visibility === "visible" ? "hidden" : "visible";

	const model = document.getElementById(modelId);
	if (model)
		model.style.visibility =
			ele.style.visibility === "visible" ? "inherit" : "visible";
}

function sortPatrons() {
	const optGroup = document.querySelector("#patronSort option:checked")
		.parentElement.label;
	const value = patronSort.value;
	const asc = optGroup === `Ascending`;
	const eles = document.querySelectorAll("[data-sort]");
	for (const ele of eles) {
		const split = ele.dataset.sort.split(",");
		let index = 0;
		switch (value) {
			case "name":
				index = 1;
				break;
			case "seat":
				index = 2;
				break;
			case "mirt":
				index = 3;
				break;
			case "vajra":
				index = 4;
				break;
			case "strahd":
				index = 5;
				break;
			case "zariel":
				index = 6;
				break;
			case "elminster":
				index = 7;
				break;
			default:
				index = 0;
		}
		ele.style.order = `${asc ? `` : `-`}${split[index]}`;
	}
}

function fixArchiveImages() {
	const path = document.location.pathname;
	if (!path.includes("/archive/")) return;

	const items = document.querySelectorAll(
		"img[src*='images/featicons/'], img[src*='images/general/']",
	);
	for (const img of items) {
		img.src = img.src.replaceAll(
			"images/featicons/",
			"../images/featicons/",
		);
		img.src = img.src.replaceAll("images/general/", "../images/general/");
	}
}
