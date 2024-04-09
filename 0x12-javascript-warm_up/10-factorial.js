#!/usr/bin/node
const { argv } = require('process');
function factorial (num) {
  if (num === 0 || isNaN(num)) {
    return 1;
  }
  num = num * factorial(num - 1);
  return (num);
}
console.log(factorial(parseInt(argv[2])));
