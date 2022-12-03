// bubble sort  time conplexity is for nested loop o(n2) and space complexity is "iterating_time" O(1)
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]       // line no. 22,23,24 is swaping the values in perfect way
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}
let array = [2, 10, 5, 0, 545,2,12,5,65,3];
console.log(bubbleSort(array))


    // let arr= [64,2,365,34,6,1,54,76,3]
    // for(let i=0; i<arr.length; i++){
    //     for(let j=0; j<arr.length-1 -i; j++){
    //         if(arr[j]>arr[j+1]){
    //             let temp = arr[j]
    //             arr[j]=arr[j+1]
    //             arr[j+1]=temp
    //         }
    //     }
    // }
    // console.log(arr)