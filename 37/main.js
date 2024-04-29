// making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// calling a functin with by default
make_shirt();
// calling a function now with Medium size and default message
make_shirt("Medium");
// calling a function now with Small size and also different print message
make_shirt("Small", "I Love javaScript");
