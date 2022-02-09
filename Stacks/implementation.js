/* Masthan Swamy */

class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(x){
        this.data[this.top] = x;
        this.top++;
    }

    isEmpty(){
        return (this.data.length==0);
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        this.top--;
        return(this.data.pop());
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        return(this.data[this.top-1]);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

// console.log(stack.pop());

// console.log(stack.peek());

// console.log(stack.pop());

module.exports = {Stack};