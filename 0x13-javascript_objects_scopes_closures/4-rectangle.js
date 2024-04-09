#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      return {};
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let line = '';
      for (let k = 0; k < this.width; k++) {
        line += 'X';
      }
      console.log(line);
    }
  }

  rotate() {
    const new_height = this.height;
    this.height = this.width;
    this.width = new_height;
  }
  double() {
    this.height *= 2;
    this.width  *= 2;
  }
}
module.exports = Rectangle;
