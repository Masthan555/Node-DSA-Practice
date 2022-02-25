/* Masthan Swamy */

let longestSubstring = (str)=>{
    let hash = {};
    let max = 0;
    let temp = 0;
    for(let c of str){
        if(!hash[c]){
            hash[c] = 1;
            temp++;
        }else{
            if(max<temp){
                max = temp;
            }temp;
            hash[c]--;
        }
    }
    if(max<temp){
        max = temp;
    }

    return max;
}

let str = "abcadbabcde";
console.log(longestSubstring(str));