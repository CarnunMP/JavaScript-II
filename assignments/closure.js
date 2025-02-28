console.log("Closure:");

// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let yo = "yo";
function makeYoYoyo() {
  yo += "yo";
}
makeYoYoyo();
console.log(yo);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = (limit = 3) => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  function counter() { 
    if (count < limit) {
      count++;
    } else {
      count = 1;
    }
    return count;
  }
  return counter;
};
// Example usage: 
const myCounter = counterMaker();
myCounter(); // 1
myCounter(); // 2
console.log(myCounter()); // Expected: 3
console.log(myCounter()); // Expected: 1
console.log(myCounter()); // Expected: 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
let counter = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counterObject = {
    increment: function() {
      counter++;
      // console.log(counter);
      return counter;
    },
    decrement: function() {
      counter--;
      return counter;
    }
  }

  return counterObject;
};

console.log(counterFactory().decrement(), counterFactory().decrement(), counterFactory().increment(), counterFactory().increment(), counterFactory().increment());
// Hmm... seems to be working!

console.log("———");

// Some IIFE experiments:
console.log((function () {
  return 5 * 5;
})());

let iifeTestArray = ["Cat", "Dog", "Giant Man-Eating Lizard"];
console.log(iifeTestArray.sort((function (a, b) {
  if (a < b) {return -1}
  if (b < a) {return 1}
  return 0;
})())); // These parentheses are getting a little ridiculous!
// In any case, the above causes an error... because sort expects a function (as opposed to some returned value)?