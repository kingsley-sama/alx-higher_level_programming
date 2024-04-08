#!/usr/bin/env node
function addMeMaybe (num, fun) {
  num++;
  fun(num);
}
module.exports.addMeMaybe = addMeMaybe;
