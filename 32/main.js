// array of current users
var current_users = ["Humza", "Sultan", "Ubaid", "Abdullah", "Shabir"];
// array of new users
var new_users = ["Mazhar", "Sultan", "Hussain", "Rehan", "Shabir"];
// loop through new_users to chek for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if-Else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken! "));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
