#!/usr/bin/node
let argNo = 0;
function printArgNo (arg) {
  console.log(argNo + ': ' + arg);
  argNo++;
}
exports.logMe = printArgNo;
