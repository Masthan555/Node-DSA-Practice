/* Masthan Swamy */

// considering enque operations are more, so making enque O(1) indtead of deque

const {Stack} = require("../Stacks/implementation");

class StackQueue{
    constructor(){
        this.stack = new Stack();
    }

    enque(x){
        this.stack.push(x);
    }

    deque(){
        let temp = new Stack();

        while(!this.stack.isEmpty()){
            temp.push(this.stack.pop());
        }
        let val = temp.pop();

        while(!temp.isEmpty()){
            this.stack.push(temp.pop());
        }

        return val;
    }
}

let sq = new StackQueue();

sq.enque(10);
sq.enque(20);
sq.enque(30);

console.log(sq.deque());