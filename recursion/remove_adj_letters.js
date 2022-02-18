/* Masthan Swamy */

let remAdjChars = (str, i, j, res)=>{
    if(i>=j || j>str.length) return res;

    if(str[i] == str[j]){
        return remAdjChars(str, i+2, j+2, res);
    }

    if(res.length>0){
        if(res[res.length-1] == str[i]){
            res = res.slice(0, res.length-1);
        }else{
            res = res + str[i];
        }
    }else{
        res = res + str[i];
    }
    // console.log(res, str[i], str[j]);
    return remAdjChars(str, i+1, j+1, res);
}

let str = "a";
console.log(remAdjChars(str, 0, 1, ""));