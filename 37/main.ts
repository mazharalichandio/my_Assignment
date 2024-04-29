// making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// calling a functin with by default
make_shirt();

// calling a function now with Medium size and default message
make_shirt("Medium")

// calling a function now with Small size and also different print message
make_shirt("Small", "I Love javaScript")