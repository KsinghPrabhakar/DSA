class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')

a.next=b;
b.next=c;
c.next=d;
// console.log(a);
const LinkListValue=(head)=>{
    let values=[];
    let current=head;
    while(current!==null){
        values.push(current.value);
        current=current.next;
    }
    return values;
}

let res = LinkListValue(a)
console.log(res);
