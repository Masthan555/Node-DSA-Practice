/* Masthan Swamy */

const {Stack} = require("./implementation");

let balanceBraces = (str)=>{
    let stack = new Stack();
    for(let i in str){
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            stack.push(str[i]);
        }else{
            switch(str[i]){
                case ')' : if(stack.peek() != '(')  return false; break;
                case ']' : if(stack.peek() != '[')  return false; break;
                case '}' : if(stack.peek() != '{')  return false; break;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

let str = "()[]{}";
console.log(balanceBraces(str));