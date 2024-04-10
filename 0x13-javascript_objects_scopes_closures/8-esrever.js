#!/usr/bin/node
function reverseList (list) {
  let i = list.length - 1;
  let j = 0;
  const array = [];
  while (i >= 0) {
    array[j] = list[i];
    i--;
    j++;
  }
  return (array);
}
exports.esrever = reverseList;
