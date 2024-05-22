// lower case
let personName: string= "Alish";
console.log("lowercase:", personName.toLowerCase());  

//upper case
console.log("uppercase:" , personName.toUpperCase());

//title case
console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));