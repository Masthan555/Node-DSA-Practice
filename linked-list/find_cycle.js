/* Masthan Swamy */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    if(!head) return false;

    let fast = head;
    let slow = head;
    
    let flag = false;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow){
            console.log(slow.val, fast.val);
            flag = true;
            break;
        }
    }

    return flag;
};

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;

console.log(hasCycle(head));