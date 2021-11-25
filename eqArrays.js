// FUNCTION IMPLEMENTATION
const assertEqual = require(`./assertEqual`);

const eqArrays = function(a1, a2)
{
    if(a1.length === a2.length)
    {
        for (var i = 0; i < a1.length; i ++)
        {
            if(a1[i] !== a2[i])
            {
                return false;
            }
        }
    }
    else
    {
        return false;
    }
    return true;


}
// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true)
// assertEqual(eqArrays(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false

module.exports = eqArrays;