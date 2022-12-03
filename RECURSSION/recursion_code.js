// 1. print 0 to 10 natural number
// function f_Name(x){
//     console.log(x);
//     if(x<10){
//         f_Name(x+1)
//     }
// }
// let data = 0
// f_Name(data)

// 2. factorial number
function factorial(item){
    if(item==0){
    return 1  
    }
    return item*factorial(item-1)
}
let data=5;
console.log(factorial(data));