const obj = {
    a: 1,
    b: 2
}
Object.defineProperty(obj, 'c', {
    value: 3
});

const values = Object.values(obj);
console.log(values);

/*
Output:

[ 1, 2 ]
*/