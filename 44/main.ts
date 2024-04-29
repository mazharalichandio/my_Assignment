function mySandwiches(...items: string []){
    return `I want Sandwich of ${items}`;
};

let collection1 = mySandwiches("Ham", "Cheeze", "Lettuce");
let collection2 = mySandwiches("Turky", "Swiss");
let collection3 = mySandwiches("Tomato", "Moyannaise");

console.log(collection1);
console.log(collection2);
console.log(collection3);