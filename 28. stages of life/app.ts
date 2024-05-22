// stages of life: write an if|_else chain that determine a person's stage of life
// set a value for the variable age, and then:
// • if the person is less than 2 years old, print a message that
//the person is a baby

let age: number = 30;
if(age<2){
    console.log("the person is a baby");
}

//•if the person is atleast 2 years old but less than, 4 
//print a message that the person is the toddler

else if (age >= 2 && age < 4) {
    console.log("the person is the toodler" );
}

//• if the person is atleat 4 years but lessthan 13
// print a messsage that the person is a kid
else if (age >= 4 && age < 13) {
    console.log("the person is the kid" );
}

//• if the person is atleat 13 years but lessthan 20
// print a messsage that the person is a teenager
else if (age >= 13 && age < 20) {
    console.log("the person is the teenager" );
}

//• if the person is atleat 20 years but lessthan 65
// print a messsage that the person is a adult
else if (age >= 20 && age < 65) {
    console.log("the person is the adult" );
}

//• if the person is age 65 or older 
// print a messsage that the person is an elder
else{
    console.log("person is an elder");
}