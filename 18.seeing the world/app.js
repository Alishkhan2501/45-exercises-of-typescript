var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//•store the location in a array. Make sure that the array is not in alphabetical order.
//• print your arrray in its original order.
var places = ["italy", "turkey", "greece", "newyork", "skardu"];
console.log('original:' + places);
//•print your arrray in alphabetical order without modifying the actual list.
console.log('copy:' + __spreadArray([], places, true).sort());
//•show that your array is still in its original order by printing it.
console.log('original:' + places.sort());
//• print your array in reverse aplhabetical order without changing the order of its original list.
console.log('original:' + __spreadArray([], places, true).sort().reverse());
//•show that your array is still in its original order by printing it again.
console.log('original:' + __spreadArray([], places, true).sort().reverse());
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('original:' + places.sort());
//• Reverse the order of your list again. Print the list to show it's back to its original order.
console.log('original:' + places.sort().reverse());
