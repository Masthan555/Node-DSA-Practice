/* Masthan Swamy */

class HashTable{
    constructor(){
        this.lambda = 0; // Load Factor
        this.MAX_LOAD_FACTOR = 0.75
        this.sizeOfHashTable = 2;
        this.noOfElements = 0;
        this.bucket = new Array(this.sizeOfHashTable);
    }

    hash(key){ // Here we used polynomial hashing
        let result = 0;
        let prime = 5381; // magic number
        for(let c of key){
            result += (prime*c.charCodeAt())%this.sizeOfHashTable;
            prime *= 5381;
        }
    }
}

let hash = (key)=>{ // Here we used polynomial hashing
    let result = 0;
    let prime = 5381; // magic number
    for(let i=0; i<key.length; i++){
        result = (result + key.charCodeAt(i)*prime)%1000;
        prime *= 5381;
    }
    return result;
}

console.log(hash("abc"));