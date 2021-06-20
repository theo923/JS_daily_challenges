function findEven(str) {
    return str.split(',').filter(num => parseInt(num, 2) % 2 === 0).map(num => parseInt(num, 2));

    //use split to separate each entries
    //use filter to filter out the odd number
    //use map to assign the base 10 number to the array
}

console.log(findEven("10,1011,1000001,111010,101000000"));

console.log(findEven(""));

console.log(findEven("1011"));