// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

module.exports = eqArrays;

