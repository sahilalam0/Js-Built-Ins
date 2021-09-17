const str = "Hello World Hello";

const examples = [
    'H',
    'Hello',
    'World',
    'Helloo',
    'Hello o',
    'Hello '
]

examples.forEach((example) => {
    console.log(str.indexOf(example));
})

/*
Output:
0
0
6
-1
-1
0
 */