// create a array
let userNames = ["Mazhar", "Humza", "Ubaid", "Admin", "Abdullah"];

// using ForEach Loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})

