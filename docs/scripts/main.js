const rrm = (localStorage.randrambMode==1?true:false);
const nnm = (localStorage.nicknamesMode==1?true:false);
const maprrm = new Map();
maprrm.set("Prior Recurring Event Reward Availabilities","Dates and crap");
maprrm.set("Premium Packs and DLC", "Shop Cash Packs");
maprrm.set("Turn of Fortune’s Wheel", "New Main Campaign");

const mapnnm = new Map();
mapnnm.set("Torogar", "Totoro");
mapnnm.set("Spurt", "Splat");
mapnnm.set("Orkira", "Shakira");
mapnnm.set("Ezmerelda", "Ez");
mapnnm.set("Deekin", "DOOM");
mapnnm.set("Bruenor", "Tutorial Dwarf");
mapnnm.set("Xerophon", "Cheatophon");
mapnnm.set("K’thriss", ins("Kthriss",randInt(0,7),"’"));
mapnnm.set("Lae’zel", ins("Laezel",randInt(0,6),"’"));
mapnnm.set("D’hani", ins("Dhani",randInt(0,5),"’"));
mapnnm.set("Gromma", "Grandma");
mapnnm.set("Warduke", "Warduck");
mapnnm.set("Briv", "Skippy");
mapnnm.set("Antrius", "Antivirus");
mapnnm.set("Egbert", "Egg...Bert");
mapnnm.set("Corazón", "Côrăžón");
mapnnm.set("Binwin", "Binwho?");
mapnnm.set("Zorbu", "Murdergnome");
mapnnm.set("Commodore Krux", "Hippo");
mapnnm.set("Krux", "Hippo");
mapnnm.set("Hew Maan", "Hew");
mapnnm.set("Valentine", "Val");
mapnnm.set("Asharra", "Ash");
mapnnm.set("Farideh", "Fari");
mapnnm.set("Birdsong", "BS");
mapnnm.set("Catti-brie", "Catti");

function init() {
	var modes = "";
	if (rrm) {
		modes += "<br/>Randramb Mode Active";
		for (const [key, value] of maprrm) {
			document.body.innerHTML = document.body.innerHTML.replaceAll(`${key}`,`${value}`);
		}
	}
	if (nnm) {
		modes += "<br/>Nickname Mode Active";
		for (const [key, value] of mapnnm) {
			document.body.innerHTML = document.body.innerHTML.replaceAll(`${key}`,`${value}`);
		}
	}
	if (modes != "") {
		document.getElementById("modes").innerHTML = modes;
		document.getElementById("modes").hidden = false;
	}
}

function ins(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}