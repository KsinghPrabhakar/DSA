// sorting=== https://jamboard.google.com/d/1PgIMtzdhC4K9pe1OF2DBmFMpIJEbYeVMVznBiAkgFL4/edit?usp=sharing
// searching===https://jamboard.google.com/d/1BJm8aIXfrzs1RkcXJX4e_wc6WvaT-3-k5oUpsZ8Oa-0/edit?usp=sharing
// codes====>https://drive.google.com/drive/folders/163-mp0dsezitSYFgbN1vT-FrhP7queG0?usp=sharing
// practice ===> https://notepad.ltd/iool4n9e
let array = [34, 21, 41, 12, 1, 6, 89];
//console.log(array); 
mergesort(array, 0, array.length - 1);
console.log(array);

function mergesort(arr, left, right) {
    if (left < right) {
        let mid = parseInt(left + (right - left) / 2);
        mergesort(arr, left, mid);
        mergesort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right) {
    let m = mid - left + 1;
    let n = right - mid;
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < m; i++) {
        leftArray[i] = arr[left + i];
    }
    // console.log(leftArray);   
    for (let i = 0; i < n; i++) {
        rightArray[i] = arr[mid + i + 1];
    }
    // console.log(rightArray);
    let i = 0, j = 0, k = left;
    while (i < m && j < n) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i]; k++,i++
        }
        else {
            arr[k] = rightArray[j]; k++, j++
        }
    }
    while (i < m) {
        arr[k] = leftArray[i]; k++, i++
    }
    while (j < n) {
        arr[k] = rightArray[j]; k++, j++
    }
}