#!/usr/bin/node
const converter = require('./10-converter').converter;

let myConverter = converter;

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));


myConverter = converter;

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));
