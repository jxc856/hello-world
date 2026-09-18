function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.assert(add(1, 2) === 3, 'add(1, 2) should equal 3');
console.assert(add(0, 0) === 0, 'add(0, 0) should equal 0');
console.assert(add(-1, 1) === 0, 'add(-1, 1) should equal 0');

console.assert(multiply(2, 3) === 6, 'multiply(2, 3) should equal 6');
console.assert(multiply(0, 5) === 0, 'multiply(0, 5) should equal 0');

console.log('All tests passed.');