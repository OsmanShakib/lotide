const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`These two are the same: ${actual} vs ${expected}`)
    } else {
        console.log(`These two are not the same: ${actual} vs ${expected}`);
    }

};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    const answer = {};
    
    for (const item of allItems) {
        //console.log(item);
        if (itemsToCount[item]) { 
            if (answer[item]) {
                answer[item] += 1;
            } else {
                answer[item] = 1;
            }
        }
    }
    console.log(answer);
}


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);