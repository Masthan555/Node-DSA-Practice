/* Masthan Swamy */

let maxOccurChar = (str)=>{
    let chars = {};
    for(let c of str){
        if(chars[c]){
            chars[c]++;
        }else{
            chars[c] = 1;
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    let res = "";
    console.log(chars);
    for(let i of Object.keys(chars)){
        if(chars[i] > max){
            max = chars[i];
            res = i;
        }
    }

    return res;
}

let str = "Masthan";
console.log(maxOccurChar(str));