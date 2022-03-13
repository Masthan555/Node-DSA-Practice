/* Masthan Swamy */

const {HashTable} = require("./HashTable");

let groupAnagrams = (arr)=>{
    let res = new HashTable();
    for(let s of arr){
        let sorted = s.split("").sort().join("");
        let temp = res.get(sorted);
        if(temp){
            temp.push(s);
            res.set(sorted, temp);
        }else{
            res.set(sorted, [s]);
        }
    }

    let op = [];
    for(let i=0; i<res.data.length; i++){
        let temp2 = res.data[i];
        while(temp2){  
            if(temp2.data.value.length>0)
                op.push(temp2.data.value);
            temp2 = temp2.next;
        }
    }
    return op;
}

let arr = ["bat", "ate", "eat", "tan", "nat", "tea", "tab"];
console.log(groupAnagrams(arr));