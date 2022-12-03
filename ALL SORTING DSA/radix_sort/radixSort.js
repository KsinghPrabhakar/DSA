// jamboard ==>  https://jamboard.google.com/d/1UG1-GDWW7GVxXUDC3ZuCWhp3cVtd8xTyO1OIxZxu2s0/viewer?f=1
let array=[132,2,300,100,5];

radixSort(array);
console.log(array);

function radixSort(arr){
    let max=Math.max(...arr);
    let exp=1;

    while(exp<=max){
        countingSort(arr,exp);
        exp= exp * 10;
    }
}

// non comparision based algorithm
// number should be in a range


function countingSort(arr,exp){
    let count=[];
    let k=10;
    for(let i=0;i<k;i++){
        count[i]=0;
    }

    for(let i=0;i<arr.length;i++){
        count[parseInt((arr[i]/ exp)%10)]++;
    }

    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }

    let output=[];

    for(let i=arr.length-1;i>=0;i--){
        output[count[parseInt(arr[i]/ exp)%10]-1]=arr[i];
        count[parseInt(arr[i]/ exp)%10]--;
    }

    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
    }
}