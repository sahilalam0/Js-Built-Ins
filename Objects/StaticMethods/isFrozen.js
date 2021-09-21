const obj = {

};

console.log(Object.isFrozen(obj));

Object.freeze(obj);

console.log(Object.isFrozen(obj));

/*
Output:

false
true
*/