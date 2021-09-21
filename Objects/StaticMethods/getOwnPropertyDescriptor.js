const obj = {
    a: 1
}

Object.defineProperty(obj, 'b', {
    value: 2
});

const descriptor1 = Object.getOwnPropertyDescriptor(obj, 'a');
const descriptor2 = Object.getOwnPropertyDescriptor(obj, 'b');

console.log(descriptor1);
console.log(descriptor2);

const descriptor = Object.getOwnPropertyDescriptors(obj);
console.log(descriptor);

/*
Output:

{ value: 1, writable: true, enumerable: true, configurable: true }
{ value: 2, writable: false, enumerable: false, configurable: false }
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { value: 2, writable: false, enumerable: false, configurable: false }
}
*/