//default
const obj1 = {};

Object.defineProperty(obj1, 'a', {
    value: 1
});

console.log(obj1, obj1.a);

obj1.a = 2;
console.log(obj1.a);

delete obj1.a;
console.log(obj1.a);

for (const i in obj1) {
    console.log(i);
}
const keysObj1 = Object.keys(obj1);
console.log(keysObj1);

//configurable is true
const obj2 = {};
Object.defineProperty(obj2, 'a', {
    value: 2,
    configurable: true
});
console.log(obj2, obj2.a);

obj2.a = 3;
console.log(obj2.a);

Object.defineProperty(obj2, 'a', {
    value: 3
});
console.log(obj2.a);

delete obj2.a;
console.log(obj2.a);

//enumerable is true
const obj3 = {};
Object.defineProperty(obj3, 'a', {
    value: 1,
    enumerable: true,
    configurable: true
});

console.log(obj3);
for (const i in obj3) {
    console.log(i);
}

const keys_obj3 = Object.keys(obj3);
console.log(keys_obj3);

//writable is true
const obj4 = {};
Object.defineProperty(obj4, 'a', {
    value: 1,
    enumerable: true,
    configurable: true,
    writable: true
});

console.log(obj4);
obj4.a = 2;
console.log(obj4);

/*
Output:
{} 1
1
1
[]
{} 2
2
3
undefined
{ a: 1 }
a
[ 'a' ]
{ a: 1 }
{ a: 2 }
*/