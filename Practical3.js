(function() {
    let arr = [1, 2, 10, 4, 5];
    console.log(minMax(arr, 0, arr.length - 1));
})();

function minMax(arr, low, high) {
    if (low > high) return Number.MIN_SAFE_INTEGER;
    if (low == high) return {
        min: arr[low],
        max: arr[low]
    };

    let mid = Math.floor((high + low) / 2), left = minMax(arr, low, mid), right = minMax(arr, mid + 1, high);
    return {
        min: left.min < right.min ? left.min : right.min,
        max: left.max > right.max ? left.max : right.max
    }

}