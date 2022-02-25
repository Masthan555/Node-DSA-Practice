/* Masthan Swamy */

let {Stack} = require("./implementation");

let insertAtBottom = (stack, ele)=>{
    if(stack.isEmpty()){
        stack.push(ele);
        return;
    }
    let val = stack.pop();
    insertAtBottom(stack, ele);
    stack.push(val);
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

// insertAtBottom(stack, 5);
// stack.print();

module.exports = {insertAtBottom}