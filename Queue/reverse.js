/* Masthan Swamy */

const {Queue} = require("./Queue");
const {Stack} = require("../Stacks/implementation");

let reverse = (queue)=>{
    let stack = new Stack();

    while(!queue.isEmpty()){
        stack.push(queue.deque());
    }

    while(!stack.isEmpty()){
        queue.enque(stack.pop());
    }
}

let queue = new Queue();

queue.enque(10);
queue.enque(20);
queue.enque(30);

reverse(queue);

console.log(queue.getFront());