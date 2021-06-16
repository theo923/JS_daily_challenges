function mostCommon(arr){
  let num; let obj = {};
  arr.forEach(val => (obj[val] == undefined)? obj[val] = 1:obj[val]++);
  for(let [key, value] of Object.entries(obj)){
    (value >= obj[num] || obj[num] == undefined)? num = key: false;
  }
  return num
}


console.log(mostCommon([1, 2, 3, 4, 4, 4, 1])); // expected: 4

console.log(mostCommon([-1, -1, 0, 3, 8, 0])); // expected: -1

console.log(mostCommon([])); // expected undefined