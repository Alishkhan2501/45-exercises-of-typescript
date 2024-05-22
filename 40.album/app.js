function myalbum(artistName, albumName) {
    return { artistName: artistName, albumName: albumName };
}
var album1 = myalbum("Michael Jackson", "Thriller");
var album2 = myalbum("The Clash", "London Calling");
var album3 = myalbum("Nirvana", "Nevermind");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function myalbum2(artistName, albumName, numberofTracks) {
    return { artistName: artistName, albumName: albumName, numberofTracks: numberofTracks };
}
var album4 = myalbum2("Behram", "kahani", 15);
var album5 = myalbum2("Ali", "dil lagi", 25);
var album6 = myalbum2("chloe", "tanhai", 30);
console.log(album4);
console.log(album5);
console.log(album6);
