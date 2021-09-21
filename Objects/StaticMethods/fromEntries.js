const arr = [
    ['a', 1],
    ['b', 3, 2],
    ['c'],
    [['d', 4, 5], 7],
    [[5, 5], 8]
];

const obj = Object.fromEntries(arr);

console.log(obj);

/*
Output:

{ a: 1, b: 3, c: undefined, 'd,4,5': 7, '5,5': 8 }
*/