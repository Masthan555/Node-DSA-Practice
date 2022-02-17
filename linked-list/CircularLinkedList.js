/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.tail = null;
        this.length = 0;
    }

    isEmpty(){
        return(this.length == 0);
    }

    insert(data, index = this.length){
        if(index == 0){
            if(this.isEmpty()){ // Insert at first
                this.tail = new Node(data);
                this.tail.next = this.tail;
            }else{
                let node = new Node(data);
                node.next = this.tail.next;
                this.tail.next = node;
            }
            this.length++;
        }else if(index == this.length){// Insert after tail
            let node = new Node(data);
            node.next = this.tail.next;
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }else{
            if(index<0 || index>this.length){
                return("Out of Bounds!!");
            }else{
                let node = new Node(data);
                let count = 1;
                let temp = this.tail.next;
                while(count<index){
                    temp = temp.next;
                    count++;
                }
                let curr = temp.next;
                temp.next = node;
                node.next = curr;
                this.length++;
            }
        }
    }

    removeAtIndex(index){
        if(index<0 || index>=this.length)   return;

        if(index==0){
            if(this.length == 1){
                let temp = this.tail;
                this.tail = null;
                this.length--;
                return temp.data;
            }else{
                let temp = this.tail.next;
                this.tail.next = temp.next;
                this.length--;
                return temp.data;
            }
        }else{
            let temp = this.tail.next;
            let count = 1;
            while(count<index){
                temp = temp.next;
                count++;               
            }
            if(index == this.length-1){
                temp.next = this.tail.next;
                this.tail = temp;
                this.length--;
                return temp.data;
            }else{
                let curr = temp.next;
                temp.next = curr.next;
                this.length--;
                return curr.data;
            }
        }

    }

    printList(){
        if(!this.isEmpty()){
            let temp = this.tail.next;;
            do{
                console.log(temp.data);
                temp = temp.next;
            }while(temp != this.tail.next);
        }
    }
}

let cll = new LinkedList();

cll.insert(10);
cll.insert(20);
cll.insert(30, 0);
cll.insert(40);
cll.printList();
console.log("--------------------------");
cll.removeAtIndex(0);
cll.printList();
console.log("--------------------------");
cll.removeAtIndex(1);
cll.printList();
console.log("--------------------------");
cll.removeAtIndex(1);
cll.printList();