class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
 
a.next=b;
b.next=c;
c.next=d;
d.next=e;

// console.log(a);

// recurssion
// const NodeReverse=(head,prev=null)=>{
//     if(head==null) return prev
//     const next = head.next;
//     head.next=prev;
//     return NodeReverse(next,head)
// }
// let res= NodeReverse(a)
// console.log(res);


// const NodeReverse = (head)=>{
//     let prev = null;
//     let current=head;
//     while(current!==null){
//         const next = current.next;
//         current.next=prev;
//         prev=current;
//         current=next;
//     }
//     return prev;
// }
// let res = NodeReverse(a)
// console.log(res);

//GFG
// const reverse=(head)=>{
// let current = head;
// let prev = null;
// if(current) {
//     while(current !== null) {
//         let temp = current.next;
//         current.next = prev;
//         prev = current;
//         current = temp;
//     }
// } else {
//     return head;
// }
// return prev;
// }
// console.log(reverse(a))

//GFG
// const displayNode=(head)=>{
//     let res = '';
//     let current=head;
//     while(current !== null){
//         res +=(current.value)+'';
//         current=current.next
//     }
//     console.log(res);
// }
// displayNode(a)