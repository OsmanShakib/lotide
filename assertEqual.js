const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`These two are the same: ${actual} vs ${expected}`)
    } else {
        console.log(`These two are not the same: ${actual} vs ${expected}`);
    }

};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Cohort", "Cohort"); // pass
// assertEqual("burgers", "fries"); // fail
// assertEqual(10, 10); // pass
// assertEqual(100, 34); // fail

module.exports = assertEqual;