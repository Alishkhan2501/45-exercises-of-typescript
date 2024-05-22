var users = ["Taha", "Ayan", "Mamoor", "Hamza", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", 'thankyou for logging in again.'"));
    }
}
