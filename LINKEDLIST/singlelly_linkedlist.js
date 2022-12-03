/*

Insert-> beginning, specific place, end
Remove-> beginning, specific place, end
get
clear

*/

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        if(this.head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }

    size(){
        return this.length;
    }

    print(){
        let current=this.head;

        if(current==null)
        {
            console.log("Linkedlist is empty");
            return;
        }

        while(current!=null){
            console.log(current.value);
            current=current.next;
        }

        console.log('************')

    }

    clear(){
        this.head=null;
    }

    getLast(){
        if(this.head==null){
            console.log("Linked list is empty");
            return;
        }

        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        return current;
    }

    getFirst(){
        if(this.head==null){
            console.log("Linkedlist is empty");
            return;
        }
        return this.head;
    }


searchElement(value){
    let currentNode = this.head;
    while(currentNode !== null){
        if(currentNode.value === value) return true;
        currentNode = currentNode.next;
    }
    return false;
}



    //Add the node at the tail of the linkedlist
    append(value){

    //Create a new Node by creating a instance of a Node class
    const newNode = new Node(value);

    // Check if head is present or not, if head is empty creates a head
    if (this.head == null){
        this.head = node;
        this.tail=node;
    }
    else{ //Else creates a tail

    //We need to point current tail's next to the newNode
    this.tail.next = newNode;

    //Now make newNode a tail node
    this.tail = newNode;

    //Increase the length by 1
    this.length++;
    }
    return this;
}

//Add the node as a head of the linkedlist
prepend(value){
    //Create a new Node by creating a instance of a Node class
    const newNode = new Node(value);
    //Points this node's next to the head
    newNode.next = this.head;
    //Now make this node a head node
    this.head = newNode;
    //Increase the length by 1
    this.length++;
    return this;
}

}

LinkedList.prototype.insertAtBeginning=function(value){
    let newNode=new Node(value);
    newNode.next=this.head;
    this.head=newNode;
    return this.head;
}

LinkedList.prototype.insertAtEnd=function(value){
    // A newNode object is created with property data and next=null
    
    let newNode = new Node(value);
// When head = null i.e. the list is empty, then head itself will point to the newNode.
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
// Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
   let tail = this.head;
   while(tail.next !== null){
        tail = tail.next;
   }
   tail.next = newNode;
   return this.head;
}


LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let current = this.head;
    while (current!=null) {
        if (counter === index) {
           return current;
        }
        counter++;
        current = current.next;
    }
    return null;
}

LinkedList.prototype.insertAt = function(value, index){
    // if the list is empty i.e. head = null
            if (!this.head) {
                this.head = new Node(value);
                return;
            }
    // if new node needs to be inserted at the front of the list i.e. before the head. 
            if (index === 0) {
                let newNode=new Node(value);
                newNode.next=this.head;
               this.head = newNode;
               return;
            }
    // else, use getAt() to find the previous node.
            const previous = this.getAt(index - 1);
            let newNode = new Node(value);
            newNode.next = previous.next;
            previous.next = newNode;       
    
            return this.head
       }

 LinkedList.prototype.deleteFirstNode = function(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

 

LinkedList.prototype.deleteLastNode = function(){
    
    // if only one node in the list
    if(!this.head.next){
        this.head = null;
        return;
    }

   let previous = this.head;
   let tail = this.head.next;
   
   while(tail.next !== null){
       previous = tail;
       tail = tail.next;
   }
   
   previous.next = null;
   return this.head;
}


LinkedList.prototype.deleteAt = function(index){
    // when list is empty i.e. head = null
        if (!this.head) {
             return;
         }

    // node needs to be deleted from the front of the list i.e. before the head.
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
    // else, use getAt() to find the previous node.
        const previous = this.getAt(index - 1);
        
        if (!previous || !previous.next) {
            return;
        }
        
        previous.next = previous.next.next;     
        return this.head
    }



LinkedList.prototype.deleteList = function(){
    this.head = null;
}



    


   




let node =new Node(100);
let node2=new Node(200);
node.next=node2;
let linkedList=new LinkedList(node);
linkedList.print();
// linkedList.clear();
// linkedList.print();
// console.log(linkedList.getLast());
// console.log(linkedList.getFirst());
//linkedList.insertAtBeginning(2);
linkedList.insertAtEnd(1222);
console.log(linkedList.getAt(1));
// linkedList.print();





// let node1=new Node(10); 
// let node2=new Node(20);
// let node3=new Node(30);



// node1.next=node2;
// node2.next=node3;

// console.log(node2);