const arr = [5, 1, 2, 3, 4];

const modified_arr = arr.copyWithin(0, 1);

modified_arr[modified_arr.length - 1] = 5;
console.log(modified_arr, arr);

