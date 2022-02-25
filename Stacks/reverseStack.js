/* Masthan Swamy */

let {Stack} = require("./implementation");
let {insertAtBottom} = require("./insertAtBottom");

let reverseStack = (stack)=>{
    if(stack.isEmpty())
        return;

    let val = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, val);
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
reverseStack(stack);
// console.log("PEEK: ", stack.peek());
stack.print();