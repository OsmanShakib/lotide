const terms = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(terms, word => word[0]);
console.log("Item BEFORE: ", terms);
console.log( "Item AFTER: ", results1);