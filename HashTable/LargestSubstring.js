/* Masthan 00000 */

let largestSubstring = (str)=>{
    let i=0, j=0;

    let hash = {};
    let ans = Number.MIN_SAFE_INTEGER;
    while(j<str.length){
        if(!hash[str[j]]){
            hash[str[j]] = 1;
        }else{
            ans = Math.max(ans, j-i);
            while(str[i] != str[j]){
                hash[str[i]] = undefined;
                i++;
            }
            i++;
        }
        j++;
    }

    return ans;
}

let str = "abcabcbb";
console.log(largestSubstring(str));