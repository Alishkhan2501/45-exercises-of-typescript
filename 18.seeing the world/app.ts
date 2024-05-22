//EX#18. Seeing the World: Think of at least five places in the world you’d like to visit.

//•store the location in a array. Make sure that the array is not in alphabetical order.
//• print your arrray in its original order.
let places : string []= ["italy", "turkey", "greece", "newyork", "skardu"];
console.log('original:' + places);

//•print your arrray in alphabetical order without modifying the actual list.
console.log('copy:' + [...places].sort());

//•show that your array is still in its original order by printing it.
console.log('original:' + places.sort());

//• print your array in reverse aplhabetical order without changing the order of its original list.
console.log('original:' + [...places].sort().reverse());

//•show that your array is still in its original order by printing it again.
console.log('original:' + [...places].sort().reverse());

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('original:' + places.sort());

//• Reverse the order of your list again. Print the list to show it's back to its original order.
console.log('original:' + places.sort().reverse());
