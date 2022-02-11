/* Masthan 00000 */

let {LinkedList} = require("./implementation");

let reverseList = (ll)=>{
    let prev = ll.head;
    ll.head = ll.head.next;
    let curr = ll.head;
    let next = ll.head.next;
};