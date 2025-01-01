
const ender = (ending) => (input) => input + ending

const adore = ender(" rocks")
const announce = ender(", y'all")
const exclaim = ender("!")

const hypeUp = (x) => exclaim(announce(adore(x)))

console.log(hypeUp("JS"))
console.log(hypeUp("FP"))

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

function pipeline(...functions) {
  if (length(functions) === 0) return input => input
  if (length(functions) === 1) return input => head(functions)(input)
  return function(input) {
    return pipeline(...tail(functions))(head(functions)(input))
  }
}

const pluralize = singularWord => singularWord + 's'
const heart = word => "I ❤️ " + word

const showSomeLove = pipeline(pluralize, heart, exclaim)

console.log(showSomeLove('Corgi'))
