function divisible(arr){
  return arr.filter(val => (val % 3 == 0)? true:false)
}

console.log(divisible([1, 2, 3, 4])); //expected: [3]
console.log(divisible([1, 3, 6, 13, 15])); //expected: [3, 6, 15]
console.log(divisible([21, 17, 12])); //expected: [21, 12]