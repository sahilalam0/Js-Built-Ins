const obj1 = {
    a: 1
};

const obj2 = Object.create(obj1);

console.log(obj2.a);
console.log(obj2.hasOwnProperty('a'));
obj2.a = 2;
console.log(obj2.a);
console.log(obj2.hasOwnProperty('a'));
console.log(Object.getPrototypeOf(obj2).a);

Object.defineProperty(obj2, 'b', {
    value: 3
});

console.log(obj2.b);
console.log(obj2.hasOwnProperty('b'));

/*
Output:

1
false
2
true
1
3
true
*/


