// Quicksort

(function() {
    let arr = [5, 4, 3, 2, 1];
    quicksort(arr, 0, arr.length - 1);
    console.log(arr);
})();

function partition(arr, low, high) {

    let pivot = arr[high], i = low, j = high, pi = high;

    while (i < j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        swap(arr, i, j);

        if (arr[i] == pivot) {
            pi = i;
        } else {
            i++;
        }
        if (arr[j] == pivot) {
            pi = j;
        } else {
            j--;
        }
    }
    return pi;
}

function quicksort(arr, low, high) {

    if (low >= high) return;

    let p = partition(arr, low, high);
    quicksort(arr, low, p - 1);
    quicksort(arr, p + 1, high);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}