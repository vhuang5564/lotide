// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return (true);
  } else {
    return (false);
  }
};

const countLetters = (letters) => {

  for (let letter of letters) {
    const letterObj = {};

    if (!('letter' in letterObj)) { // makes key value for each letter
      letterObj[letter] = 0;
    }

    if (eqArrays(letter, letter)) { // adds + 1 each time for each letter
      letterObj[letter] = letterObj[letter] + 1;
    }

    console.log(letterObj);

    // letterObj.reduce(function (a, b) {
    //   return {letter: a.x + b.x};
    // });
  }
};

countLetters('LHL');

