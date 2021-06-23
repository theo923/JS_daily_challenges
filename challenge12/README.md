Challenge :one: :two:: 

Write a function shoppingList that accepts a single parameter, a string.
The string is a list of ingredients, separated by a comma, formatted as below:

"2 tomatoes, 1 egg, 3 pumpkins"

The function shoppingList should return an object where the keys are the ingredient names, and the values are the number of the ingredients needed.

Example:
shoppingList("2 tomatoes, 1 egg, 3 pumpkins");
// returns { tomatoes: 2, egg: 1, pumpkins: 3 }

shoppingList("");
// returns {}

shoppingList("2 tomatoes, 1 egg, 0 pumpkins");
// returns { tomatoes: 2, egg: 1 }