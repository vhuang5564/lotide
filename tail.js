const tail = function(tail) {
  let n = [];
  for (let i = 1; i < tail.length; i++) {
    n.push(tail[i]);
  }
  return n;
};

module.exports = tail;