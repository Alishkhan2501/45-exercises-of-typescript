//EX#18. Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car: String = 'subaru';

// Test 1: Equality Comparison(True)
console.log("Is car == 'subaru'? I Predict True.");
console.log(car =='subaru'); //True

//Test 2: Strict Equality Comparison(True)
console.log("Is car === 'subaru'? I Predict True.");
console.log(car ==='subaru'); //True

//Test 3: Inequality Comparison (False)
console.log("Is car != 'subaru'? I Predict False.");
console.log(car !='subaru'); //False

//Test 4: Streict inequality comparison (False)
console.log("Is car !== 'subaru'? I Predict False.");
console.log(car !=='subaru'); //False

//Test 5: Less Than Comparison (False)
console.log("Is car < 'subaru'? I Predict False.");
console.log(car < 'subaru'); //False (lexicographic comparison)

//Test 6: Greater Than Comparison(False)
console.log("Is car > 'subaru'? I Predict False.");
console.log(car > 'subaru'); //False (lexicographic comparison)

//Test 7: Less Than or Equal Comparison (True)
console.log("Is car <= 'subaru'? I Predict True.");
console.log(car <= 'subaru'); //True

//Test 8: Greater Than Or Equal Comparison (True)
console.log("Is car => 'subaru'? I Predict True.");
console.log(car => 'subaru'); //True

//Test 9: Checking truthiness (True)
console.log("Is car? I Predict True.");
console.log(car); //True (Non-empty string is truthy)

//Test 10: Checking Falsiness (False)
console.log("Is !car? I Predict False.");
console.log(!car); //False (negation of a truthy value)

