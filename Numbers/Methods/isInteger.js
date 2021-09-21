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
    (1 / 0.3)
];

numbers.forEach((n) => {
    console.log(n + ' : \n')
    console.log(Number.isInteger(n));
    console.log('\n');
});

/*
Output:
0 :

true


0 :

false


0 :

true


Infinity :

false


NaN :

false


null :

false


undefined :

false


5 :

true


Infinity :

false


3.3333333333333335 :

false

*/