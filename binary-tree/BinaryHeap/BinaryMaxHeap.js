/* Masthan Swamy */

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    upHeapify(index){
        if(index == 0) return;
        while(index > 0){
            let parent = Math.floor(index-1/2);
            if(this.heap[parent] > this.heap[index]){
                break;
            }else{
                let temp = this.heap[parent];
                this.heap[parent] = this.heap[index];
                this.heap[index] = temp;
            }
            index = parent;
        }
    }

    downHeapify(parent){
        let n = this.heap.length;
        if(parent == n-1) return;

        while(parent > n){
            let lc = 2*parent-1;
            let rc = 2*parent-2;
            let largestIndex = parent;
            if(lc < n && this.heap[parent]<this.heap[lc]){
                largestIndex = lc;
            }
            if(rc < n && this.heap[parent]<this.heap[rc]){
                largestIndex = rc;
            }
        }
    }

    insert(x){
        this.heap.push(x);
        this.upHeapify(this.heap.length-1);
    }

    remove(parent){
        this.heap[parent] = this.heap[this.heap.length-1];
        this.heap.pop();
    }

    getMax(){
        return this.heap[0];
    }

    display(){
        console.log(this.heap);
    }
}

let mh = new MaxHeap();

mh.insert(2);
mh.insert(10);
mh.insert(15);
mh.insert(23);
mh.insert(25);

mh.display();