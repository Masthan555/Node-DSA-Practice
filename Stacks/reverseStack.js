/* Masthan Swamy */

let {stack} = require("./implementation");

function insertAtBottom(stack, val){
    if(stack.isEmpty()){
        stack.push(val);
        return;
    }

    let top = stack.pop();
    insertAtBottom(stack, val);
    stack.push(top);
}

function reverseStack(stack){
    if(stack.isEmpty()){
        return;
    }

    let val = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, val);
}

console.log("Peak: ", stack.peek());
reverseStack(stack);
console.log("Peak: ", stack.peek());

module.exports = {insertAtBottom};