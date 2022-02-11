/* Masthan Swamy */

let {Stack} = require("../Stacks/implementation");
let {insertAtBottom} = require("../Stacks/reverseStack");

class StackQueue{
    constructor(){
        this.stack = new Stack();
    }

    enque(data){
        insertAtBottom(this.stack, data);
    }

    deque(){
        return this.stack.pop();
    }

    printQueue(){
        this.stack.peek();
    }
}

let sq = new StackQueue();
sq.enque(10);
sq.enque(20);

console.log(sq.deque());
console.log(sq.deque());