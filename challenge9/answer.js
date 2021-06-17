function formatNumber(n){
  let separate = n.toString().split('.');
  let num = separate[0].split('').reverse();
  let position = 3;
  (!separate[1])? separate[1] = '0':false;
  while(position < num.length){
    num.splice(position, 0, ',');
    position += 4;
  }
  return [num.reverse().join(''), separate[1]].join('.')
}

console.log(formatNumber(1)); //Expected "1.0"

console.log(formatNumber(1000.23)); //Expected "1,000.23"

console.log(formatNumber(23082342.3285)); //Expected 23,082,342.3285
