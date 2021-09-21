const numbers = [
    0,
    '0',
    +0,
    Infinity,
    NaN,
    null,
    undefined,
    (1 / 0.2),
    (1 / 0)
];

numbers.forEach((n) => {
    console.log(n + ' : \n')
    console.log(isFinite(n));
    console.log(Number.isFinite(n));
    console.log('\n');
});

/*
output:
0 :

true
true


0 :

true
false


0 :

true
true


Infinity :

false
false


NaN :

false
false


null :

true
false


undefined :

false
false


5 :

true
true


Infinity :

false
false
*/