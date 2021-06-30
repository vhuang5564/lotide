// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return (true);
  } else {
    return (false);
  }
};

const countLetters = (letters) => {

  letters = letters.split(' ').join(''); // gets rid of blank spaces

  let letterObj = {};

  for (let letter of letters) { // creates key value for each unique letter
    if (letter !== letterObj[letter]) {
      letterObj[letter] = 0
    };
  }

  for (let letter of letters) { // increments key value if it is equal to letter
    letterObj[letter] += 1;
  }
  return letterObj;
};

console.log(countLetters('lighthouse labs'));