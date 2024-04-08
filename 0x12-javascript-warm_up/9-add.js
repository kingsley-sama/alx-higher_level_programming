#!/usr/bin/node
const { argv } = require('node:process');
const a = argv[2];
const b = argv[3];
if (a && b) {
  add(a, b);
} else {
  console.log('NaN');
}
function add (a, b) {
  console.log(parseFloat(a) + parseFloat(b));
}
