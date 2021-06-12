Challenge :four::

Write a function lookThroughObject;
lookThroughObject accepts two arguments: an object ("a"), and a function ("b");
lookThroughObject must return an object that contains only those key-value pairs in "a" whose value causes "b" to return true

Examples:
lookThroughObjet({ name: 'Kim', age: 43, member: true }, (v) => typeof v === 'number')
// Expected: { age: 43 }

lookThroughObject({ firstName: 'Kim', lastName: 'Berly', address: '123 fake street' }, (v) => v.length > 3)
// Expected: { lastName: 'Berly', address: '123 fake street' }

lookThroughObject({ a: [], b: -1, c: [1, 2] }, (v) => Array.isArray(v) && v.length > 0)
// Expected: { c: [1, 2] }