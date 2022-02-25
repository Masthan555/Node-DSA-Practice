/* Masthan Swamy */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function(headA, headB) {
    let obj = {};
    let temp = headA;
    while(temp){
        obj[temp] = temp;
        temp = temp.next;
    }

    temp = headB;
    while(temp){
        if(obj[temp]){
            return temp.val;
        }
        temp = temp.next;
    }

    return null;
};

let l1 = new ListNode(4);
l1.next = new ListNode(1);
l1.next.next = new ListNode(8);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(1);
l2.next.next.next = l1.next.next;

console.log(getIntersectionNode(l1, l2));