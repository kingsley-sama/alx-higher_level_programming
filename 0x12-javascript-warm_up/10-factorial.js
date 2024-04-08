#!/usr/bin/node
const { argv } = require('process');
if (parseInt(argv[2])) {
  console.log(factorial(parseInt(argv[2])));
}
function factorial (num) {
  if (num === 0 || isNaN(num)) {
    return 1;
  }
  num = num * factorial(num - 1);
  return (num);
}
