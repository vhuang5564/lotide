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
      return 'The two objects are not equal';
    }
  }

  for (let key in obj2) {
    if (JSON.stringify(obj2[key]) !== JSON.stringify(obj1[key])) { // check if every key value is equal
      return 'The two objects are not equal';
    }
  }
  
  return 'The two objects are equal';

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true