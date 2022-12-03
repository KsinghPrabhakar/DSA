// https://github.com/mishra28soumya/Stacks-and-Queues/blob/main/stacks.js
// jambord // https://webwhiteboard.com/board/AK4vhpNHpo7ajGR7OF73jdRmECeFZzup/
class Stact{
    constructor(){
        this.items = []
    }
    add(element){
        this.items.push(element);  //push  time conplexity (0(1))denote constant time
    }
    size(){
        return this.items.length;
    }
    remove(){
        return this.items.pop() //0(1)
    }
    peek(){
        let lastindex =this.items.length-1;
        return this.items[lastindex];
    }
}
let st1 = new Stact();
st1.add(7);
st1.add(14);
st1.add(12);
st1.add(15);
st1.add(18);
st1.add(12);
console.log(st1.items);
// console.log(st1.remove()); 
// console.log(st1.size()); 
console.log(st1.peek()); 

/**To summarize on TC:

Stack:
push - O(1)
pop - O(1)
printAllElements - O(n)

Queue:
enqueue - O(1)
dequeue - O(1)
printAllElemts - O(n)

=> here n is the size of input */
/**
* recursive relation:
* range(x, y) = return [x].concat(range(x+1, y))
* base case:
* if (x === y) return [x]
*/