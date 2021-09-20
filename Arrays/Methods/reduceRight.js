const arr = [1, 2, 3, 4, 5, 6];

function rev(arr) {
    return arr.reduceRight((prev, curr) => {
        prev.push(curr);
        return prev;
    }, [])
}

console.log(rev(arr));

/*
Output:
[ 6, 5, 4, 3, 2, 1 ]
*/