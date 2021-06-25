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

const middle = array => {
  if (array.length <= 2) { // edge case: if number of elements is <= 2 returns empty array

    return [];

  } else if (array.length % 2 === 0) { // even number of elements in array

    let midArray = Math.round(array.length / 2);
    return [array[midArray - 1] + ', ' + array[midArray]]; // returns two middle arrays

  } else if (array.length % 2 !== 0) { // odd number of elements in array

    let midArray = Math.floor(array.length / 2); // divides array length by 2 and rounds down to get the middle array
    return [array[midArray]];

  }
};


console.log(middle([1, 2, 3])); // => [2]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]