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
    console.log(str.lastIndexOf(example));
})

/*
Output:
12
12
6
-1
-1
0
 */