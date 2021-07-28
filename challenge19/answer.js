function sandwichStrings(arr){
  let newArr = [];
  arr.forEach(val => {
    newArr.splice(newArr.length/2, 0, val);
    newArr = newArr.join('').split('');
  })
  return newArr.join('');
}

console.log(sandwichStrings(['four', 'five', 'longer', 'eleven']))
// returns 'fofilonelevengerveur'

console.log(sandwichStrings(['weat', 'bude', 'pole', 'dawn']))
// returns 'webupodawnledeat' 