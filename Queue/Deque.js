/* Masthan Swamy */

class Deque{
    constructor(){
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty(){
        return((this.rear - this.front) == 0);
    }
    addFront(x){
        if(this.isEmpty()){
            this.addBack(x);
            return;
        }
        if(this.front == 0){ // create new array of double size
            let arr = new Array(2*(this.rear - this.front));
            let i = arr.length-1;
            let j = this.rear-1;
            while(j>=this.front){
                arr[i] = this.data[j];
                i--;
                j--;
            }
            this.data = arr;
            this.front = i;
            this.data[this.front] = x;
        }else{
            this.front--;
            this.data[this.front] = x;
        }
    }
    addBack(x){
        this.data[this.rear] = x;
        this.rear++;
    }
    removeFront(){
        if(!this.isEmpty()){
            let temp = this.data[this.front];
            this.front++;
            return temp;
        }
    }
    removeBack(){
        if(!this.isEmpty()){
            let temp = this.data[this.rear-1];
            this.rear--;
            return temp;
        }
    }

    getFront(){
        if(this.isEmpty()) return;
        return(this.data[this.front]);
    }

    getRear(){
        if(this.isEmpty()) return;
        return(this.data[this.rear-1]);
    }
}

let deque = new Deque();

deque.addBack(10);
deque.addBack(20);
// deque.removeFront();
deque.removeBack();
deque.removeBack();
// deque.addFront(30);
// deque.addBack(40);
// deque.addBack(50);
// deque.addFront(25);
// deque.addFront(20);

// console.log(deque.getFront());

module.exports = {Deque};