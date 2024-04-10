#!/usr/bin/node
function numberOfOccurence (list, searchelement) {
  let i = 0;
  let n = 0;
  while (i < list.length) {
    if (list[i] === searchelement) {
      n += 1;
    }
    i++;
  }
  return (n);
}

exports.nbOccurences = numberOfOccurence;
