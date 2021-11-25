const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`These two are the same: ${actual} vs ${expected}`)
    } else {
        console.log(`These two are not the same: ${actual} vs ${expected}`);
    }

};

const findKeyByValue = function (object, value) {
    for (let i in object){
        if (object[i] === (value)){
            return i;
        }
    }
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);