class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let a = new Node(3)
let b = new Node(4)
let c = new Node(2)
let d = new Node(6)

a.next = b;
b.next = c;
c.next = d;


const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null){
        if(count==index) return current.value
        count +=1;
        current = current.next;
    }
    return null;
}

// recurssion
// const getNodeValue = (head,index)=>{
//     if(head == null) return null;
//     if(index==0) return head.value;
//     return getNodeValue(head, index-1)
// }
let res = getNodeValue(a, 2)
console.log(res);








