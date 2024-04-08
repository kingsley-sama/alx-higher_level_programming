#!/usr/bin/env node
const { constants } = require('node:perf_hooks');
const { argv, argv0 } = require('node:process');
if (argv.length == 4)
{
    console.log(argv[2] + ' is ' + argv[3]);    
}else{
    console.log('No argument')
}
