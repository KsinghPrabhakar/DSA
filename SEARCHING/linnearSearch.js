function linnerSearch(arr,num){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]==num){
            return i
        }
    }
    return -1;  
}
let array = [32,545,65,43,65,23,65];
let result = linnerSearch(array,431)
console.log(result);
// if(result == -1){
//     console.log(`you Entered invalid element`)
//  }else{
//      console.log(`you element index of = ${result}`)
//  } 