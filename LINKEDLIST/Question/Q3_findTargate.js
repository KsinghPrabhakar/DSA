class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let a = new Node(4)
let b = new Node(3)
let c = new Node(1)
let d = new Node(2)
let e = new Node(6)

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const findListItem = (head, targate) => {
    let current = head
    while (current !== null) {
        if (current.value == targate) {
            return true;
        }
        current = current.next;
    }
    return false;
}

let res = findListItem(a, 232)
console.log(res);


//recurssion not working
// const findListItem1 = (head, targate1) => {
//     if (head == null) return false;
//     if (head.value == targate1) return true;
//     return findListItem1(head.value, targate1)
// }

// let res0 = findListItem1(a, 3)
// console.log(res0);