/* Masthan Swamy */

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