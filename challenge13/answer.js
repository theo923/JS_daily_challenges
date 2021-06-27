function padNumList(nums, length) {
    return nums.map(int => int.toString().padStart(length, '0'));
    // use map to create a new array to store the padded number
    // turn integer into string and use padStart to pad
    // padStart's first parameter is target length
    // if target length is larger than the integer length then add padding
}

console.log(padNumList([1, 22, 33], 2));
// returns ["01", "22", "33"]

console.log(padNumList([1, 22, 33], 5));
// returns ["00001", "00022", "00033"]

console.log(padNumList([1000, 0, 3], 3));
// returns [1000, 000, 003]

