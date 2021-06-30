function uniqueElements(arr1, arr2){
    return arr1.concat(...arr2).filter((value, index, arr) => (arr.lastIndexOf(value) === arr.indexOf(value))? value : false)
}

// combine arr1 and arr2 by concat method
// filter the array
// if lastIndexOf value == IndexOf value, that means it has only one occurence, so return it
// else return false

console.log(uniqueElements([1, 2, 4, 4], [1, 3, 3]));

//should return 
//[2]

console.log(uniqueElements([1, 10, 15, 24, 24], [1, 1, 24, 30]));

//should return
//[10, 15, 30]


//function uniqueElements(arr1, arr2){
//    let newArr1 = arr1.filter((value) => (arr1.lastIndexOf(value) == arr1.indexOf(value) && arr2.includes(value) == false)? value : false);
//    let newArr2 = arr2.filter((value) => (arr2.lastIndexOf(value) == arr2.indexOf(value) && arr1.includes(value) == false)? value : false);
//    return newArr1.concat(...newArr2);
//}