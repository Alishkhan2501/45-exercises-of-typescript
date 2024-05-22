//EX#24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let car : string = 'subaru';
let age :number = 30
let numbers: number[] = [2,4,6,8]


                                                                            // String Tests//

//Test 1: Equality (true)
console.log("Is car =='subaru'? I Predict True.");
console.log(car == 'subaru'); //True (case-insensitive)

//Test 2: strict Equality (False)
console.log("Is car ==='subaru'? I Predict False.");
console.log(car === 'subaru'); //False (case-insensitive)

//Test 3. Inequality (True)
console.log("Is car !='Toyota'? I Predict True.");
console.log(car != 'Toyota'); //True

// Test 4. Equality (False)
console.log("Is car !=='subaru'? I Predict False.");
console.log(car !== 'subaru'); //False (case-insensitive)



                                                                            //Lower Function Test//

//Test 5. Lower Case function (True)
console.log("Is car.toLowercase() =='subaru'? I Predict True.");
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)

//Test 6. Lowercase conversion (False)
console.log("Is car === car.tolowercase()? I Predict False.");
console.log(car === car.toLowerCase()); //False (original value remains uppercase)

                                                                            //Numerical Test//
//Test 7. Equality (True)
console.log("Is age == 30? I Predict True.");
console.log(age == 30); //True   

//Test 8. Inequality (True)
console.log("Is age !=30? I Predict True.");
console.log(age != 30); //True 

//Test 9. Greater than (False)
console.log("Is age > 30? I Predict False.");
console.log(age > 30); //False

//Test 10. Less than or equal (True)
console.log("Is age <= 30? I Predict True.");
console.log(age <= 30); //True 

                                                                          //Logical Operators//
// Test 11. AND (True)                                                                          
console.log("Is age > 20 && age <25? I Predict True.");
console.log(age > 20 && age <25); //True (both conditions met)

//Test 12. OR (False)
console.log("Is age > 40 || < 15? I Predict False.");
console.log(age > 40 || age < 15); //False (neither conditions met)

                                                                        //Array Tests//
//Test 13. In array (True)                                                                        
console.log("Is 3 in numbers? I Predict True.");
console.log(3 in numbers ); //True (check for index existence)

//Test 14. not in array (False)
console.log("Is 2 not in numbers? I Predict True.");
console.log(!(2 in numbers)); //True
