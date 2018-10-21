(function() {
    let arr = [5, 4, 3, 2, 1];
    mergeSort(arr, 0, arr.length - 1);
    console.log(arr);
})();

function merge(arr, low, mid, high) {
    let it = 0, i = low, j = mid + 1, helper = new Array(high - low + 1);

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            helper[it] = arr[i];
            i++;
        } else {
            helper[it] = arr[j];
            j++;
        }
        it++;
    }

    while (i <= mid) {
        helper[it] = arr[i];
        i++;
        it++;
    }
    while (j <= high) {
        helper[it] = arr[j];
        j++;
        it++;
    }

    for (it = 0; it < helper.length; it++)
        arr[low + it] = helper[it];

}
function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = Math.floor((high + low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

}
