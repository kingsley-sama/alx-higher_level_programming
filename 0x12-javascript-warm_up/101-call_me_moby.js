#!/usr/bin/env node
function callMeMoby(num, func) 
{
    while(num > 0)
    {
      func();
      num--;
    }
    return;
}
module.exports.callMeMoby = callMeMoby;