// array of current users
let current_users = ["Humza", "Sultan", "Ubaid", "Abdullah", "Shabir"]

// array of new users
let new_users = ["Mazhar", "Sultan", "Hussain", "Rehan", "Shabir"]

// loop through new_users to chek for usernames avaibility
new_users.forEach(new_one_user => {
    
    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print different messages using if-Else statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken! `)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})