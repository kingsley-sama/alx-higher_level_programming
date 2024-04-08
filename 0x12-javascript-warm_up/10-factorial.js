#!/usr/bin/env node
const {argv} = require('node:process')
if (parseInt(argv[2])) {
 console.log(factorial(parseInt(argv[2])));
}
function factorial(num) 
{
    if (parseInt(num) == 0){
        return(1);
    }
    else if (parseInt(num) == 1) {
        return(1);
    }
    num = num * factorial(num - 1);
    return(num);
}