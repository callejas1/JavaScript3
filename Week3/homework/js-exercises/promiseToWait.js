'use strict';
// Exercise 1: Promise me to wait

// In this exercise you'll practice refactoring Promise syntax
// into async / await + try/catch syntax.
// Rewrite exercise A & B using async / await + try/catch syntax.

// Exercise A
// function getData(url) {
//   fetch(url)
//     .then(response => response.json)
//     .then(json => console.log(json))
//     .catch(error => console.log(error));
// }

async function getData(url) {
  try {
    // fetch data
    const fetchedData = await fetch(url);
    // convert to JS object
    const data = await fetchedData.json();
    // log data
    console.log(data);
  } catch (error) {
    // log error if response not ok
    console.error(`There was an error with your request. ${error}`);
  }
}

getData('https://randomfox.ca/floof/');

// Exercise B

// const makeAllCaps = (array) => {
//   return new Promise((resolve, reject) => {
//     let capsArray = array.map((word) => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         reject('Error: Not all items in the array are strings!');
//       }
//     });
//     resolve(capsArray);
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(arr) {
  try {
    const veggiePromised = arr.map((veggie) => {
      // will return each value to Upper Case if condition is met
      if (typeof veggie === 'string') {
        return veggie.toUpperCase();
      } else {
        // throw error if cond. isn't met
        throw new Error('Not all items in the array are strings!');
      }
    });

    return veggiePromised;
  } catch (error) {
    return error;
  }
  // log desired output to the console --> ['CUCUMBER', 'TOMATOS', 'AVOCADO']
}

makeAllCaps(arrayOfWords)
  .then((veggies) => console.log(veggies))
  .catch((err) => console.log(`Something went wrong. ${err}`));
