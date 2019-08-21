// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

console.log("Callbacks: ");

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, item => console.log(`Length is ${item}!`));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, item => console.log(`Last item is ${item}`));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(2, 3, sum => console.log("Sum is " + sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(2, 3, product => console.log("Product is " + product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let isInList = false;
  list.forEach(i => {
    if (!isInList && (item === i)) {
      isInList = true;
    }
  });

  cb(isInList);
}
contains("Notebook", items, isInList => console.log("There is a notebook in the list: " + isInList));
contains("T-Rex", items, isInList => console.log("There is a T-Rex in the list: " + isInList));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let counts = {};
  array.forEach(item => {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  });

  console.log(counts);
  cb(Object.keys(counts));
}

let testArray = ["A", "A", "B", "C", "C", "C"];
removeDuplicates(testArray, duplicatesRemoved => console.log(`Original array: [${testArray.toString()}]. Duplicates removed: [${duplicatesRemoved}]`));

// A little hacky, but it works! :P

console.log("———")