#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (h > 0 && w > 0) {
      this.height = h;
      this.width = w;
      this.print
    } else {
      return {};
    }
  }

  print () {
    if (!this.height || !this.width){
      return;
    }
    for (let i = 0; i < this.height; i++) {
      console.log(('X').repeat(this.width));
    }
  }
}
module.exports = Rectangle;
