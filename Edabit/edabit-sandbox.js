/*
function makePair(num1, num2) {
  return [...arguments];
}

let result = makePair(34, 11);
console.log(result);
*/

const makePair(...a) {
  return a;
}

let result = makePair(34, 11, 23, 44444);
console.log(result);
