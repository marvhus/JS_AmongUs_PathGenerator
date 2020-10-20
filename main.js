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
    "launchpad",
    "Locker room",
    "Communicatins",
    "Medbay",
    "torage",
    "afeteria",
    "balcony"
    ];

var CurentMap;

// Sets the curent map to The Skeld
function Skeld() {
    CurentMap = "Skeld";
    document.getElementById("map").innerHTML = CurentMap;
}

// Sets the curent map to Polus
function Polus() {
    CurentMap = "Polus";
    document.getElementById("map").innerHTML = CurentMap;
}

// Sets the curent map to Mira HQ
function Mira() {
    CurentMap = "Mira";
    document.getElementById("map").innerHTML = CurentMap;
}

// Get a room in the map u chose
function room() {
    switch(CurentMap) {
        case "Skeld":
            rooms(mapSkeld);
            return;
        case "Polus":
            rooms(mapPolus);
            return;
        case "Mira":
            rooms(mapMira);
            return;
    }
}

// Outputs a random room
function rooms(room) {
    var listLength = 14;
    var num = randomNum(listLength - 1);
    document.getElementById("room").innerHTML = room[num];
}

// returns a random number so rooms() can output a random num can output a random room
function randomNum(num) {
    var output = (Math.floor(Math.random() * num));
    return output
}