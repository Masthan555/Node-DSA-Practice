/* Masthan Swamy */

let {Stack} = require("./implementation");

let removeDuplicates = (str)=>{
    let stack = new Stack();
    let res = "";
    for(let c of str){
        if(!stack.isEmpty()){
            if(stack.peek() == c){
                stack.pop();
                res = res.slice(0, res.length-1);
                continue;
            }
        }
        stack.push(c);
        res = res + c;
    }

    return res;
}

let str = "abbaca";
console.log(removeDuplicates(str));