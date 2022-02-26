/* Masthan Swamy */

let patternOccur = (str, patt)=>{
    let res = [];
    let n1 = patt.length;
    let i = 0;
    for(let c in str){
        if(str[c] == patt[i]){
            i++;
            if(i == n1){
                res.push(c-n1+1);
                i = 0;
            }
        }
    }

    return res;
}

let str = "AAA";
let patt = "AA";
console.log(patternOccur(str, patt));