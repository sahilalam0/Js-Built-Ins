const obj = {};

Object.defineProperties(obj, {
    a: {
        value: 1
    },
    b: {
        value: 2,
        enumerable: true
    },
    c: {
        value: 3,
        enumerable: true,
        writable: true
    },
    d: {
        value: 4,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

console.log(obj);

/*

Output:
{ b: 2, c: 3, d: 4 }
*/
