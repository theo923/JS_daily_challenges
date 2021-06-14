Challenge :six:: 

So we heard y'all like objects... 

Write a function capitaliseKeys, which takes an object as an argument, and returns a new object with the same key-value pairs as the input object, except all the keys have been capitalised.

Example:
capitaliseKeys({ a: 1, b: 2, c: 3 }) //Expected: { A: 1, B: 2, C: 3 }

capitaliseKeys({ Hello: 'hi' }) //Expected: { HELLO: 'hi' }

capitaliseKeys({}) //Expected: {}

Note: your function needs to construct a new object and return the new object, not just mutate the old object that's passed in as an argument.