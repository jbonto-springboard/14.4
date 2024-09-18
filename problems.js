array = [1,2,3,4,5,6,7,8,9]
testobject = {
    name : 'paul',
    occupation : 'plumber'
}
const filterOutOdds = (...args) => args.filter(items => items % 2 ===0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (array, ...args) => [...array, ...args].map(item => item*2)

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return[...items.slice(0, index), ...items.slice(index+1)];
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1,...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let object = {...obj}
    object [key] = val;
    return object;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let object = {...obj}
    delete object[key]
    return object;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {return{...obj1,...obj2}}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    object = {...obj};
    object[key] = val
    return object;
}