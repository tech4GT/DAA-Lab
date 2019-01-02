(function main() {


    lcsDynamic("bd", "abcd");

})();

function lcsDynamic(s1, s2) {
    let arr = [];
    arr.push
    for (let i = 0; i < s1.length + 1; i++)
        arr.push(new Array(s2.length + 1).fill(0));
    let i = 1, j = 1;
    while (i < s1.length + 1) {
        let row = i - 1, col = j - 1;
        if (s1.charAt(row) == s2.charAt(col))
            arr[i][j] = arr[i - 1][j - 1] + 1;
        else
            arr[i][j] = arr[i - 1][j] < arr[i][j - 1] ? arr[i][j - 1] : arr[i - 1][j];

        if (col == arr[0].length) {
            j = 1;
            i++;
        } else {
            j++;
        }
    }
    console.log(arr);
}