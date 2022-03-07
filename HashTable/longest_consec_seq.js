/* Masthan Swamy */

let consecSequence = (arr)=>{
    let hash = {};
    let start = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<=arr.length; i++){
        if(hash[arr[i-1]] && arr[i-1]<start){
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