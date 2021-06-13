Challenge :five:: 

Write a function replaceEveryWord, which replaces every word in a string with versions of the longest word matching the length of the original word;
If there are more than one longest word with the same length, take the first longest word

Examples: 
replaceEveryWord("the brown fox ran away quickly");  //Expected: "qui quick qui qui quic quickly"

replaceEveryWord("gregor yvonne oliver oli dan"); //Expected: "gregor gregor gregor gre gre"

replaceEveryWord("hello world I am learning how to code") //Expected: "learn learn l le learning lea le lear"

Bonus question: what would you change in your function so it uses the last instance of the longest word? 

Examples: 
replaceEveryWord("gregor yvonne oliver oli dan"); //Expected: "oliver oliver oliver oli oli"

replaceEveryWord("the quick brown fox"); //Expected: "bro brown brown bro"