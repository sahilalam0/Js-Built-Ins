const arr = [1, 2, 3, "Hello"];

const iterator1 = arr.entries();
const iterator2 = arr.entries();
let entry = iterator1.next();
while (!entry.done) {
    console.log(entry.value);
    entry = iterator1.next();
}

for (const entry of iterator2) {
    console.log(entry);
}

/*
Output:

[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 'Hello' ]
*/