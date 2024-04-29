var guestList = ["Shabir", "Ubaid", "Abdullah", "Hussain", "Rehan"];
var dontCome = guestList[4];
console.log(dontCome, "Nahe aa skhta");
guestList.splice(4, 4, "Humza");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
