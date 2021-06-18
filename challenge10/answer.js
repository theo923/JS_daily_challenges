function stringToObject(str){

    let object = new Object;                            //declare a new Object for storing answer
    let entrySplit = str.split(',');                    //split the string by comma
    let keyValueSplit;                                  //declare variable

    if(str == ""){return {};}                           //if the string is empty return the answer

    for(entry in entrySplit){                           //use for loop for iteration of each properties

        keyValueSplit = entrySplit[entry].split(':');   //split key and value by colon
        object[keyValueSplit[0]] = keyValueSplit[1];    //assign both key and value to the new object 

    }

    return object;                                      //return the completed object

}

console.log(stringToObject("")); // Expected {}

console.log(stringToObject("a:1,b:2,c:3")); //Expected { a: "1", b: "2", c: "3" }

console.log(stringToObject("one:-1,two:hi there,three:what's that?")); // Expected { one: "-1", two: "hi there", three: "what's that?" }
