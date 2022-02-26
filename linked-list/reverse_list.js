/* Masthan 00000 */

/**
 * Reversing linked list using "three pointer approach"
 */

let {LinkedList} = require("./SinglyLinkedList");

let reverseList = (ll)=>{
    let prev = null;
    let curr = ll.head;
    let next = curr.next;

    while(curr){
        curr.next = prev;
        prev = curr;
        curr = next;
        if(next)
            next  = next.next
    }

    ll.head = prev;
};

let ll = new LinkedList();
ll.insertAtStart(10);
ll.insertAtIndex(1, 20);
ll.insertAtIndex(2, 30);
ll.insertAtIndex(3, 40);
ll.insertAtEnd(50);

console.log("Before Reversing : ");
ll.printList();
reverseList(ll);
console.log("After Reversing: ");
ll.printList();