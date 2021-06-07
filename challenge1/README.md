Challenge :one: 

Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

count([1, 2, 3, 4], (e) => e === 3); //expected: 1; 
count([1, 2, 3, 4, 5], (e) => e > 1); // expected: 4; 
count(['a', 'b', 'c', 'e'], (e) => e === 'd'); //expected: 0; 
