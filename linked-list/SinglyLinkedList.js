/* Masthan Swamy */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(arr){
        this.head = null;
        this.length = 0;
        if(arr){
            for(let i in arr){
                this.insertAtEnd(arr[i]);
            }
        }
    }

    isEmpty(){
        return(this.length == 0);
    }

    insertAtStart(data){
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    insertAtEnd(data){
        let node = new Node(data);
        let temp = this.head;
        if(!temp){
            this.head = node;
            this.length++;
        }else{
            while(temp.next){
                temp = temp.next;
            }
            temp.next = node;
            this.length++;
        }
    }
    insertAtIndex(index, data){
        let node = new Node(data);
        let count = 1;
        let temp = this.head;

        if(!temp){
            this.insertAtStart(data);
        }
        else if(index>this.length){
            this.insertAtEnd(node);
            return this.length;
        }
        else{
            while(count<index){
                temp = temp.next;
                count++;
            }
            node.next = temp.next;
            temp.next = node;
            this.length++;
        }
    }

    getElement(index){
        let count = 0;
        let temp = this.head;
        if(index<0 || index>=this.length){
            return undefined;
        }else{
            while(count<index && temp){
                temp = temp.next;
                count++;
            }
    
            return temp.data;
        }
    }

    removeAtStart(){
        if(this.head){
            let temp = this.head;
            this.head = temp.next;
            this.length--;
            return temp.data;
        }
    }

    removeAtIndex(index){
        if(index == 0){
            return this.removeAtStart();
        }else if(index<0 || index>=this.length){
            return("Out of bounds");
        }else{
            if(this.head){
                let count = 1;
                let temp = this.head;
                while(count<index){
                    temp = temp.next;
                    count++;
                }
                let curr = temp.next;
                temp.next = curr.next;

                return curr.data;
            }
        }
    }

    printList(){
        let temp = this.head;
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    size(){
        return this.length;
    }
}

let ll = new LinkedList();

ll.insertAtStart(20);
ll.printList();
console.log("---------------------");
ll.insertAtEnd(30);
ll.printList();
console.log("---------------------");
ll.insertAtIndex(1, 50);
ll.printList();
console.log("---------------------");
console.log(ll.getElement(2));
console.log("---------------------");
console.log(ll.removeAtStart());
console.log(ll.removeAtStart());
console.log("---------------------");
ll.insertAtEnd(50);
ll.insertAtEnd(20);
ll.insertAtEnd(40);
ll.printList();
console.log("---------------------");
ll.removeAtIndex(3);
ll.printList();

module.exports = {Node, LinkedList};