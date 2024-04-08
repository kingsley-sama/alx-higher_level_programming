#!/usr/bin/env node
const { link } = require('node:fs');
const { argv } = require('node:process');
const myStr = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
for (let i = 0; i < parseInt(argv[2]); i++) {
  let line = '';
  for (let k = 0; k < parseInt(argv[2]); k++) {
    line += 'X';
  }
  console.log(line);
}
