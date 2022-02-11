/* Masthan Swamy */

var findAnagrams = function(s, p) {

    let res = [];
    for(let i = 0; i<s.length; i++){
        let j = i;
        let str = "";
        while(j<(i+p.length) && j<s.length){
            str += s[j]; j++;
        }
        if(str.split("").sort().join() == p.split("").sort().join()){
            res.push(i);
        }
    }

    return(res);
};

let s = "AAABABAA", p = "AABA";
console.log(findAnagrams(s, p));