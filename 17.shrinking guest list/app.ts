// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list
// Print your list to make sure you actually have an empty list at the end of your program.
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
    console.log('\nunfortunately i cannot arrange big table , only two people allow.')
    while(guestlist.length>2){
        let remove_guest= guestlist.pop();
        console.log(`sorry ${remove_guest} you are not invitd for dinner.`);
    }
    for(let i=0; i<guestlist.length; i++){
        console.log('Hello' + guestlist[i] + ',\n you are still invited for dinner\nThank You\n')
    }
    guestlist.splice(0,2)