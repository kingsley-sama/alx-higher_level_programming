#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (h > 0 && w > 0) {
      this.height = h;
      this.width = w;
    } else {
      return {};
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log(('X').repeat(this.width));
    }
  }
}
module.exports = Rectangle;
