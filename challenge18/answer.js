function squareDigits(n){
  return n.toString().split('').map(val => parseInt(val)*parseInt(val)).join('');
} 

console.log(squareDigits(10)); // returns 10

console.log(squareDigits(22)); // returns 44

console.log(squareDigits(95)); // returns 8125