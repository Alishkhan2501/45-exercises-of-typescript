var guestlist = ["Alix", "John", "Sara", "Albert"];
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\n Would you like to join me for dinner tonight.\n Thank You \n');
}
var not_present = "Albert";
var new_guest = "Gull";
guestlist[3] = new_guest;
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\nWould you like to join me for dinner tonight.\nThank You\n');
}
guestlist.unshift("Hania", "Sadia", "Irfa");
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\nWould you like to join me for dinner tonight. I find a big table so i decide to invite 3 more guest\nThank You\n');
}
console.log('\nunfortunately i cannot arrange big table , only two people allow.');
while (guestlist.length > 2) {
    var remove_guest = guestlist.pop();
    console.log("sorry ".concat(remove_guest, " you are not invitd for dinner."));
}
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\n you are still invited for dinner\nThank You\n');
}
guestlist.splice(0, 2);
