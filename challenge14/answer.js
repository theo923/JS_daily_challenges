function dropRepeats(arr){
    return arr.filter((currentArgument, pos) => (arr.length == 0)? [] : (currentArgument !== arr[pos - 1])? true : false);
}

//use filter method to filter out the non-consecutive number
//let currentArgument be the element of the array and pos be the array postition of the element
//if array's length is equal to 0 that means it is empty so return it
//then check if the currentArgument is not equal to the element that before it
//if yes than return true so the currentArgument will be kept
//if not then filter out that currentArgument.

console.log(dropRepeats([1, 1, 2, 3, 3, 2, 1]));
// returns [1, 2, 3, 2, 1]

console.log(dropRepeats(['hi', 'there', 'there', 2, 1, 1, 'hi']));
// returns ['hi', 'there', 2, 1, 'hi']

console.log(dropRepeats([]));
// returns []