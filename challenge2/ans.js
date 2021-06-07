function lastWith(arr, func){
  return arr.reduce((acc, val) => (func(val))? acc = val: acc, undefined)
}

console.log(lastWith([1, 2, 3, 4], (n) => n % 2 === 1)); //returns 3
console.log(lastWith([2, 4, 6, 8], (n) => n % 2 === 1)); //returns undefined
console.log(lastWith(['hi', 'one', 'two', 'u'], (s) => s.length === 3)); //returns 'two'
console.log(lastWith(['hi', 'one', 'two', 'u'], (s) => s.length === 5)); //returns undefined