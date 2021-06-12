function lookThroughObject(a,b){
  let obj = {};
  for(let [key, val] of Object.entries(a)){
    (b(val))? obj[key] = val : false;
  }
  return obj;
}

console.log(lookThroughObject({ name: 'Kim', age: 43, member: true }, (v) => typeof v === 'number'));
// Expected: { age: 43 }

console.log(lookThroughObject({ firstName: 'Kim', lastName: 'Berly', address: '123 fake street' }, (v) => v.length > 3));
// Expected: { lastName: 'Berly', address: '123 fake street' }

console.log(lookThroughObject({ a: [], b: -1, c: [1, 2] }, (v) => Array.isArray(v) && v.length > 0));
// Expected: { c: [1, 2] }