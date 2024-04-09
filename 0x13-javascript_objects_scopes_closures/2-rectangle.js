#!/usr/bin/node
class Rectangle {
  width;
  height;
  constructor (w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return ({});
    }
    this.height = h;
    this.width = w;
  }
}
module.exports = Rectangle;
