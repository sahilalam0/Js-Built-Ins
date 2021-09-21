const obj = {
    a: 1
}

Object.defineProperty(obj, 'b', {
    value: 2
});

const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);

/*
Output:

[ 'a', 'b' ]
*/