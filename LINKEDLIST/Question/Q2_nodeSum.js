class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
let a = new Node(3)
let b = new Node(2)
let c = new Node(3)
let d = new Node(2)

//reference to next 
a.next=b; 
b.next=c;
c.next=d;
// console.log(a);

const sumOfList = (head)=>{
    let sum = 0;
    let current=head;
    while(current!==null){
        sum +=current.value;
        current=current.next;
    }
    return sum;
}
let res = sumOfList(a)
console.log(res);

// using recurssion
const sumOfrList = (head)=>{
    if(head==null) return 0;
    return head.value + sumOfrList(head.next)
}
let res1 = sumOfrList(a)
console.log(res1);


