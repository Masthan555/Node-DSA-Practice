/* Masthan Swamy */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let intersection = (l1, l2)=>{

    while(l1 && l2){
        if(l1 == l2){
            return l1;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return null;
}

var getIntersectionNode = function(headA, headB) {
    let a1 = 0, b1 = 0;
    // Finding A length
    let temp = headA;
    while(temp){
        temp = temp.next;
        a1++;
    }  
    // Finding B length
    temp = headB;
    while(temp){
        temp = temp.next;
        b1++;
    }

    let diff = Math.abs(a1-b1);
    if(a1>b1){
        let temp = headA;
        while(a1 != b1){
            temp = temp.next;
            a1--;
        }
        return intersection(temp, headB);
    }else{
        let temp = headB;
        while(b1!=a1){
            temp = temp.next;
            b1--;
        }
        return intersection(headA, temp);
    }

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