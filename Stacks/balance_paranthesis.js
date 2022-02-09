/* Masthan Swamy */

const {Stack} = require("./implementation");

function balance(str){
    let stack = new Stack();
    for(let i in str){
        if(str[i] == '('){
            stack.push(0);
        }else{
            if(!stack.isEmpty())
                stack.pop();
            else
                return false;
        }
    }

    if(stack.isEmpty())
        return true;
    else
        return false;
    
}

let str = "()(";//")())()((()))(";
console.log(balance(str));