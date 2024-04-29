let guestList = ["Shabir", "Ubaid", "Abdullah", "Hussain", "Rehan"];

let dontCome = guestList[4];

console.log(dontCome, "Nahe aa skhta");

guestList.splice(4, 4, "Humza");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));