/* Masthan Swamy */

const {Queue} = require("./Queue");

class QueueStack{
    constructor(){
        this.queue = new Queue();
    }

    push(x){
        this.queue.enque(x);
    }

    pop(){
        if(!this.queue.isEmpty()){
            let temp = new Queue();
        
            let val = this.queue.deque();
            while(!this.queue.isEmpty()){
                temp.enque(val);
                val = this.queue.deque();
            }

            while(!temp.isEmpty()){
                this.queue.enque(temp.deque());
            }

            return val;
        }
    }
}

let qs = new QueueStack();

qs.push(10);
qs.push(20);
qs.push(30);

console.log(qs.pop());
console.log(qs.pop());