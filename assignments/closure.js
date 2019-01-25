// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let a = 3;
function addThree(x) {
  let ret = x + 3;
  return ret;
}
let b = addThree(a);
console.log(b);

// ==== Challenge 2: Create a counter function ====
let counts = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  counts += 1;
  return counts;
};
let newCounter = counter();
console.log(newCounter);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
