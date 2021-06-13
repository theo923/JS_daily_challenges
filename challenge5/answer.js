function replaceEveryWord(str){
  let longest = str.split(' ').reduce((acc, val) => (acc.length < val.length)? acc = val: acc);
  return str.split(' ').map(val => ''.padStart(val.length, longest)).join(' ')
}

console.log(replaceEveryWord("the brown fox ran away quickly"));  //Expected: "qui quick qui qui quic quickly"

console.log(replaceEveryWord("gregor yvonne oliver oli dan")); //Expected: "gregor gregor gregor gre gre"

console.log(replaceEveryWord("hello world I am learning how to code")); //Expected: "learn learn l le learning lea le lear"


function replaceEveryWord2(str){
  let longest = str.split(' ').reduce((acc, val) => (acc.length <= val.length)? acc = val: acc);
  return str.split(' ').map(val => ''.padStart(val.length, longest)).join(' ')
}

console.log(replaceEveryWord2("gregor yvonne oliver oli dan")); //Expected: "oliver oliver oliver oli oli"

console.log(replaceEveryWord2("the quick brown fox")); //Expected: "bro brown brown bro"