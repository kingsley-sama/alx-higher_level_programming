#!/usr/bin/node
const letMeConst = () => {
  myVar = 333;
  return (myVar);
};
module.exports.letMeConst = letMeConst();
