// define variables
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty =20;
let fruits = ["mango", "banana", "apple"];

// test for equlaity and inequlaity with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");

// tests using Lowercase Function
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log (uppercaseMango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting to lowercase?");
console.log (uppercaseMango.toLowerCase() != "mango");

// numerical tests
// equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to 
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10)

// Tests using " && " "or" operators

// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than  10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than  10");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal is 20")
console.log (20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is  not equal is 20")
console.log (20 > 50 || 20 != 20);

// test whether an item is include in array
console.log("\nIs banana include in my Fruits array");
console.log(fruits.includes("banana"));

// not include
console.log("\nIs banana not  include in my Fruits array");
console.log(!fruits.includes("banana"));