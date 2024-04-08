#!/usr/bin/node
const { argv } = require('process');
if (parseInt(argv[0])) {
  for (let i = 0; i < parseInt(argv[2]); i++) {
    let line = '';
    for (let k = 0; k < parseInt(argv[2]); k++) {
      line += 'X';
    }
    console.log(line);
  }
} else {
  console.log('Missing Size');
}
