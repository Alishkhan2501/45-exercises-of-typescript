// Store the person's name in a variable
let personName: string = "John";

// Print the name in lowercase
console.log(personName.toLowerCase());

// Print the name in uppercase
console.log(personName.toUpperCase());

// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Print the name in title case
console.log(toTitleCase(personName));