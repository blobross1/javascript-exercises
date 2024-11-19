const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };

console.log(removeFromArray([1, 2, 3, 4], [3, 1]))
// Do not edit below this line
module.exports = removeFromArray;

// ✓ removes a single value (2 ms)
// ✕ removes multiple values (2 ms)
// ✓ removes multiple of the same value
// ✓ ignores non present values
// ✕ ignores non present values, but still works (1 ms)
// ✕ can remove all values (1 ms)
// ✕ works with strings
// ✕ only removes same type