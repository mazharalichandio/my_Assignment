// define function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicions great through .map() it wil modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// define an array magicians names
let magician_names = ["Harry Poter", "Mazhar", "Ali"];
// making a coppy of orignal array through .Slice() function
let copy_magician_names = magician_names.slice();
// modify the copied array to include "The Great" With thier names 
let copy_great_magicians = make_great(copy_magician_names);
// Show both arrays original and copied
// original
console.log("original Array\n");
show_magicians(magician_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
export {};
