class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        // this.size=0;
    }
};
//new objects 
let a =new Node('A');
let b =new Node('A');
let c =new Node('A');
let d =new Node('A');
let e =new Node('A');

a.next=b;
b.next=c;
c.next=d;
d.next=e;
// console.log(a);

// using function for print
// const printLinkList=(head)=>{
//     let current = head;
//     while(current!==null){
//         console.log(current.value);
//         current=current.next;
//     }
// }

//using recurssion for print
const printLinkList=(head)=>{
    if(head==null) return;
    console.log(head.value);
    printLinkList(head.next)
}
printLinkList(a)
