/*
JavaScript Principles:

Js goes line by line and exesutes each line - thread of execution

As it goes line by line, it saves the strings, array, functions etc
that the thread comes across in memory to be used later.

Execution Context:

When Js hits a function call, a new execution context for that function
The global execution context was created at the start of the file.

The new execution context has a local memory for that function alone.
A new memory is created, but Js only has one thread of execution so it
weaves into the execution context and weaves out.

Call Stack:

Each function adds a new item to the call stack and the item is removed by the return keyword.
The call stack always comes back to the global() item in stack when other functions are removed.
*/

const num = 3;
// Term note: inputNumber label is the parameter, the value is the argument
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

// As we hit this line, output is instantiated but has no saved value (not undefined either)
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
