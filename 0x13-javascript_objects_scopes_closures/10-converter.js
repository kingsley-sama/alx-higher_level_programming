#!/usr/bin/node

function argToBase (base) {
  function myConverter (n) {
    return n.toString(base);
  }

  return myConverter;
}
exports.converter = argToBase;
