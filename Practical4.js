(function() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(binSearch(arr, 5, 0, arr.length - 1));
})();

function binSearch(arr, val, low, high) {
    if (low > high) return -1;
    if (low == high) return arr[low] == val ? low : -1;

    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == val) return mid;
    else if (arr[mid] > val) {
        return binSearch(arr, val, low, mid - 1);
    } else {
        return binSearch(arr, val, mid + 1, high);
    }

}