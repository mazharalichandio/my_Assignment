let userNames = ["Mazhar", "Humza", "Ubaid", "Admin", "Abdullah"];

userNames = []

if (userNames.length === 0){
    console.log("your Array is empty we need to find some users!")
}else{
    // using ForEach Loop on array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}