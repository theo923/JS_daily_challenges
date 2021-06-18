Challenge :one: :zero:: 

Write a function stringToObject

stringToObject takes one parameter, a string. The string is made up of key-value pairs formatted as follows: "key1:value1,key2:value2,..."
stringToObject should return an object made up of the key-value pairs in the string. Assume all values are strings.

Example:
stringToObject("") // Expected {}

stringToObject("a:1,b:2,c:3") //Expected { a: "1", b: "2", c: "3" }

stringToObject("one:-1,two:hi there,three:what's that?") // Expected { one: "-1", two: "hi there", three: "what's that?" }