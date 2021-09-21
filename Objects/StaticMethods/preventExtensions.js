const obj = {
};

obj.a = 1;
console.log(obj);

Object.preventExtensions(obj);

obj.b = 2;

console.log(obj);

/*
Output:

{ a: 1 }
{ a: 1 }
*/