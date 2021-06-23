function shoppingList(str) {
    let shoppingList = {};  
    if(str.length === 0) { return shoppingList;}                 //object for return
    str.split(', ').forEach(item => {         //use split to separate the entry and forEach to iterate every item
            let separate = item.split(' ');   //use split to separate the quantity and item name
            (separate[0] === '0')? 0 : shoppingList[separate[1]] = parseInt(separate[0]);   
            //assign quantity to itemname if quantities != 0
    });
    return shoppingList;                      //return the object
}

console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));

console.log(shoppingList(""));

console.log(shoppingList("2 tomatoes, 1 egg, 0 pumpkins"));