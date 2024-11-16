/*
  Functions and Callbacks
  Functions help us not break the DRY principle.
*/

function tenSquared() {
  return 10 * 10;
}

function nineSquared() {
  return 9 * 9;
}

function squareNum(num) {
  return num * num;
}

/*
  Higher-order functions moves beyond generalizing the data to be determined later, but
  allows us to fill in our functionality later too.
*/

function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}

function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

// const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

/*
  A higher order function takes in a function or returns a function.
  A callback function is the one passed to a higher-order function.

  Arrow functions allow us to create small anonymous callbacks
*/

const multiplyBy2 = (input) => input * 2;
