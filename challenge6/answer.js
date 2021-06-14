function capitaliseKeys(obj){
  let newObj = {};
  for(let [key, val] of Object.entries(obj)){
    newObj[key.toUpperCase()] = val;
  }
  return newObj;
}

console.log(capitaliseKeys({ a: 1, b: 2, c: 3 })) //Expected: { A: 1, B: 2, C: 3 }

console.log(capitaliseKeys({ Hello: 'hi' })) //Expected: { HELLO: 'hi' }

console.log(capitaliseKeys({})) //Expected: {}