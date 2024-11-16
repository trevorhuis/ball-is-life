/*
  Closure Functions
*/

function createFunction() {
  function multiplyBy2() {
    return num * 2;
  }

  return multiplyBy2();
}

const generatedFunc = createFunction();
const result = generatedFunc(3);

/*
  How is the function incrementCounter able to access the counter value?
  Is it because counter and incrementCounter were stored in the function memory of outer?
  Is it because incrementCounter is able to go up the call stack to outer?
*/
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();

function newOuter() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

/*
  A "backpack" of memory is attached to the function from where it was born.
  This "backpack" has the counter variable.
  This is a feature given to us by JavaScript.

  The memory is stored at the time of function definition in hiddent property
  [[scope]]

  You can not access this property with function.[[scope]], but the function can.
  This will live as long as the function definition is not overwritten.
*/
