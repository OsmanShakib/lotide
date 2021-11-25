// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//     if (actual === expected){
//         console.log(`These two arguemnts are the same: ${actual} vs ${expected}`)
//     } else {
//         console.log("`These two are not the same: ${actual} vs ${expected}`");
//     }

// };
const assertEqual = require(`./assertEqual`) 
const tail = function(array)
{
    array2 = array.slice[1]
    return(array2)
}

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1); 
// Test Case: Check the original array 

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;