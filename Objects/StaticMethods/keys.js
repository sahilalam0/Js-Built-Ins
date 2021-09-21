const obj = {
    a: 1,
    b: 2
}
Object.defineProperty(obj, 'c', {
    value: 3
});

const keys = Object.keys(obj);
console.log(keys);

/*
Output:

[ 'a', 'b' ]
*/