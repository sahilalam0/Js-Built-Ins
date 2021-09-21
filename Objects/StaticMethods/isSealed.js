const obj = {

};

console.log(Object.isSealed(obj));

Object.seal(obj);

console.log(Object.isSealed(obj));

/*
output:
false
true
*/