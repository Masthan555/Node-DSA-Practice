/* Masthan Swamy */

function getSum(str, alphabets){
    let sum = 0;
    for(let i=0; i<str.length; i++){
        sum += alphabets[str[i]];
    }
    return sum;
}

let anagrams = (arr)=>{
    let freq = [];
    let alphabets = {};
    let abcs = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabets['a'] = 1;
    for(let i=1; i<=13; i++){
        alphabets[abcs[i]] = alphabets[abcs[i-1]] + 26 + abcs[i].charCodeAt()-96;
    }
    for(let i=14; i<26; i++){
        alphabets[abcs[i]] = alphabets[abcs[i-1]] + 52 + abcs[i].charCodeAt()-96;
    }
    
    let res = {};
    for(let i=0; i<arr.length; i++){
        let temp = getSum(arr[i], alphabets); 
        if(res[temp]){
            res[temp].push(arr[i]);
        }else{
            res[temp] = [arr[i]];
        }
    }
    let output = [];
    console.log(output);
    for(let [key, val] of Object.entries(res)){
        output.push(val);
        res[key] = undefined;
    }
    console.log(output);

    return output;
}

let arr = ["tea", "eat"];
console.log(anagrams(arr));