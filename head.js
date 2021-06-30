const head = function(head) {
  if (head === '') {
    return undefined;
  } else {
    return head[0];
  }
};


module.exports = head;