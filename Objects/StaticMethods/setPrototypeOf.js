const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
};

console.log(Object.getPrototypeOf(obj2));

Object.setPrototypeOf(obj2, obj1);
console.log(Object.getPrototypeOf(obj2));

/*
Output:

[Object: null prototype] {}
{ a: 1 }
*/