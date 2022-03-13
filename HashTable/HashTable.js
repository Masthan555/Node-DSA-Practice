/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class HashTable{
    constructor(){
        this.data = [];
        this.noOfElementsAdded = 0;
        this.sizeOfTable = 2;
        this.loadFactor = 0;
    }

    hash(x){ // Polynomial Hash
        let magicPrime = 5381;
        let temp = magicPrime;
        let sum = 0;
        let m = this.sizeOfTable;
        for(let c of x){
            sum =  (sum + (c.charCodeAt() * temp)%m)%m;
            temp *= magicPrime;
        }
        return(sum);
    }

    set(key, value){
        let hash = this.hash(key);

        if(this.data[hash]){
            let temp = this.data[hash];
            let prev = temp;
            while(temp){
                if(temp.data.key == key){ // means entry already exists, so update it
                    temp.data.value = value; return;
                }
                prev = temp;
                temp = temp.next;
            }
            prev.next = new Node({key, value});
        }else{
            this.data[hash] = new Node({key, value});
        }

         this.noOfElementsAdded += 1;
        this.loadFactor = (this.noOfElementsAdded/this.sizeOfTable);
        if(this.loadFactor>0.5){
            let temp = this.data;
            this.sizeOfTable *= 2;
            this.data = new Array(this.sizeOfTable);
            this.noOfElementsAdded = 0;
            this.loadFactor = 0;
            for(let i=0; i<temp.length; i++){
                if(temp[i]){
                    let tempNode = temp[i];
                    while(tempNode){
                        this.set(tempNode.data.key, tempNode.data.value);
                        tempNode = tempNode.next;
                    }
                }
            }
        }
    }

    get(key){
        let hash = this.hash(key);

        let temp = this.data[hash];
        while(temp){
            if(temp.data.key == key){
                return temp.data.value;
            }
            temp = temp.next;
        }
    }
}

let ht = new HashTable();
// ht.set("Sanket", "linkedin");
// ht.set("sanjeet", "ms");
// ht.set("bitto", "amazon");
// ht.set("vishwa", "linkedin");


// console.log(ht.data);

module.exports = {HashTable};