// Creating a Guest List Arry
let guestList = ["Shabir", "Ubaid", "Abdullah", "Hussain", "Rehan"];
// Making variable for those guest who cant come
let dontCome = guestList[4];
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
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at Middle index of array
guestList.splice(middleIndex, 0, "zain");
// Print Message of Ubdated List
console.log("Ubdated list of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));
// inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");
// using while-lop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let RemovedGuest = guestList.pop();
    console.log(`Sorry, ${RemovedGuest} I cant invite you to dinner`);
}
// printing a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));
// removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
export {};
