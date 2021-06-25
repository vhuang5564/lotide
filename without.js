// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2);
};

const without = function(arr1, arr2) {
  const newArray = [...arr1];
  for (let i = 0; i < arr1.length; i++) { // loops through each value in arr1
    for (let j = 0; j < arr2.length; j++) { // loops through each value in arr2
      if (arr1[i] === arr2[j]) {
        newArray.splice(i, 1); // removes value when value in arr1 = arr2
        console.log(newArray);
      }
    }
  }
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
