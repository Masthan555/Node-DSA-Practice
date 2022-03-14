/* Masthan Swamy */

<<<<<<< HEAD
let longestConsec = (arr)=>{
    let hash = {};
    for(let c of arr){
        if(!hash[c]){
            hash[c] = false;
        }
    }

    let ans = [];
    for(let i in arr){
        let start = arr[i];
        let temp = [];
        if(hash[start-1] != false){
            while(hash[start] == false){
                temp.push(start);
                hash[start] = true;
                start++;
            }
        }
        console.log(start, temp, i);
        if(temp.length >= ans.length){
            ans = [...temp];
        }
    }

    return ans;
}

let arr = [1, 5, 2, 3, 4, 9 ,6, 7, 11, 0, 0, 14, 13, 8, 12];
console.log(longestConsec(arr));
=======
let consecSequence = (arr)=>{
    let hash = {};
    let start = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(hash[arr[i]-1] && (arr[i]-1)<start){
            start = arr[i-1];
        }
        hash[arr[i]] = 1;
    }

    let res = [];
    while(hash[start]){
        res.push(start);
        start++;
    }
    return res;
}

let arr = [0, 3, 7, 2, 5, 8, 4, 6, 1];//[100, 4, 200, 1, 3, 2];
console.log(consecSequence(arr));
>>>>>>> 9f39004f0ee3c54f4292bcd806d51510cafd0d35
