const arr = ["Hello", "World"];

arr.forEach((item, ind, tmp_arr) => {
    console.log(ind, item, tmp_arr);
});

/*
Output:
0 Hello [ 'Hello', 'World' ]
1 World [ 'Hello', 'World' ]
*/