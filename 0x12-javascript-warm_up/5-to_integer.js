#!/usr/bin/env node
const { constants } = require('node:perf_hooks');
const { argv, argv0 } = require('node:process');
if (parseInt(argv[2])) {
  console.log('My number: ' + parseInt(argv[2]));
} else {
  console.log('Not a number');
}
