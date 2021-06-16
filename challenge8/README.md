Challenge :eight::

Write a function mostCommon.
mostCommon accepts one argument, an array of integers numbers.
mostCommon returns the the most commonly occurring integer in the array. 
If more than one number appears the same amount of times, it returns the smallest one

Examples:
mostCommon([1, 2, 3, 4, 4, 4, 1]); // expected: 4

mostCommon([-1, -1, 0, 3, 8, 0]); // expected: -1

mostCommon([]); // expected undefined
yvonne — 2021/05/07
Challenge :nine: (Friday, May 7): 

Write a function formatNumber

formatNumber has one parameter n, a number

formatNumber should return the number formatted as a readable string, inserting a comma (",") as a thousands separator. If the number n is an integer, add .0 to the formatted string, otherwise, print the decimals as they are.

Example:
formatNumber(1); //Expected "1.0"

formatNumber(1000.23); //Expected "1,000.23"

formatNumber(23082342.3285); //Expected 23,082,342.3285