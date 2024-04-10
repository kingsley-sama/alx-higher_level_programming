#!/usr/bin/node
/**
* Square class that inherits from previous square class
*/
class Square extends require('./5-square') {
  charPrint (c) {
    let char = c;
    if (c === undefined) {
      char = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let line = '';
      for (let k = 0; k < this.width; k++) {
        line += char;
      }
      console.log(line);
    }
  }
}
module.exports = Square;
