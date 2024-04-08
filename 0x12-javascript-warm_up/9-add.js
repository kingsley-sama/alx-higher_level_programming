#!/usr/bin/env node
const {argv} = require('node:process')
a = argv[2];
b = argv[3]
if (a && b) {
    add(a,b);
}
else{
    console.log('NaN')
}
function add(a,b)
{
    console.log(parseFloat(a) + parseFloat(b));
}