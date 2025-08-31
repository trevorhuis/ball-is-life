// Imperative
function sumImp (numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Sum
function sumRec ( numbers) {
  if (numbers.length === 1) {
    // base case
    return numbers[0];
  } else {
    // recursive case
    return numbers[0] + sum(numbers.slice(1));
  }
}

// Factorial Readability Example
function iterativeFactorial(n) {
  let product = 1
  while (n > 0){
    product *= n;
    n--;
  }
  return product
}

function recursiveFactorial(n) {
  if (n === 0) return 1
return n * recursiveFactorial(n - 1)
}

// Fibonacci Writing Example

function iterativeFibonacci(n) {
  let total = 0
  let previous = 0
  for(i = 0; i <= n; i++) {
    if (i === 0) continue
    if (i === 1) {
      total += 1
      continue
    }
    let oldTotal = total
    total += previous
    previous = oldTotal
  }
  return total
}

function recursiveFibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

for(let i = 0; i < 40; i++) {
  const timeIter = new Date()
  console.log(`${i} - Iteration`)
  iterativeFibonacci(i)
  console.log(new Date() - timeIter)

  const timeRec = new Date()

  console.log(`${i} - Recusive`)
  recursiveFibonacci(i)
  console.log(new Date() - timeRec)
}
