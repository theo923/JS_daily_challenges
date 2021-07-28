Challenge :one: :nine:: 

Write a function sandwichStrings, which takes one parameter: an array of strings array.

sandwichStrings should return a string which is constructed from the array elements in the following way:
Concatenate the first half of each word, until you reach the last word, which is concatenated whole, then concatenate the second half of each word in reverse order.

Assume the all strings in the array have an even number of letters.

Example:
sandwichStrings(['four', 'five', 'longer', 'eleven'])
// returns 'fofilonelevengerveur'

sandwichStrings(['weat', 'bude', 'pole', 'dawn'])
// returns 'webupodawnledeat'