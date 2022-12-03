class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first node
    InsertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // insert at last
    insertLast(data) {
        let node = new Node(data);
        let current;
        // if empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // printlistdata
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

// let n1 = new Node(100)
// let n2 = new Node(200)
// n1.next = n2
// console.log(n1);


//insert first
let ll = new LinkedList();
ll.InsertFirst(100)
ll.InsertFirst(200)
ll.InsertFirst(300)
ll.insertLast(400)
// console.log(ll);
ll.printListData();


//insert at last
