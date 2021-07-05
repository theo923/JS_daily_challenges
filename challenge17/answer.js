function mapObject(obj, func) {
    for(let [key, value] of Object.entries(obj)){           // Object.entries() will return keys and values of object in pair
        obj[key] = func(value);                             // assign the answer to obj's key
    }
    return obj;                                             // return the new Object
}

console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));

console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Alex'));