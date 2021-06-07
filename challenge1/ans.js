function count(arr, callback) {
  let i = 0;
  arr.forEach(val => (callback(val))? i++:false);
  return i;
}

console.log(count([1, 2, 3, 4], (e) => e === 3)); //expected: 1; 
console.log(count([1, 2, 3, 4, 5], (e) => e > 1)); // expected: 4; 
console.log(count(['a', 'b', 'c', 'e'], (e) => e === 'd')); //expected: 0; 