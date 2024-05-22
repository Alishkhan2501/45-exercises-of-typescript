var car = 'subaru';
// Test 1: Equality Comparison(True)
console.log("Is car == 'subaru'? I Predict True.");
console.log(car == 'subaru'); //True
//Test 2: Strict Equality Comparison(True)
console.log("Is car === 'subaru'? I Predict True.");
console.log(car === 'subaru'); //True
//Test 3: Inequality Comparison (False)
console.log("Is car != 'subaru'? I Predict False.");
console.log(car != 'subaru'); //False
//Test 4: Streict inequality comparison (False)
console.log("Is car !== 'subaru'? I Predict False.");
console.log(car !== 'subaru'); //False
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
console.log(function (car) { return 'subaru'; }); //True
//Test 9: Checking truthiness (True)
console.log("Is car? I Predict True.");
console.log(car); //True (Non-empty string is truthy)
//Test 10: Checking Falsiness (False)
console.log("Is !car? I Predict False.");
console.log(!car); //False (negation of a truthy value)
