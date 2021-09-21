const numbers = [
    0,
    '0',
    +0,
    Infinity,
    NaN,
    null,
    undefined,
    (1 / 0.2),
    (1 / 0),
    (1 / 0.3),
    'Hello',
    [1],
    [1, 2],
    [[1, 2]],
    [1, 'hello'],
    ['a', 'b'],
    {
        0: 1
    },
    {
        'a': 1
    },
    {
        0: 'a'
    }
];

numbers.forEach((n) => {
    console.log(n + ' : \n')
    console.log(isNaN(n));
    console.log(Number.isNaN(n));
    console.log('\n');
});

/*
0 :

false
false


0 :

false
false


0 :

false
false


Infinity :

false
false


NaN :

true
true


null :

false
false


undefined :

true
false


5 :

false
false


Infinity :

false
false


3.3333333333333335 :

false
false


Hello :

true
false


1 :

false
false


1,2 :

true
false


1,2 :

true
false


1,hello :

true
false


a,b :

true
false


[object Object] :

true
false


[object Object] :

true
false


[object Object] :

true
false


*/
