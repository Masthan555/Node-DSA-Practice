/* Masthan Swamy */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
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
        while(temp.next){
            temp = temp.next;
        }
        temp.next = node;
        this.length++;
    }
    insertAtIndex(index, data){
        let node = new Node(data);
        let count = 1;
        let temp = this.head;

        if(!temp){
            this.insertAtStart(data);
            return;
        }
        else if(index>this.length){
            return "out of length";
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

    printList(){
        let temp = this.head;
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new LinkedList();

ll.insertAtStart(20);
ll.printList();
console.log();
ll.insertAtEnd(30);
ll.printList();
console.log();
ll.insertAtIndex(1, 50);
ll.printList();
console.log();

module.exports = {LinkedList};