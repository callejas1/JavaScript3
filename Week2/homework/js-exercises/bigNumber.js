'use strict';
// Write a function called checkDoubleDigits that:

// Takes 1 argument: a number
// Returns a new Promise
// If the number is bigger than 10, resolve with the string: "The number is bigger than 10!"
// If the number is smaller than 10, reject with the error: "Error! The number is smaller than 10..."

function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('The number is bigger than 10!');
    } else if (num < 10) {
      reject('The number is smaller than 10...');
    } // I noticed the promise stays in a pending status when the number is exactly 10, should we address that situation?
    // Doing a num <= 10 or an additional else if statement seems to do the trick, but the instructions don't say anything about it.
  });
}

checkDoubleDigits(11)
  .then((num) => console.log(num))
  .catch((error) => console.log(error));


// function checkDoubleDigits(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve('The number is bigger than 10!');
//     } else if (num < 10) {
//       reject('The number is smaller than 10...');
//     } // I noticed the promise stays in a pending status when the number is exactly 10, should we address that situation?
//     // Doing a num <= 10 or an additional else if statement seems to do the trick, but the instructions don't say anything about it.
//   })
//   .then((num) => console.log(num))
//   .catch((error) => console.log(error)); --> I've also seen this being done with promises. Advisable?
// }

// checkDoubleDigits(11)