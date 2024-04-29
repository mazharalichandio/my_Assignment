function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want Sandwich of ".concat(items);
}
;
var collection1 = mySandwiches("Ham", "Cheeze", "Lettuce");
var collection2 = mySandwiches("Turky", "Swiss");
var collection3 = mySandwiches("Tomato", "Moyannaise");
console.log(collection1);
console.log(collection2);
console.log(collection3);
