//  space complexity is O(1) && time O(n2)
let arr = [12, 12, 23, 2, 13, 45, 23]
function selectionSort() {
    let n = arr.length;
    let min_index;
    for (i = 0; i < n - 1; i++) {
        min_index = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // swap (arr[i],arr[min_ind])
        let temp = arr[i]
        arr[i] = arr[min_index]
        arr[min_index] = temp;
    }
    console.log(arr);
}
selectionSort(arr)