//https://jamboard.google.com/d/1hCBiOqu-7Lrc7yeYD-fOg63SF_X0q1a9OYWVruW5Hmw/viewer?f=6

let arr = [7,3,67,44,87,3,67,43,1];
for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]   // 3 in temp
    let j = i - 1;      // 0- 7
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}
console.log(arr);