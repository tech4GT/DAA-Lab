(function() {

    let arr = [40, 20, 30, 10, 30];
    console.log(matrixChain(arr, 1, arr.length - 1));

})();

function matrixChain(arr, low, high) {
    if (low >= high) return 0;

    let rv = Number.MAX_SAFE_INTEGER;
    for (let i = low; i < high; i++) {
        let count = matrixChain(arr, low, i)
            + matrixChain(arr, i + 1, high)
            + arr[low - 1] * arr[i] * arr[high];

        if (count < rv) rv = count;
    }
    return rv;
}