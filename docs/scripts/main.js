const rrm = {
	active: (localStorage.randrambMode == 1 ? true : false),
	storage: "randrambMode",
	name: "Randramb Mode",
	nick: "rrm",
	map: new Map()
};
const nnm = {
	active: (localStorage.nicknamesMode == 1 ? true : false),
	storage: "nicknamesMode",
	name: "Nicknames Mode",
	nick: "nnm",
	map: new Map()
};

rrm.map.set("Recurring Event Exclusivity Dates","Dates and Crap");
rrm.map.set("Premium Packs and DLC", "Shop Cash Packs");
rrm.map.set("Turn of Fortune’s Wheel", "New Main Campaign");

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
nnm.map.set("Gromma", "Grandma");
nnm.map.set("Warduke", "Warduck");
nnm.map.set("Briv", "Skippy");
nnm.map.set("Black Viper", "BV");
nnm.map.set("Antrius", "Antivirus");
nnm.map.set("Egbert", "Egg...Bert");
nnm.map.set("Corazón", "Côrăžón");
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
nnm.map.set("Birdsong", "BS");
nnm.map.set("Catti-brie", "Catti");
nnm.map.set("Certainty", "Certainly");
nnm.map.set("Tatyana", "Taty");
nnm.map.set("Sgt. Knox", "Knox");
nnm.map.set("Thellora", "Thermometer");
nnm.map.set("Pigment", "Pig Mint");
nnm.map.set("pigment", "pig mint");
nnm.map.set("egendaries", "egos");
nnm.map.set("egendary", "ego");
nnm.map.set("Blacksmithing Contract", "BSC");
nnm.map.set("Blacksmith Contract", "BSC");
nnm.map.set("Bounty Contract", "BC");
nnm.map.set("Potion of Polish", "PoP");
nnm.map.set("Golden Epic", "GE");

const allModes = [rrm, nnm];

function init() {
	var edit = !(document.location.pathname == "/modes.html");
	updateModes(edit);
	
	if (!edit) {
		var list = document.getElementById(`modesList`);
		var contents = ``;
		for (let i = 0; i < allModes.length; i++) {
			var curr = allModes[i];
			contents += `<span class="modesColInner"><span class="modesRow"><span class="modesType"><input type="checkbox" class="modesCheckbox" id="${curr.nick}" name="${curr.nick}" onClick="toggleMode('${curr.nick}')"`+(curr.active?` checked`:``)+`><label for="${curr.nick}" class="modesLabel">${curr.name}</label></span><span class="modesDetails" id="${curr.nick}Details"><a onClick="modesDetails('${curr.nick}')" id="${curr.nick}Link">[show]</a></span></span><span class="modesContent" id="${curr.nick}Content" style="display:none;">&nbsp;</span></span>`;
		}
		list.innerHTML = contents;
	}
}

function updateModes(edit) {
	var modes = `<br /><a href="modes.html">Modes</a>`;
	for (let i = 0; i < allModes.length; i++) {
		var curr = allModes[i];
		if (curr.active) {
			modes += `<br />${curr.name} Active`;
			if (edit) {
				for (const [key, value] of curr.map) {
					document.body.innerHTML = document.body.innerHTML.replaceAll(`${key}`,`${value}`);
				}
			}
		}
	}
	var element = document.getElementById("modes");
	element.innerHTML = modes;
}

function modesDetails(type) {
	for (let i=0; i<allModes.length; i++) {
		var curr = allModes[i];
		if (curr.nick != type) {
			continue;
		}
		var element = document.getElementById(`${curr.nick}Content`);
		var link = document.getElementById(`${curr.nick}Link`);
		if (link.innerHTML == "[show]") {
			var content = `<span class="modesContentRowHeader"><span class="modesCol1">Find</span><span class="modesCol2">Replace</span></span>`;
			for (const [key,value] of curr.map) {
				content += `<span class="modesContentRow"><span class="modesCol1">${key}</span><span class="modesCol2">${value}`
				if (key == "D’hani" || key == "K’thriss" || key == "Lae’zel") {
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
		var curr = allModes[i];
		if (curr.nick != type) {
			continue;
		}
		var checked = document.getElementById(`${curr.nick}`).checked;
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