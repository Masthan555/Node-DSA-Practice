/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// var deleteDuplicates = function(head) {
//     let temp = head;
//     let prev = head;
//     let current = head.next;
//     let repeated;
//     while(prev.next){
//         if(prev.val != repeated){
//             if(prev.val != current.val){
//                 // prev = prev.next;
//                 current = current.next;
//             }else{                
//                 repeated = prev.val;
//                 current = current.next;
//             }
//         }else{
//             prev.next = null;
//             prev.next = current;
//             repeated = undefined;
//         }
//         // if(prev.val != current.val){
//         //     if(prev.val != repeated){
                
//         //     }else{
                
//         //     }
//         // }else{
//         //     repeated = prev.val;
//         //     current = current.next;
//         // }
//     }

//     return head;
// };

var deleteDuplicates = function(head) {
    let temp = new ListNode();
    temp.next = head;
    let prev = temp, curr = head;
    while(curr){
        while(curr.next && curr.val == curr.next.val)
            curr = curr.next;
        
        if(prev.next == curr)
            prev = curr
        else
            prev.next = curr.next

        curr = curr.next
    }

    return temp.next;
};

function insertLL(arr){

    let listNode = new ListNode(arr[0]);
    let head = listNode;
    let newNode;
    for(let i=1; i<arr.length; i++){
        newNode = new ListNode(arr[i]);
        listNode.next = newNode;
        listNode = newNode;
    }
    return head;
}

function traverseLL(head){
    while(head != null){
        console.log(head.val);
        head = head.next;
    }
}



let arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];//[1,1,1,2,3];//[2,1,1]//[1,1];//[1,2,3,3,4,4,5];//[1,1,1,2,3]
let head = insertLL(arr);
// traverseLL(head);
console.log(traverseLL(deleteDuplicates(head)));

