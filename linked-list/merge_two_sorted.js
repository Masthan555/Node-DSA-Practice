/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Using extra space
 */
// var mergeTwoLists = function(l1, l2) {
//     let res = null;
//     let head = null;
//     while(l1 || l2){
//         if(l1 && l2){
//             if(l1.val < l2.val){
//                 if(res){
//                     res.next = new ListNode(l1.val);
//                     res = res.next;
//                 }else{
//                     res = new ListNode(l1.val);
//                     head = res;
//                 }
//                 l1 = l1.next;
//             }else{
//                 if(res){
//                     res.next = new ListNode(l2.val);
//                     res = res.next;
//                 }else{
//                     res = new ListNode(l2.val);
//                     head = res;
//                 }
//                 l2 = l2.next;
//             }
//         }else if(!l1){
//             if(res){
//                 res.next = new ListNode(l2.val);
//                 res = res.next;
//             }else{
//                 res = new ListNode(l2.val);
//                 head = res;
//             }
//             l2 = l2.next;
//         }else{
//             if(res){
//                 res.next = new ListNode(l1.val);
//                 res = res.next;
//             }else{
//                 res = new ListNode(l1.val);
//                 head = res;
//             }
//             l1 = l1.next;
//         }
//     }
    
//     return(head);
// };

var mergeTwoListsSpaceOptimised = (l1, l2)=>{
    let fakeHode = new ListNode();
    let current = fakeHode;
    while(l1 && l2){
        if(l1.val <= l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;

    return fakeHode.next;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(3);

// let res = mergeTwoLists(l1, l2);
let res = mergeTwoListsSpaceOptimised(l1, l2);

while(res){
    console.log(res.val);
    res = res.next;
}
