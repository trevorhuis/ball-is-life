const wholes =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Functional helper functions
function concat(array1, array2) {
  return array1.concat(array2);
}

function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function filter(predicateFn, array) {
  if (length(array) === 0) return []
  const firstItem = head(array)
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : []
  return concat(filteredFirst, filter(predicateFn, tail(array)))
}

function isEven(n) {
  return n % 2 === 0
}

const evens = filter(isEven, wholes)

const odds = filter(n => !isEven(n), wholes)

const greaterThanFour = filter(n => n >= 5, wholes)

function map(fn, array) {
  if (length(array) === 0) return []
  const firstItem = head(array)
  const mappedItem = [fn(firstItem)]
  return concat(mappedItem, map(fn, tail(array)))
}

const doubled = map(n => n * 2, wholes)
