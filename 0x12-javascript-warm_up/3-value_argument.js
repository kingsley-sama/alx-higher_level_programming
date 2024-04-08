#!/usr/bin/env node
const { constants } = require('node:perf_hooks');
const { argv, argv0 } = require('node:process');
if (argv[2])
{
    console.log(argv[2]);    
}else{
    console.log('No argument')
}
