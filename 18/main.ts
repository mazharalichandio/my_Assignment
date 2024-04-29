// Makingn a Arraay of Countries and Print its Original order
let countriesToVisit: String[]  = ["China", "Demark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the  Array  in Alphabetically order without modifying the Atual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that array is still in its origninal order 
console.log("Still in Original Order:", countriesToVisit);

// Print the array in Reverse Order without modifying the Atual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that array is still in its origninal order 
console.log("Still in Original Order:", countriesToVisit);

// We have Changed the Original Array Order Now 
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show that it's back to its original order
console.log("Back to Originnal Order:", countriesToVisit.reverse());

// Print the array to show that it's order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());