/*
  The call stack, memory, and thread of execution are not enough to power modern js apps.

  JavaScript is empowered by the browser which adds features like network requests,
  rendering html, web sockets, console, and many more. These features are implemented
  by the browser in another language but have a standard API we can access with Js.

  Node.js, Bun, and Deno expose these APIs in a server context rather than browser.
*/

/*
  In this snippet, JS is still going line by line but is now interacting with
  browser specific features (console.log, setTimeout)

  Output:
    Me First!
    Hello!

  The web browser features are handling writing to a console output, setting a timer,
  and remembering to execute printHello at the end of that timer.
*/
function printHello() {
  console.log("Hello");
}

// setTimeout(printHello, 1000);

// console.log("Me First!");

/*
  Callback Queue

  Callbacks are the functions that are passed to other functions.

  In the example below, printHello will be run last. It must wait on the callback
  queue for all other synchronous code to run before it can be executed.

  This is because the call stack must be empty before the callback queue is requested.
  The constant checking of the call stack and callback queue is known as the event loop.
*/

function blockFor1Sec() {
  for (let i = 0; i < 1000000000; i++) {
    const x = i + 3;
  }
  console.log("blocked chapter");
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me First");
