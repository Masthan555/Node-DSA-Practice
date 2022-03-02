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

    hash(x){
        let magicPrime = 5381;
        let temp = magicPrime;
        let sum = 0;
        for(let c of x){
            sum += (c.charCodeAt() * temp);
            temp *= magicPrime;
        }
        return(sum%this.sizeOfTable);
    }

    set(key, value){
        let hash = this.hash(key);

        if(this.data[hash]){
            let temp = this.data[hash];
            while(!temp.next){
                temp = temp.next;
            }
            temp.next = new Node({key, value});
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
            for(let i=0; i<temp.length; i++){
                if(temp[i]){
                    this.set(temp[i].data.key, temp[i].data.value);
                }
            }
        }
    }
}

let ht = new HashTable();
ht.set("1", "Masthan");
ht.set("2", "Madhavi");
ht.set("2", "Aranya");