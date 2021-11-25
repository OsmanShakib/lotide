// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
    // if (actual === expected){
    //     console.log(`These two arguemnts are the same: ${actual} vs ${expected}`)
    // } else {
    //     console.log("`These two are not the same: ${actual} vs ${expected}`");


const head = function(array)
{
    return(array[0])
}

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1); 
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;