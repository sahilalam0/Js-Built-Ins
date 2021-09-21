const examples = [
    {
        left: 0,
        right: 0,
    },
    {
        left: +0,
        right: +0
    },
    {
        left: +0,
        right: -0
    },
    {
        left: NaN,
        right: NaN
    },
    {

        left: NaN,
        right: Number.NaN
    },
    {
        left: 'sahil',
        right: 'sahil'
    },
    {
        left: {},
        right: {}
    },
];

examples.forEach((e) => {

    console.log('"==" : ' + (e.left == e.right));
    console.log('"===" : ' + (e.left === e.right));
    console.log('Object.is : ' + Object.is(e.left, e.right) + '\n');
});

/*
Output:

"==" : true
"===" : true
Object.is : true

"==" : true
"===" : true
Object.is : true

"==" : true
"===" : true
Object.is : false

"==" : false
"===" : false
Object.is : true

"==" : false
"===" : false
Object.is : true

"==" : true
"===" : true
Object.is : true

"==" : false
"===" : false
Object.is : false
*/