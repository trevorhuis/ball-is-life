function isValidName(name) {
  return typeof name == "string" && name.trim().length >= 3;
}

console.log(isValidName(12));
console.log(isValidName(""));
console.log(isValidName("  mo  "));
console.log(isValidName("Trevor"));

// Corner case that an empty string is converted to 0
function hoursAttended(attended, length) {
  if (typeof attended != "string" || typeof attended != "number") return false;
  if (typeof length != "string" || typeof length != "number") return false;

  let attendedNum = Number(attended);
  let lengthNum = Number(length);

  if (attendedNum < 0 || lengthNum < 0) return false;
  if (attendedNum % 1 !== 0 || lengthNum % 1 !== 0) return false;

  if (attendedNum > lengthNum) return false;

  return true;
}
