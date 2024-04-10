#!/usr/bin/node

class Square extends require('./5-square') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.size; i++) {
      let line = '';
      for (let k = 0; k < this.size; k++) {
        line += c;
      }
      console.log(line);
    }
  }
}
module.exports = Square;
