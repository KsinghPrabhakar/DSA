// https://drive.google.com/drive/folders/1Ie--RgWbKLGmNLGqHVtHuw-Ld43WzFls
// https://jamboard.google.com/d/11QVKN5AzV5wbORHfTzvb61I8i7YFUeWX5J1HCFXbigM/viewer


class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        
        if(head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }

    print(){
        let current=this.head;

        while(current!=null){
            console.log(
                `${current.prev==null?null : current.prev.value} <- ${current.value} -> ${current.next==null? null: current.next.value}
                `
            );

            current=current.next;
        }
    }

    append(element){
        this.length++;

        let newNode=new Node(element); 

        if(this.head==null){
            this.head=newNode;
            this.tail=newNode;
            return;
        }

        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
    }

    size(){
        return this.length;
    }

    insertAt(position,element){
        let newNode=new Node(element);

        if(position<0){
            console.log("Please give positive position");
            return;
        }

        if(position==0){
            if(this.head==null){
                this.head=newNode;
                this.tail=newNode;
            }
            else{
                newNode.next=this.head;
                this.head.prev=newNode;
                this.head=newNode;
            }
        }
        else if(position==this.length){
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        else{
            let index=0;
            let current=this.head;
            let previous;

            while(index++ < position){
                previous=current;
                current=current.next;
            }

            newNode.next=current;
            previous.next=newNode;

            current.prev=newNode;
            newNode.prev=previous;
        }

        this.length++;
    }

    removeAt(position){
        if(position<0){
            console.log("Please give positive position");
            return;
        }

        if(position==0){
            this.head=this.head.next;

            if(this.length==1){
                this.tail=null;
            }
            else{
                this.head.prev=null;
            }
        }
        else if(position==this.length-1){
            let current=this.tail;
            this.tail=current.prev;
            this.tail.next=null;
        }
        else{
            let index=0;
            let previous;
            let current=this.head;

            while(index++ < position){
                previous=current;
                current=current.next;
            }

            previous.next=current.next;
            current.next.prev=previous;
        }

        this.length--;
        
        return current.value;
    }

    removeAfter(node){
        node.next=node.next.next;
        node.next.prev=node.prev;
    }

    getAt(index){
        let count=0;
        let current=this.head;
        while(current!=null){
            if(count==index){
                return current;
            }
            count++;
            current=current.next;
        }
        return null;
    }

    indexOf(element){
        let current=this.head;
        let index=-1;

        while(current!=null){
            if(element==current.value){
                return ++index;
            }

            index++;
            current=current.next;
        }

        return -1;
    }

    isPresent(element){
        return this.indexOf(element)!==-1;
    }

    delete(element){
        return this.removeAt(this.indexOf(element));
    }

    deleteHead(){
        this.removeAt(0);
    }

    deleteTail(){
        this.removeAt(this.length-1);
    }
}

let node=new Node(1);
let list=new DoublyLinkedList();

//console.log(node);
// list.print();
// console.log('******');
list.append(1);//0
list.append(2);//1
list.append(3);//2
list.append(4);//3
// list.print();
//  console.log('******');
// list.insertAt(1,2);
 list.print();
 console.log(list.getAt(1));
list.removeAfter(list.getAt(1))
console.log('******');
list.print();
//console.log('size',list.size())
