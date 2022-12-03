function binarySearch(arr,element){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=parseInt((left+right)/2);
        if(arr[mid]==element)
        return mid;
        else if(arr[mid]>element){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
}
let arr=[1,5,6,7,8,9,20,30];
console.log(binarySearch(arr,20));

// simple

