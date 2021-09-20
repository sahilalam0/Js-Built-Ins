const arr = [1, 2, 3, 4, 5, "Hello"];

const iterator = arr.values();
let entry = iterator.next();

while (!entry.done) {
    console.log(entry.value);
    entry = iterator.next();
}

/*
Output:
1
2
3
4
5
Hello
*/