class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift(element)
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        if(this.items.length>0){
            return false;
        }else{
            return true;
        }
    }
}
let q = new Queue();
q.enqueue(45)
q.enqueue(14)
q.enqueue(4)
q.enqueue(5)
q.enqueue(1)
console.log(q.items);
q.dequeue();
// console.log(q.)
// console.log(q.items)
q.isEmpty()
console.log(q.items)