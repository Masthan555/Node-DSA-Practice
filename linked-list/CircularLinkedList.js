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