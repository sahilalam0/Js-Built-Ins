const numbers = [
    '01',
    '0',
    '123',
    '1.2',
    1.2,
    '1.2abc',
    [1.2],
    ['1.2'],
    (1 / 2),
    [1.2, 1.3, '1.2'],
    [{}, 1.2],
    [1.2, {}],
    [[1.2]],
    [[[1.2]]],
    [[], [], [['1.23', 1.2]]],
    null,
    undefined,
    NaN,
    Infinity
];

numbers.forEach((n) => {
    console.log(JSON.stringify(n) + ' : \n');
    console.log(parseFloat(n));
    console.log(Number.parseFloat(n));
    console.log('\n');
});
