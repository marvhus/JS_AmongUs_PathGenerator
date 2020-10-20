// Json document for the skeld map
var mapSkeld = [
    "Upper Engine", 
    "Cafeteria", 
    "Weapons",
    "Reactor",
    "Security",
    "Medbay",
    "O2",
    "Navigation",
    "Lower Engine",
    "Electrical",
    "Storage",
    "Admin",
    "Communications",
    "Shields"
    ];

// Json document for the plus map
var mapPolus = [
    "Northwest",
    "Northeast",
    "Laboratory",
    "Security",
    "Electrical",
    "Storage",
    "O2",
    "Communications",
    "Central",
    "Office",
    "East",
    "Southwest",
    "Weapons",
    "South",
    "Admin",
    "Specimen Room"
    ];

// Json document for the Mira map
var mapMira = [
    "Greenhouse",
    "Office",
    "Admin",
    "Reactor",
    "Laboratory",
    "Launchpad",
    "Locker room",
    "Communicatins",
    "Medbay",
    "Storage",
    "Cafeteria",
    "Balcony"
    ];

var CurentMap;

// Sets the curent map to The Skeld
function Skeld() {
    CurentMap = "Skeld";
    document.getElementById("map").innerHTML = CurentMap;
    document.getElementById("room").innerHTML = "none";
}

// Sets the curent map to Polus
function Polus() {
    CurentMap = "Polus";
    document.getElementById("map").innerHTML = CurentMap;
    document.getElementById("room").innerHTML = "none";
}

// Sets the curent map to Mira HQ
function Mira() {
    CurentMap = "Mira";
    document.getElementById("map").innerHTML = CurentMap;
    document.getElementById("room").innerHTML = "none";
}

// Get a room in the map u chose
function room() {
    switch(CurentMap) {
        case "Skeld":
            rooms(mapSkeld, 14);
            return;
        case "Polus":
            rooms(mapPolus, 16);
            return;
        case "Mira":
            rooms(mapMira, 12);
            return;
    }
}

// Outputs a random room
function rooms(room, listLength) {
    var num = randomNum(listLength - 1);
    document.getElementById("room").innerHTML = room[num];
}

// returns a random number so rooms() can output a random num can output a random room
function randomNum(num) {
    var output = (Math.floor(Math.random() * num));
    return output
}