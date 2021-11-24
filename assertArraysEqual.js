const eqArrays = require(`./eqArrays`);
const assertArraysEqual = function (a, b) {
    if (eqArrays(a, b)) {
        console.log(`✅✅✅Assertion Passed: ${a} === ${b} `);
    } else {
        console.log(`❌❌❌Assertion Failed: ${a} === ${b}`);
    }
};

// TEST CODE
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);// => true)
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false

module.exports = assertArraysEqual;