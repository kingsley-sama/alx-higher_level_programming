#!/usr/bin/node
const array = require('./100-data').list;
const newArray = array.map(
  (x, i) => {
    return (x * i);
  }
);
console.log(array);
console.log(newArray);
