const v=1.5
const rrm = {
	active: (localStorage.spoilersRRM == 1 ? true : false),
	storage: "spoilersRRM",
	name: "Randramb Mode",
	nick: "rrm",
	map: new Map()
};
const nnm = {
	active: (localStorage.spoilersNNM == 1 ? true : false),
	storage: "spoilersNNM",
	name: "Nicknames Mode",
	nick: "nnm",
	map: new Map()
};
const patronSort = document.getElementById("patronSort");
var devInsightsIndex = 0;
var devInsightsTimer = devInsights[devInsightsIndex];
var allExclusivesHidden = true;

rrm.map.set("Exclusivity Dates","Dates and Crap");
rrm.map.set("Premium Packs and DLC", "Shop Cash Packs");

nnm.map.set("Torogar", "Totoro");
nnm.map.set("Spurt", "Splat");
nnm.map.set("Orkira", "Shakira");
nnm.map.set("Ezmerelda", "Ez");
nnm.map.set("Deekin", "DOOM");
nnm.map.set("Bruenor", "Tutorial Dwarf");
nnm.map.set("Xerophon", "Cheatophon");
nnm.map.set("K’thriss", ins("Kthriss",randInt(0,7),"’"));
nnm.map.set("Lae’zel", ins("Laezel",randInt(0,6),"’"));
nnm.map.set("D’hani", ins("Dhani",randInt(0,5),"’"));
nnm.map.set("Elminster", ins("ElMinster",randInt(0,9),"’"));
nnm.map.set("Gromma", "Grandma");
nnm.map.set("Warduke", "Warduck");
nnm.map.set("Briv", "Skippy");
nnm.map.set("Black Viper", "BV");
nnm.map.set("Antrius", "Antivirus");
nnm.map.set("Nixie", "FIREBALL!");
nnm.map.set("Egbert", "Egg...Bert");
nnm.map.set("Corazón", "Crappiráte");
nnm.map.set("Merilwen", "Meowilwen");
nnm.map.set("Binwin", "Binwho?");
nnm.map.set("Zorbu", "Murdergnome");
nnm.map.set("Commodore Krux", "Hippo");
nnm.map.set("Krux", "Hippo");
nnm.map.set("Nahara", "Nahahaha");
nnm.map.set("Hew Maan", "Hew");
nnm.map.set("Valentine", "Val");
nnm.map.set("Voronika", "Voro");
nnm.map.set("Asharra", "Ash");
nnm.map.set("Farideh", "Fari");
nnm.map.set("Birdsong", "Birdstrong");
nnm.map.set("Dungeon Master", "DM");
nnm.map.set("Catti-brie", "Catti");
nnm.map.set("Certainty", "Certainly");
nnm.map.set("Tatyana", "Taty");
nnm.map.set("Sgt. Knox", "Knox");
nnm.map.set("Thellora", "Thermometer");
nnm.map.set("Dhadius", "Daddy-O");
nnm.map.set("Duke Ravengard", "Otter");
nnm.map.set("Ulder Ravengard", "Otter");
nnm.map.set("Ravengard", "Otter");
nnm.map.set("Ulder", "Otter");
nnm.map.set("Umberto", "Sir Bearington");
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
nnm.map.set("Potion of Clairvoyance", "Gold Pot");
nnm.map.set("Potion of Fire Breath", "Fire Breath Pot");
nnm.map.set("Potion of Heroism", "Health Pot");

const allModes = [rrm, nnm];

function init() {
	if (localStorage.randrambMode != undefined) {
		localStorage.spoilersRRM = localStorage.randrambMode;
		localStorage.removeItem("randrambMode");
		if (localStorage.spoilersRRM == 1) {
			rrm.active = true;
		}
	}
	if (localStorage.nicknamesMode != undefined) {
		localStorage.spoilersNNM = localStorage.nicknamesMode;
		localStorage.removeItem("nicknamesMode");
		if (localStorage.spoilersNNM == 1) {
			nnm.active = true;
		}
	}
	
	let edit = !(document.location.pathname.includes("/modes.html"));
	updateModes(edit);
	
	if (!edit) {
		let list = document.getElementById(`modesList`);
		let contents = ``;
		for (let i = 0; i < allModes.length; i++) {
			let curr = allModes[i];
			contents += `<span class="modesColInner"><span class="modesRow"><span class="modesType"><input type="checkbox" class="modesCheckbox" id="${curr.nick}" name="${curr.nick}" onClick="toggleMode('${curr.nick}')"`+(curr.active?` checked`:``)+`><label for="${curr.nick}" class="modesLabel">${curr.name}</label></span><span class="modesDetails" id="${curr.nick}Details"><a onClick="modesDetails('${curr.nick}')" id="${curr.nick}Link">[show]</a></span></span><span class="modesContent" id="${curr.nick}Content" style="display:none;">&nbsp;</span></span>`;
		}
		list.innerHTML = contents;
	}
	
	if (patronSort!=null&&patronSort!=undefined)
		patronSort.addEventListener(`change`,sortPatrons);
}

function updateModes(edit) {
	let modes = `<br><a href="modes.html">Modes</a>`;
	for (let i = 0; i < allModes.length; i++) {
		let curr = allModes[i];
		if (curr.active) {
			modes += `<br>${curr.name} Active`;
			if (edit) {
				for (const [key, value] of curr.map) {
					document.body.innerHTML = document.body.innerHTML.replaceAll(`${key}`,`${value}`);
				}
			}
		}
	}
	let element = document.getElementById("modes");
	element.innerHTML = modes;
}

function modesDetails(type) {
	for (let i=0; i<allModes.length; i++) {
		let curr = allModes[i];
		if (curr.nick != type) {
			continue;
		}
		let element = document.getElementById(`${curr.nick}Content`);
		let link = document.getElementById(`${curr.nick}Link`);
		if (link.innerHTML == "[show]") {
			let content = `<span class="modesContentRowHeader"><span class="modesCol1">Find</span><span class="modesCol2">Replace</span></span>`;
			for (const [key,value] of curr.map) {
				content += `<span class="modesContentRow"><span class="modesCol1">${key}</span><span class="modesCol2">${value}`
				if (key == "D’hani" || key == "K’thriss" || key == "Lae’zel" || key == "Elminster") {
					content += ` (random ’ placement)`;
				}
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
	for (let i=0; i<allModes.length; i++) {
		let curr = allModes[i];
		if (curr.nick != type) {
			continue;
		}
		let checked = document.getElementById(`${curr.nick}`).checked;
		if (checked) {
			localStorage[curr.storage] = 1;
			curr.active = true;
		} else {
			localStorage[curr.storage] = 0;
			curr.active = false;
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
	let ele=document.getElementById(id);
	let elea=document.getElementById(id+`a`);
	let prefix=`<span class="postSeasonTableShowContents">`;
	let suffix=`</span>`;
	if (ele!=undefined&&elea!=undefined) {
		if (ele.hidden) {
			ele.hidden=false;
			elea.innerHTML=`${prefix}[hide contents]${suffix}`;
		} else {
			ele.hidden=true;
			elea.innerHTML=`${prefix}[show contents]${suffix}`;
		}
	}
}

function exclusiveToggleAllContents() {
	let eles = document.getElementsByClassName(`postSeasonTableRowShowHide`);
	allExclusivesHidden = !allExclusivesHidden;
	for (let ele of eles) {
		ele.hidden = allExclusivesHidden;
	}
	let show=allExclusivesHidden?`show`:`hide`;
	let hide=allExclusivesHidden?`hide`:`show`;
	document.getElementById(`showHideAll`).innerHTML=`[${show} all contents]`;
	eles = document.getElementsByClassName(`postSeasonTableShowContents`);
	for (let ele of eles) {
		if (ele.innerHTML==`[${hide} contents]`)
			ele.innerHTML=`[${show} contents]`;
	}
}

function displayTime(timeLeft) {
	let ditimer = document.getElementById("ditimer");
	if (timeLeft <=0) {
		ditimer.innerHTML = `<br>Dev Insights: Live`;
		return;
	}
	let days = Math.floor(timeLeft/(1000*60*60*24));
	let hours = Math.floor((timeLeft/(1000*60*60)) % 24);
	let minutes = Math.floor((timeLeft/1000/60) % 60);
	let seconds = Math.floor((timeLeft/1000) % 60);
	let display = `<br>Dev Insights: `;
	if (days>0) display += `${days} days `;
	if (days>0||hours>0) display += `${hours} hours `;
	if (days>0||hours>0||minutes>0) display += `${padZeros(minutes,2)} mins `;
	display+= `${padZeros(seconds,2)} secs`;
	ditimer.innerHTML = display;
}

function padZeros(num,places) {
	return String(num).padStart(places, '0');
}

let devInsightsCountdown = setInterval(function() {
	let now = new Date().getTime();
	let timeLeft = devInsightsTimer - now;
	if (timeLeft>-3600000) {
		displayTime(timeLeft);
	} else {
		devInsightsIndex++;
		devInsightsTimer = devInsights[devInsightsIndex];
	}
}, 1000);
displayTime(devInsightsTimer - new Date().getTime());

function discord() {
	console.log("DI <t:"+(devInsightsTimer/1000)+":R>.");
}

function arachnophobe(id) {
	let ele = document.getElementById(id);
	if (ele.style.visibility == 'visible')
		ele.style.visibility = 'hidden';
	else
		ele.style.visibility = 'visible';
}

function sortPatrons() {
	let optGroup = document.querySelector('#patronSort option:checked').parentElement.label;
	let value = patronSort.value;
	let asc = false;
	if (optGroup == `Ascending`)
		asc = true;
	let eles = document.querySelectorAll('[data-sort]');
	for (let ele of eles) {
		let split = ele.dataset.sort.split(",");
		let index = 0;
		switch (value) {
			case "name": index=1; break;
			case "seat": index=2; break;
			case "mirt": index=3; break;
			case "vajra": index=4; break;
			case "strahd": index=5; break;
			case "zariel": index=6; break;
			case "elminster": index=7; break;
			default: index=0;
		}
		let order = split[index];
		if (!asc)
			order = -order;
		ele.style.order = `${order}`;
	}
}