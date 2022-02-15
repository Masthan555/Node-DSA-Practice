/* Masthan Swamy */

let {Node, LinkedList} = require("./SinglyLinkedList");

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

mergeLists = (l1, l2)=>{
    let temp;
    let head = (l2.data<l2.data)?l2:l1;
    
    while(l1 && l2){
        if(l1.data < l2.data){
            temp = l1.next;
            l1.next = l2;
            l2 = temp;
            l1 = l1.next;
        }else{
            temp = l2.next;
            l2.next = l1;
            l1 = temp;
            l2 = l2.next;
        }
    }
    return head;
}

console.log("merge_two_sorted_lists.js");
let l1 = new LinkedList([1, 2, 4]);
let l2 = new LinkedList([1, 3, 4]);

let res = mergeLists(l1.head, l2.head);

while(res){
    console.log(res.val);
}