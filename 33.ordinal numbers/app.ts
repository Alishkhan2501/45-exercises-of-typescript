// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users. 
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available. 
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < mynumbers.length; i++) {
    if(mynumbers[i] == 1){
        console.log(`${mynumbers[i]}st`);

    }else if(mynumbers[i] == 2){
        console.log(`${mynumbers[i]}nd`);

    }else if(mynumbers[i] ==3){
        console.log(`${mynumbers[i]}rd`);

    } else if(mynumbers[i] >= 4 && mynumbers [i] <=9){
        console.log(`${mynumbers[i]}th`);
    }
}
