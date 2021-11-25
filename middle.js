// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function (arr1, arr2) {
//   let isTrue = null;
//   if (arr1.length !== arr2.length)
//     return false
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       isTrue = false;
//     } else {
//       isTrue = true;
//     }
//   }
//   return isTrue;
// };

// const assertArraysEqual = function (a, b) {
//   if (eqArrays(a, b)) {
//     console.log(`✅✅✅Assertion Passed: ${a} === ${b} `);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${a} === ${b}`);
//   }

// };

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual")

// ACTUAL FUNCTION

const middle = function (array) {
    let answer = [];
    if (array.length % 2 === 0) {
        answer = [array[array.length / 2 - 1], array[array.length / 2]]
        return answer
    } else {
        answer =  [array[Math.round(array.length / 2 - 1)]];
        return answer
    }
}
// return answer;


// TEST CODE
// For arrays with one or two elements
// assertArraysEqual(middle([1]), [1], []) // => []
// assertArraysEqual(middle([1, 2]), [1,2], []) // => []

// // For arrays with odd number of elements
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

// // For arrays with even number of elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

module.exports = middle;