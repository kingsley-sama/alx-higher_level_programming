#!/usr/bin/node
const args = process.argv.slice(2).map((x) => {
  return parseInt(x);
});

if (args.length <= 1) {
  console.log(0);
} else {
  console.log(args.sort((a, b) => {
    return b - a;
  })[1]);
}
// const { argv } = require('process');
// if (argv.length > 3) {
//   secondLarges(argv);
// } else {
//   console.log(0);
// }
// function secondLarges (arg) {
//   let max = 0;
//   let min = 0;
//   if (arg[2] >= arg[3]) {
//     max = arg[2];
//     min = arg[3];
//   } else {
//     max = arg[3];
//     min = arg[2];
//   }
//   for (let i = 2; i < arg.length; i++) {
//     if (arg[i] > max) {
//       min = max;
//       max = arg[i];
//     } else if (arg[i] < max && arg[i] > min) {
//       min = arg[i];
//     }
//     i++;
//   }
//   console.log(min);
// }
