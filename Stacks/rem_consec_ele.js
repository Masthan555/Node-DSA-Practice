/* Masthan Swamy */

const {stack} = require("./implementation");

function rem_consec(arr){
    for(let i in arr){
        if(arr[i] == stack.peek()){
            continue;
        }
        console.log(arr[i]);
        stack.push(arr[i]);
    }
}

let arr = [1, 1, 2, 1, 1, 3, 3, 3, 3, 2, 1, 1];
rem_consec(arr);