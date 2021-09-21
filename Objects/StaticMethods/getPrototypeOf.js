const obj1 = {
    a: 1
};

const obj2 = Object.create(obj1);

console.log(obj2);
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj2) === obj1);

const obj3 = { ...obj1 };
console.log(obj3);
console.log(Object.getPrototypeOf(obj3));
console.log(Object.getPrototypeOf(obj3) === Object.prototype);

/*
Output:
{}
{ a: 1 }
true
{ a: 1 }
[Object: null prototype] {}
true
*/