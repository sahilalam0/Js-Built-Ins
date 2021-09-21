const obj1 = {
    0: "Hello"
};
const obj2 = {
    1: "World"
}
Object.assign(obj1, obj2);
console.log(obj1, obj2);

const obj3 = Object.assign({}, null, { a: 1 }, undefined, { b: { c: 2 } });
console.log(obj3);

const a = { a: 1, b: 1, c: 1 };
const b = {
    b: 2, c: 2
};
const c = {
    c: 3
};

const returned = Object.assign({}, a, b, c);
console.log(returned);

/*
Output:

{ '0': 'Hello', '1': 'World' } { '1': 'World' }
{ a: 1, b: { c: 2 } }
{ a: 1, b: 2, c: 3 }
*/

