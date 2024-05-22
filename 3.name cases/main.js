// Store the person's name in a variable
var personName = "John";
// Print the name in lowercase
console.log(personName.toLowerCase());
// Print the name in uppercase
console.log(personName.toUpperCase());
// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
// Print the name in title case
console.log(toTitleCase(personName));
