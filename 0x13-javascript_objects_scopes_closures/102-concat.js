#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');

const a = argv[2];
const b = argv[3];
const c = argv[4];

if (a && b && c) {
  concat(a, b);
}

function concat(a, b) {
  try {
    const fileA = fs.readFileSync(a, 'utf-8');
    const fileB = fs.readFileSync(b, 'utf-8');
    fs.writeFileSync(c, fileA + '\n' + fileB);
  } catch (err) {
  }
}
