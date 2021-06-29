function printInBox (arr){
    let longest = arr.reduce((max, currentNum) => (currentNum.length >= max)? currentNum.length: max, 0);
    // find out the length fo the longest string
    arr.forEach((word, index) => {
        if(index == 0){
            console.log(''.padStart(longest + 6, '-'));   // top line of the box
        }
        console.log("|  " + word.padEnd(longest, ' ') + "  |");     // words with border
        if(index == arr.length - 1){
            console.log(''.padStart(longest + 6, '-'));   // bottom line of the box
        }
    })
}

printInBox(['hello', 'there', 'my', 'friend']);

/*
output
------------
|  hello   |
|  there   |
|  my      |
|  friend  |
------------
*/

//Initial idea for the challenge
/*

function printInBox (arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            console.log(''.padStart(max + 6, '-'));
        }
            console.log("|  " + arr[i].padEnd(max, ' ') + "  |");

        if(i == arr.length - 1){
            console.log(''.padStart(max + 6, '-'));            
        }
    }
}

*/