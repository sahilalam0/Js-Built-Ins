const arr = [1, 2, 3, 4, 5, 6];

const iterator = arr.keys();
let entry = iterator.next();

while (!entry.done) {
    console.log(entry.value);
    entry = iterator.next();
}

/*
Output:

0
1
2
3
4
5
*/