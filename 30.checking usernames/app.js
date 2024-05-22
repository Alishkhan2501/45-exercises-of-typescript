var current_users = ["theexplorer", "mysteriousman", "bookwormchloe", "artisticsoul", "musiclover"];
var new_users = ["novelenthusiast", "mysteriousman", "adventureseeker", "artisticsoul", "mysteriousgirl"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
