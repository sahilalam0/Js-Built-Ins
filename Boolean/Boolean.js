const examples = [
    0,
    1,
    999,
    +0,
    -0,
    '',
    '0',
    '1',
    '123',
    {},
    {
        a: 1,
    },
    [],
    [0],
    [1],
    [1234],
    [[]],
    [[0]],
    [[1]],
    [[1, 2, 3]],
    null,
    undefined,
    NaN
];

examples.forEach((example) => {
    console.log(JSON.stringify(example));
    const bool = new Boolean(example);
    console.log(bool);
    console.log(bool.toString());
    console.log(bool.valueOf());
});

/*
0
[Boolean: false]
false
false

1
[Boolean: true]
true
true

999
[Boolean: true]
true
true

0
[Boolean: false]
false
false

0
[Boolean: false]
false
false

""
[Boolean: false]
false
false

"0"
[Boolean: true]
true
true

"1"
[Boolean: true]
true
true

"123"
[Boolean: true]
true
true

{}
[Boolean: true]
true
true

{"a":1}
[Boolean: true]
true
true

[]
[Boolean: true]
true
true

[0]
[Boolean: true]
true
true

[1]
[Boolean: true]
true
true

[1234]
[Boolean: true]
true
true

[[]]
[Boolean: true]
true
true

[[0]]
[Boolean: true]
true
true

[[1]]
[Boolean: true]
true
true

[[1,2,3]]
[Boolean: true]
true
true

null
[Boolean: false]
false
false

undefined
[Boolean: false]
false
false

null
[Boolean: false]
false
false
*/