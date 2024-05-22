// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
    let guestlist : string [] = ["Alix", "John", "Sara", "Albert"];
    for (let i=0; i<guestlist.length; i++){ 
        console.log('Hello' + guestlist[i] + ',\n Would you like to join me for dinner tonight.\n Thank You \n') 
    }
    let not_present : string = "Albert";
    let new_guest : string = "Gull";
    guestlist[3] = new_guest;
    for (let i=0; i<guestlist.length; i++){ 
        console.log('Hello' + guestlist[i] + ',\nWould you like to join me for dinner tonight.\nThank You\n')
    }
    guestlist.unshift("Hania", "Sadia", "Irfa");
    for(let i=0; i<guestlist.length; i++){
        console.log('Hello' + guestlist[i] + ',\nWould you like to join me for dinner tonight. I find a big table so i decide to invite 3 more guest\nThank You\n')
}