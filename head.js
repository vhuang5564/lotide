const assertEqual = require('./assertEqual');

const head = function(head) {
  if (head === '') {
    return undefined;
  } else {
    return head[0];
  }
};
