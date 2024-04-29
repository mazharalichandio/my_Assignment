// Creating a Guest List Arry
var guestList = ["Shabir", "Ubaid", "Abdullah", "Hussain", "Rehan"];
// Making variable for those guest who cant come
var dontCome = guestList[4];
// Print the name of guest who cant come
console.log(dontCome, "Nahe aa skhta");
// Add or Remove Values from Guest List Array 
guestList.splice(4, 4, "Humza");
// Message print for Bigger  Table 
console.log("Good news ! we have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("sultan");
// // Adding a new guest at ending index of array
guestList.push("Abbas");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at Middle index of array
guestList.splice(middleIndex, 0, "zain");
// Print Message of Ubdated List
console.log("Ubdated list of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?")); });
