const findKeyByValue = (bestTVShowsByGenre, tvShow) => {
  for (genre in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[genre] === tvShow) {
      return genre;
    }
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // undefined