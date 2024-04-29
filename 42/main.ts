// define function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicions great through .map() it wil modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// define an array magicians names
let magician_names = ["Harry Poter", "Mazhar", "Ali"];

// Call make great function to modify magicion names
let great_magicians = make_great(magician_names);

// call show_magicions that show modified list of magicians
show_magicians(great_magicians);