/* Masthan Swamy */

class Stack{
    constructor(arr){
        this.data = [];
        this.top = 0;
        this.min = 0;
    
        if(arr){
            for(let i in arr){
                this.data[this.top] = arr[i];
                this.top++;       
            }
        }
    }

    push(x){
        if(this.isEmpty()){
            this.min = x;
            this.data[this.top] = x-this.min;    
        }else{
            this.data[this.top] = x-this.min;
            if(x<this.min)
                this.min = x;
        }
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
        let x = this.data.pop();
        let val = this.min;
        if(x<0)
            this.min = this.min - x;
        else if(x ==0 && this.top==0)
            this.min = 0;
        return(val);
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        let x = this.data[this.top-1];
        if(x<0)
            return((this.min - this.data[this.top-1])+this.data[this.top-1]);
        else
            return(this.min + x);
    }

    getMinimum(){
        return(this.min);
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(5);
stack.push(-3);
stack.push(-5);
stack.push(-2);
// stack.push(0);
stack.pop();
stack.pop();

console.log(stack.peek());