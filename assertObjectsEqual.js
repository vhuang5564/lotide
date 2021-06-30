const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (obj1, obj2) => {

  for (let key in obj1) {
    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) { // check if every key value is equal
      return false;
    }
  }

  for (let key in obj2) {
    if (JSON.stringify(obj2[key]) !== JSON.stringify(obj1[key])) { // check if every key value is equal
      return false;
    }
  }
  
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(actual)}`);
  console.log(eqObjects(actual, expected));
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  } else if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
};

const obj1 = {a: '1', b: 2};
const obj2 = {b: 2, a: '1'};
assertObjectsEqual(obj1, obj2);