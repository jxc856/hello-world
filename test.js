function add(a, b) {
  return a + b;
}

console.assert(add(1, 2) === 3, 'add(1, 2) should equal 3');
console.assert(add(0, 0) === 0, 'add(0, 0) should equal 0');
console.assert(add(-1, 1) === 0, 'add(-1, 1) should equal 0');

console.log('All tests passed.');