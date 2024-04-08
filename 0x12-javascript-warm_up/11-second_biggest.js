#!/usr/bin/node
const { argv } = require('process');
if (argv.length >= 4) {
  secondLarges(argv);
} else {
  console.log(0);
}
function secondLarges (arg) {
  let max = 0;
  let min = 0;
  if (arg[2] >= arg[3]) {
    max = arg[2];
    min = arg[3];
  } else {
    max = arg[3];
    min = arg[2];
  }
  for (let i = 4; i < arg.length; i++) {
    if (arg[i] > max) {
      min = max;
      max = arg[i];
    } else if (arg[i] < max && arg[i] > min) {
      min = arg[i];
    }
    i++;
  }
  console.log(min);
}
