let arr = [4, 8, 1, 10, 22, 3, 11]
quickSort(arr, 0, arr.length - 1);
console.log(arr);
function quickSort(arr, left, right) {
    if (left < right) {
        let p = partition(arr, left, right);
        quickSort(arr, left, p - 1);
        quickSort(arr, p + 1, right);
    }
}
function partition(arr, left, right) {
    let pivot = arr[right]; // Always last element
    let i = left - 1;
    for (let j = left; j <= right - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            //swap
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    // swap
    let temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    return i + 1;
}