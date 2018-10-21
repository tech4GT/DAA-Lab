(function() {
    let arr = [40, 20, 30, 10, 30];
    console.log(matrixchain(arr, 1, arr.length - 1, {}));
})();

function matrixchain(arr, low, high, memo) {
    if (memo[low + "-" + high]) return memo[low + "-" + high];
    if (low >= high) return 0;

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = low; i < high; i++) {
        let val = matrixchain(arr, low, i, memo) + matrixchain(arr, i + 1, high, memo) + arr[low - 1] * arr[i] * arr[high];
        min = min < val ? min : val;
    }
    memo[low + "-" + high] = min;
    return min;
}