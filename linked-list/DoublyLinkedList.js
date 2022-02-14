/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty(){
        return(this.length == 0);
    }

    insertAtStart(data){
        if(this.isEmpty()){
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            let node = new Node(data);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    insertAtEnd(data){
        if(this.isEmpty()){
            this.insertAtStart(data);
        }else{
            let node = new Node(data);
            let temp = this.head;

            while(temp.next){
                temp = temp.next;
            }
            temp.next = node;
            node.prev = temp;
            this.tail = node;
            this.length++;
        }
    }

    insertAtIndex(index, data){
        if(index == 0){
            this.insertAtStart(data);
        }else if(index<0 || index>this.length){
            return("Out of bounds");
        }else if(index == this.length){
            this.insertAtEnd(data);
        }else{
            let temp = this.head;
            let node = new Node(data);
            let count = 1;
            while(count<index){
                temp = temp.next;
                count++;
            }
            node.prev = temp;
            node.next = temp.next;
            temp.next.prev = node;
            temp.next = node;
            this.length++;
        }
    }

    getElement(index){
        if(index<0 || index>=this.length){
            return;
        }
        if(!this.isEmpty()){
            let temp = this.head;
            let count = 0;
            while(count<index){
                temp = temp.next;
                count++;
            }
            return temp.data;
        }
    }

    removeAtStart(){
        if(!this.isEmpty()){
            let temp = this.head;
            this.head = temp.next;
            this.head.prev = null;
            this.length--;
            return temp.data;
        }
    }

    removeAtIndex(index){
        if(index<0 || index>=this.length) return;

        if(!this.isEmpty()){
            if(index == 0){
                return this.removeAtStart();
            }else if(index == this.length-1){ // Deleting last node
                let temp = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;
                return temp.data;
            }else{
                let temp = this.head;
                let count = 1;
                while(count<index){
                    temp = temp.next;
                    count++;
                }
                let curr = temp.next;
                let next = curr.next;
                temp.next = next;
                next.prev = temp;
                this.length--;

                return curr.data;
            }
        }
    }

    printList(flag){
        if(!flag){ // Print from Start
            let temp = this.head;
            while(temp){
                console.log(temp.data);
                temp = temp.next;
            }
        }else{
            let temp = this.tail;
            while(temp){
                console.log(temp.data);
                temp = temp.prev;
            }
        }
    }
}

let dll = new LinkedList();
dll.insertAtStart(10);
dll.insertAtIndex(1, 20);
dll.insertAtEnd(30);
dll.insertAtIndex(3, 40);

dll.printList(0);
console.log("----------------------");
dll.printList(1);
console.log("----------------------");
console.log(dll.getElement(3));
console.log("----------------------");
dll.removeAtStart();
dll.printList();
console.log("----------------------");
dll.removeAtIndex(1);
dll.printList();
console.log("----------------------");
dll.insertAtEnd(30);
dll.insertAtEnd(50);
console.log(dll.removeAtIndex(3));
dll.printList();

module.exports = {LinkedList};