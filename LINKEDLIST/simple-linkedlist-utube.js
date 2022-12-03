// class list {
//     constructor(data) {
//         this.head = {
//             value: data,
//             next: null
//         }
//         this.tail = this.head
//         this.size = 1;
//     }
//     appendNode(nodeData) {
//         let newNode = {
//             value: nodeData,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode
//         this.size++
//     }
//     travering() {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter < this.size) {
//             console.log(counter)
//             currentNode = currentNode.next
//             counter++;
//         }
//     }
// }
// let List = new list(200);
// List.appendNode(400)
// List.appendNode(500)
// List.appendNode(600)
// List.appendNode(700)
// List.travering();
// console.warn(List);













// Q3==
// lass Node {
//     constructor(data) {
//     this.data = data
//     this.next = null
//     }
//     }
//     // stack = [1234321]
//     function isPalindrome(head)
//     {
//     var slow = head;
//     var ispalin = true;
//     var stack = []
//     while (slow != null)
// {
// stack.push(slow.data);
// slow = slow.ptr;
// }

// while (head != null)
// {
// var i = stack.pop();
// if (head.data == i)
// {
// ispalin = true;
// }
// else
// {
// ispalin = false;
// break;
// }
// head = head.ptr;
// }
// return ispalin;
// }
   

// Q2===
// function countNodes( n) {
//     var res = 1;
//     temp = n;
//     while (temp.next != n) {
//     res++;
//     temp = temp.next;
//     }
//     return res;
//     }
//     function countNodesinLoop(list) {
//     var slow_p = list, fast_p = list;
//     while (slow_p != null && fast_p != null && fast_p.next != null) {
//     slow_p = slow_p.next;
//     fast_p = fast_p.next.next;
//     if (slow_p == fast_p)
//     return countNodes(slow_p);
// }

// /* Return 0 to indicate that there is no loop */
// return 0;
// }

// Q1===
// function reverse(list, prev) {
//     // if this is the last node, switch it with previous and return
//     if (list.next == undefined) {
//     list.next = prev;
//     return list;
//     }
//     var ret = reverse(list.next, list);
// list.next = prev;
// return ret;
// }



//https://www.linkedin.com/in/divanshu-verma-7968434a/
    // otherwise, switch it with the reverse of what is next


