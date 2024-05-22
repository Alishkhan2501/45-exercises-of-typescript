// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function myalbum(artistName:string, albumName: string){
      return { artistName, albumName}
}

let album1 = myalbum("Michael Jackson" , "Thriller");
let album2 = myalbum("The Clash" , "London Calling");
let album3 = myalbum("Nirvana" , "Nevermind");

console.log(album1);
console.log(album2);
console.log(album3);


//Number of tracks
function myalbum2(artistName:string, albumName: string, numberofTracks?: number){
    return { artistName, albumName, numberofTracks}
}

let album4 = myalbum2("Behram" , "kahani", 15);
let album5 = myalbum2("Ali" , "dil lagi", 25);
let album6 = myalbum2("chloe" , "tanhai", 30);

console.log(album4);
console.log(album5);
console.log(album6);
