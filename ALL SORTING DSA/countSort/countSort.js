// non comparision based algorithm
// number should be in a range
// k is range of element
// time complexity is O(n+k) and space complexty is n(k)
function countingSort(arr, range) {
    let count = [];
    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (let i = 1; i < range; i++) {
        count[i] = count[i - 1] + count[i];
    }

    let output = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}
let data=[3,2,4,1,3,2,4,1,3,2,1]  //=====>o/p [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4,4]
countingSort(data, 5)
console.log(data);