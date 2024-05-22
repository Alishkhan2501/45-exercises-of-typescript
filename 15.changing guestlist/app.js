var guestlist = ["Alix", "John", "Sara", "Albert"];
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\n Would you like to join me for dinner tonight.\n Thank You \n');
}
var not_present = "Albert";
var new_guest = "Gull";
guestlist[3] = new_guest;
for (var i = 0; i < guestlist.length; i++) {
    console.log('Hello' + guestlist[i] + ',\n Would you like to join me for dinner tonight.\n Thank You \n');
}
console.log("Mr. ".concat(not_present, " will not coming for dinner tommorrow."));
